/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  UserInfo,
  QuestionType,
  ResultBreakdown,
  QuizStatus,
  QuizResultRecord,
} from "./types";
import { EXAM_SETS } from "./data";
import { db, OperationType, handleFirestoreError } from "./lib/firebase";
import { collection, addDoc } from "firebase/firestore";
import LoginScreen from "./components/LoginScreen";
import QuizHeader from "./components/QuizHeader";
import QuestionDisplay from "./components/QuestionDisplay";
import QuestionNavigator from "./components/QuestionNavigator";
import ResultScreen from "./components/ResultScreen";
import AdminScreen from "./components/AdminScreen";
import ConfirmPopup from "./components/ConfirmPopup";

export default function App() {
  const [user, setUser] = useState<UserInfo | null>(() => {
    const saved = localStorage.getItem("quiz_user");
    return saved ? JSON.parse(saved) : null;
  });

  const [quizStatus, setQuizStatus] = useState<QuizStatus>(() => {
    const saved = localStorage.getItem("quiz_status") as any;
    // Do not auto-resume ADMIN status from localStorage to ensure auth is valid
    if (saved === "ADMIN") return "LOGIN";
    return saved || "LOGIN";
  });

  const [isAdminAuthenticating, setIsAdminAuthenticating] = useState(false);

  const [history, setHistory] = useState<QuizResultRecord[]>(() => {
    const saved = localStorage.getItem("quiz_history");
    return saved ? JSON.parse(saved) : [];
  });

  // Listen for auth changes to handle admin sessions
  useEffect(() => {
    let unsub: (() => void) | undefined;

    const initAuth = async () => {
      const { auth, onAuthStateChanged } = await import("./lib/firebase");
      unsub = onAuthStateChanged(auth, (firebaseUser) => {
        if (firebaseUser && firebaseUser.email === "vietinvestt.vn@gmail.com") {
          setQuizStatus("ADMIN");
          setUser({ name: "Admin", className: "264280" });
        } else if (quizStatus === "ADMIN") {
          setQuizStatus("LOGIN");
        }
      });
    };

    initAuth();
    return () => unsub?.();
  }, [quizStatus]);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(() => {
    return Number(localStorage.getItem("quiz_current_index") || 0);
  });

  const [selectedExamId, setSelectedExamId] = useState<number>(() => {
    const saved = localStorage.getItem("quiz_exam_id");
    return saved ? Number(saved) : EXAM_SETS[0]?.id || 1;
  });

  const QUESTIONS =
    EXAM_SETS.find((e) => e.id === selectedExamId)?.questions ||
    EXAM_SETS[0].questions;

  const [answers, setAnswers] = useState<Record<number, any>>(() => {
    const saved = localStorage.getItem("quiz_answers");
    return saved ? JSON.parse(saved) : {};
  });

  const [markedForReview, setMarkedForReview] = useState<number[]>(() => {
    const saved = localStorage.getItem("quiz_marked");
    return saved ? JSON.parse(saved) : [];
  });

  const [startTime, setStartTime] = useState<number | null>(() => {
    const saved = localStorage.getItem("quiz_start_time");
    return saved ? Number(saved) : null;
  });

  const [timeSpent, setTimeSpent] = useState<number>(() => {
    return Number(localStorage.getItem("quiz_time_spent") || 0);
  });

  const [showConfirmSubmit, setShowConfirmSubmit] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);

  const [cheatCount, setCheatCount] = useState<number>(() => {
    return Number(localStorage.getItem("quiz_cheat_count") || 0);
  });
  const [lastCheatTime, setLastCheatTime] = useState<number>(0);
  const [showCheatWarning, setShowCheatWarning] = useState(false);

  // Persistence...
  useEffect(() => {
    if (user) localStorage.setItem("quiz_user", JSON.stringify(user));
    localStorage.setItem("quiz_status", quizStatus);
    localStorage.setItem("quiz_current_index", currentQuestionIndex.toString());
    localStorage.setItem("quiz_answers", JSON.stringify(answers));
    localStorage.setItem("quiz_marked", JSON.stringify(markedForReview));
    if (startTime)
      localStorage.setItem("quiz_start_time", startTime.toString());
    localStorage.setItem("quiz_time_spent", timeSpent.toString());
    localStorage.setItem("quiz_cheat_count", cheatCount.toString());
    localStorage.setItem("quiz_history", JSON.stringify(history));
    localStorage.setItem("quiz_exam_id", String(selectedExamId));
  }, [
    user,
    quizStatus,
    currentQuestionIndex,
    answers,
    startTime,
    timeSpent,
    cheatCount,
    history,
    selectedExamId,
  ]);

  // Anti-cheat: auto-submit after 3 focus losses
  useEffect(() => {
    if (quizStatus !== "RUNNING") return;

    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        const now = Date.now();
        // Prevent double counting within 1 second
        if (now - lastCheatTime < 1000) return;

        setLastCheatTime(now);
        setCheatCount((prev) => {
          const newCount = prev + 1;
          if (newCount >= 3) {
            submitQuiz();
            return newCount;
          }
          setShowCheatWarning(true);
          return newCount;
        });
      }
    };

    window.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("blur", handleVisibilityChange);

    return () => {
      window.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("blur", handleVisibilityChange);
    };
  }, [quizStatus, lastCheatTime]);

  // Timer...
  useEffect(() => {
    let interval: any;
    if (quizStatus === "RUNNING") {
      interval = setInterval(() => {
        setTimeSpent((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [quizStatus]);

  const startQuiz = async (info: any) => {
    // Admin check logic
    if (info.isAwaitingAdminLogin) {
      try {
        const { auth } = await import("./lib/firebase");
        const { signInWithEmailAndPassword } = await import("firebase/auth");

        // We use your email and the password entered
        await signInWithEmailAndPassword(
          auth,
          "vietinvestt.vn@gmail.com",
          info.adminPassword,
        );

        setQuizStatus("ADMIN");
        setUser({ name: "Admin", className: "264280" });
        setIsAdminAuthenticating(false);
      } catch (error: any) {
        console.error("Login Error:", error);
        if (
          error.code === "auth/wrong-password" ||
          error.code === "auth/user-not-found"
        ) {
          alert(
            "Cố gắng đăng nhập thất bại. Vui lòng kiểm tra email/mật khẩu trong Firebase Console.",
          );
        } else if (error.code === "auth/operation-not-allowed") {
          alert(
            'Bạn chưa bật "Email/Password" trong Firebase Console (Authentication > Sign-in method).',
          );
        } else {
          alert("Lỗi đăng nhập: " + error.message);
        }
      }
      return;
    }

    if (info.name.toLowerCase() === "admin" && info.className === "264280") {
      setIsAdminAuthenticating(true);
      return;
    }

    if (info.examId) setSelectedExamId(info.examId);

    setUser(info);
    setQuizStatus("RUNNING");
    setStartTime(Date.now());
    setTimeSpent(0);
    setCurrentQuestionIndex(0);
    setAnswers({});
    setMarkedForReview([]);
  };

  const toggleMarkForReview = (qId: number) => {
    setMarkedForReview((prev) =>
      prev.includes(qId) ? prev.filter((id) => id !== qId) : [...prev, qId],
    );
  };

  const handleAnswer = useCallback(
    (questionId: number, answer: any) => {
      setAnswers((prev) => ({ ...prev, [questionId]: answer }));

      // Auto move to next only for SINGLE_CHOICE part I
      const currentQ = QUESTIONS.find((q) => q.id === questionId);
      if (currentQ?.type === QuestionType.SINGLE_CHOICE && currentQ.id <= 24) {
        if (currentQuestionIndex < QUESTIONS.length - 1) {
          // Use a timeout to let the user see their selection briefly
          const nextIndex = currentQuestionIndex + 1;
          setTimeout(() => {
            setCurrentQuestionIndex((prev) => {
              // Only advance if we are still on the question that was just answered
              // to avoid double-stepping
              if (prev === nextIndex - 1) return nextIndex;
              return prev;
            });
          }, 400);
        }
      }
    },
    [currentQuestionIndex],
  );

  const calculateResults = (): ResultBreakdown => {
    let part1Score = 0;
    let part2Score = 0;
    let part1CorrectCount = 0;
    let part2FullyCorrectCount = 0;

    QUESTIONS.forEach((q) => {
      const answer = answers[q.id];
      if (!answer) return;

      if (q.type === QuestionType.SINGLE_CHOICE) {
        if (answer === q.correctOptionId) {
          part1Score += 0.25;
          part1CorrectCount += 1;
        }
      } else if (q.type === QuestionType.TRUE_FALSE) {
        let correctSubCount = 0;
        q.subQuestions?.forEach((sub) => {
          if (answer[sub.id] === sub.correctAnswer) {
            correctSubCount += 1;
          }
        });

        if (correctSubCount === 4) {
          part2Score += 1.0;
          part2FullyCorrectCount += 1;
        } else if (correctSubCount === 3) {
          part2Score += 0.5;
        } else if (correctSubCount === 2) {
          part2Score += 0.25;
        } else if (correctSubCount === 1) {
          part2Score += 0.1;
        }
      }
    });

    return {
      totalScore: Number((part1Score + part2Score).toFixed(2)),
      part1Score,
      part2Score,
      part1CorrectCount,
      part2FullyCorrectCount,
      timeSpentSeconds: timeSpent,
    };
  };

  const submitQuiz = async () => {
    const results = calculateResults();
    if (user) {
      const record = {
        ...results,
        user,
        timestamp: Date.now(),
      };

      try {
        await addDoc(collection(db, "results"), record);
        // Also update local history for current session immediate feedback if needed
        const localRecord: QuizResultRecord = {
          ...record,
          id: crypto.randomUUID(),
        };
        setHistory((prev) => [localRecord, ...prev]);
      } catch (err) {
        handleFirestoreError(err, OperationType.WRITE, "results");
      }
    }
    setQuizStatus("FINISHED");
    setShowConfirmSubmit(false);
  };

  if (quizStatus === "LOGIN" || (!user && quizStatus !== "ADMIN")) {
    return (
      <LoginScreen
        onStart={startQuiz}
        isAdminAuthenticating={isAdminAuthenticating}
        onAdminCancel={() => setIsAdminAuthenticating(false)}
      />
    );
  }

  if (quizStatus === "ADMIN") {
    return <AdminScreen onBack={() => setQuizStatus("LOGIN")} />;
  }

  if (quizStatus === "FINISHED") {
    const results = calculateResults();
    return (
      <ResultScreen
        user={user}
        results={results}
        answers={answers}
        onReview={() => setQuizStatus("RUNNING")}
        onReset={() => {
          localStorage.clear();
          window.location.reload();
        }}
      />
    );
  }

  return (
    <div className="h-[100dvh] w-full flex bg-[#0A0014] text-white font-sans overflow-hidden select-none">
      {/* Desktop Sidebar: Hide on Mobile */}
      <aside className="hidden lg:flex w-80 bg-black/40 backdrop-blur-xl border-r border-white/10 p-6 flex-col shrink-0">
        <QuestionNavigator
          questions={QUESTIONS}
          answers={answers}
          markedForReview={markedForReview}
          currentIndex={currentQuestionIndex}
          onNavigate={(idx) => {
            setCurrentQuestionIndex(idx);
          }}
          onFinishRequest={() => setShowConfirmSubmit(true)}
        />
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col relative overflow-hidden">
        <QuizHeader
          user={user}
          timeSpent={timeSpent}
          onFinishRequest={() => setShowConfirmSubmit(true)}
        />

        <div className="flex-1 p-2 md:p-8 lg:p-12 flex items-start md:items-center justify-center overflow-y-auto overflow-x-hidden pb-20 md:pb-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestionIndex}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-4xl shrink-0"
            >
              <QuestionDisplay
                question={QUESTIONS[currentQuestionIndex]}
                currentAnswer={answers[QUESTIONS[currentQuestionIndex].id]}
                isMarked={markedForReview.includes(
                  QUESTIONS[currentQuestionIndex].id,
                )}
                onAnswer={(ans) =>
                  handleAnswer(QUESTIONS[currentQuestionIndex].id, ans)
                }
                onToggleMark={() =>
                  toggleMarkForReview(QUESTIONS[currentQuestionIndex].id)
                }
                totalQuestions={QUESTIONS.length}
                currentIndex={currentQuestionIndex}
                onPrev={() =>
                  setCurrentQuestionIndex((prev) => Math.max(0, prev - 1))
                }
                onNext={() =>
                  setCurrentQuestionIndex((prev) =>
                    Math.min(QUESTIONS.length - 1, prev + 1),
                  )
                }
                onFinishRequest={() => setShowConfirmSubmit(true)}
                onOpenMobileNav={() => setShowMobileNav(true)}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 -right-20 w-80 h-80 bg-neon-pink/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-neon-purple/5 blur-[120px] rounded-full pointer-events-none" />
      </main>

      {/* Mobile Question Navigator Overlay */}
      <AnimatePresence>
        {showMobileNav && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowMobileNav(false)}
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm lg:hidden"
            />
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-x-0 bottom-0 z-50 bg-[#0A0014] border-t border-white/10 p-4 md:p-6 rounded-t-[32px] md:rounded-t-[40px] lg:hidden max-h-[90vh] flex flex-col"
            >
              <div className="w-10 h-1 bg-white/10 rounded-full mx-auto mb-4 shrink-0" />
              <div className="overflow-y-auto">
                <QuestionNavigator
                  questions={QUESTIONS}
                  answers={answers}
                  markedForReview={markedForReview}
                  currentIndex={currentQuestionIndex}
                  onNavigate={(idx) => {
                    setCurrentQuestionIndex(idx);
                    setShowMobileNav(false);
                  }}
                  onFinishRequest={() => {
                    setShowMobileNav(false);
                    setShowConfirmSubmit(true);
                  }}
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <ConfirmPopup
        isOpen={showConfirmSubmit}
        onCancel={() => setShowConfirmSubmit(false)}
        onConfirm={submitQuiz}
        title="Xác nhận nộp bài"
        message="Bạn có chắc chắn muốn nộp bài thi ngay bây giờ không?"
      />

      <ConfirmPopup
        isOpen={showCheatWarning}
        onCancel={() => setShowCheatWarning(false)}
        onConfirm={() => setShowCheatWarning(false)}
        title="Cảnh báo vi phạm"
        message={`Bạn đã rời khỏi trang thi ${cheatCount} lần. Nếu vi phạm 3 lần, bài thi sẽ tự động được nộp. Đây là cảnh báo lần thứ ${cheatCount}.`}
        confirmLabel="Tôi đã hiểu"
        hideCancel
      />
    </div>
  );
}
