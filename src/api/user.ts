export interface UserPayload {
  name: string;
  className: string;
}

export async function fetchSavedUser(): Promise<UserPayload | null> {
  try {
    const response = await fetch("/api/user", {
      credentials: "include",
    });
    if (response.status === 204) return null;
    if (!response.ok) {
      throw new Error("Không thể lấy thông tin người dùng");
    }
    return await response.json();
  } catch (error) {
    console.error("fetchSavedUser error:", error);
    return null;
  }
}

export async function saveUser(user: UserPayload): Promise<UserPayload | null> {
  try {
    const response = await fetch("/api/user", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    if (!response.ok) {
      throw new Error("Không thể lưu thông tin người dùng");
    }
    return await response.json();
  } catch (error) {
    console.error("saveUser error:", error);
    return null;
  }
}
