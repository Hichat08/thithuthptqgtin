import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { MongoClient, ObjectId } from "mongodb";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = Number(process.env.PORT || 4000);

const mongoUri = process.env.MONGODB_URI;
if (!mongoUri) {
  throw new Error(
    "Missing MONGODB_URI environment variable. Create a .env file with MONGODB_URI.",
  );
}

const client = new MongoClient(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

await client.connect();
const db = client.db(process.env.MONGODB_DB || "quiz_app");
const usersCollection = db.collection("users");

app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "dist")));

app.get("/api/user", async (req, res) => {
  try {
    const userId = req.cookies?.quiz_user_id;
    if (!userId) {
      return res.status(204).send();
    }

    const user = await usersCollection.findOne({ _id: new ObjectId(userId) });
    if (!user) {
      return res.status(204).send();
    }

    return res.json({ name: user.name, className: user.className });
  } catch (error) {
    console.error("GET /api/user error:", error);
    return res.status(500).json({ error: "Lỗi khi lấy thông tin người dùng." });
  }
});

app.post("/api/user", async (req, res) => {
  try {
    const { name, className } = req.body;
    if (!name || !className) {
      return res.status(400).json({ error: "Tên và lớp là bắt buộc." });
    }

    const cleanName = String(name).trim();
    const cleanClassName = String(className).trim();

    const userId = req.cookies?.quiz_user_id;
    let user;

    if (userId) {
      user = await usersCollection.findOne({ _id: new ObjectId(userId) });
    }

    if (!user) {
      user = await usersCollection.findOne({
        name: cleanName,
        className: cleanClassName,
      });
    }

    if (user) {
      await usersCollection.updateOne(
        { _id: user._id },
        { $set: { name: cleanName, className: cleanClassName } },
      );
    } else {
      const insertResult = await usersCollection.insertOne({
        name: cleanName,
        className: cleanClassName,
        createdAt: new Date(),
      });
      user = {
        _id: insertResult.insertedId,
        name: cleanName,
        className: cleanClassName,
      };
    }

    res.cookie("quiz_user_id", String(user._id), {
      httpOnly: true,
      sameSite: "lax",
      maxAge: 1000 * 60 * 60 * 24 * 30,
    });

    return res.json({ name: cleanName, className: cleanClassName });
  } catch (error) {
    console.error("POST /api/user error:", error);
    return res.status(500).json({ error: "Lỗi khi lưu thông tin người dùng." });
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
