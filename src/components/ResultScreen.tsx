/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { UserInfo, ResultBreakdown, Question, QuestionType } from "../types";
import Logo from "./Logo";
import { motion, AnimatePresence } from "motion/react";
import {
  Trophy,
  Clock,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Eye,
  EyeOff,
  BarChart3,
  Target,
  Zap,
  Award,
  ChevronRight,
} from "lucide-react";
import { useState, useEffect } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
} from "recharts";

interface ScoreRingProps {
  score: number;
  maxScore: number;
}

function ScoreRing({ score, maxScore }: ScoreRingProps) {
  const radius = 85;
  const circumference = 2 * Math.PI * radius;
  const progress = (score / maxScore) * circumference;

  const [offset, setOffset] = useState(circumference);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOffset(circumference - progress);
    }, 500);
    return () => clearTimeout(timer);
  }, [circumference, progress]);

  return (
    <div className="relative flex items-center justify-center p-4">
      <svg className="w-56 h-56 md:w-64 md:h-64 transform -rotate-90">
        <circle
          cx="50%"
          cy="50%"
          r={radius}
          stroke="currentColor"
          strokeWidth="8"
          fill="transparent"
          className="text-white/5"
        />
        <motion.circle
          cx="50%"
          cy="50%"
          r={radius}
          stroke="url(#score-gradient)"
          strokeWidth="8"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 2, ease: "easeOut" }}
          strokeLinecap="round"
          fill="transparent"
        />
        <defs>
          <linearGradient
            id="score-gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#ec4899" />
            <stop offset="100%" stopColor="#9333ea" />
          </linearGradient>
        </defs>
      </svg>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-baseline justify-center">
            <span className="text-4xl md:text-5xl font-bold tracking-tighter text-white">
              {score.toFixed(2)}
            </span>
            <span className="text-base md:text-lg font-medium text-white/40 ml-1">
              /{maxScore.toFixed(2)}
            </span>
          </div>
          <p className="text-xs font-bold text-white/40 uppercase tracking-widest mt-1">
            ĐIỂM TỔNG KẾT
          </p>
        </motion.div>
      </div>
    </div>
  );
}

interface Props {
  user: UserInfo;
  results: ResultBreakdown;
  answers: Record<number, any>;
  questions: Question[];
  examTitle: string;
  onReview: () => void;
  onReset: () => void;
}

export default function ResultScreen({
  user,
  results,
  answers,
  questions,
  examTitle,
  onReview,
  onReset,
}: Props) {
  const [showReviewList, setShowReviewList] = useState(false);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const singleChoiceQuestions = questions.filter(
    (q) => q.type === QuestionType.SINGLE_CHOICE,
  );
  const trueFalseQuestions = questions.filter(
    (q) => q.type === QuestionType.TRUE_FALSE,
  );
  const totalQuestions = questions.length;
  const part1MaxScore = singleChoiceQuestions.length * 0.25;
  const part2MaxScore = trueFalseQuestions.length * 1.0;
  const totalMaxScore = part1MaxScore + part2MaxScore;

  const isCorrect = (qId: number) => {
    const question = questions.find((q) => q.id === qId);
    const answer = answers[qId];
    if (!question || !answer) return false;

    if (question.type === QuestionType.SINGLE_CHOICE) {
      return answer === question.correctOptionId;
    } else {
      let correctCount = 0;
      question.subQuestions?.forEach((sub) => {
        if (answer[sub.id] === sub.correctAnswer) correctCount++;
      });
      return correctCount === 4;
    }
  };

  const chartData = [
    {
      name: "Phần 1",
      score: results.part1Score,
      max: part1MaxScore,
      color: "#ec4899",
    },
    {
      name: "Phần 2",
      score: results.part2Score,
      max: part2MaxScore,
      color: "#9333ea",
    },
  ];

  const singleChoiceCount = singleChoiceQuestions.length;

  return (
    <div className="min-h-screen py-10 px-4 md:px-8 max-w-6xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-8"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-black italic tracking-tight uppercase mb-2">
              Kết Quả Bài Thi
            </h1>
            <p className="text-sm text-white/50 mb-3">{examTitle}</p>
            <p className="text-white/60 font-medium">
              Chúc mừng bạn đã hoàn thành bài thi trắc nghiệm!
            </p>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
              <Trophy className="w-6 h-6 text-neon-pink" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 glass-card p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-neon-pink/5 blur-[100px] -z-10" />

            <div className="flex flex-col md:flex-row items-center gap-12">
              <ScoreRing score={results.totalScore} maxScore={totalMaxScore} />

              <div className="flex-1 w-full space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-center md:text-left">
                  <div className="sm:col-span-2">
                    <span className="text-[10px] text-white/30 uppercase font-bold tracking-widest block mb-1">
                      HỌ VÀ TÊN THÍ SINH
                    </span>
                    <p className="text-2xl md:text-3xl font-black italic text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">
                      {user.name}
                    </p>
                  </div>
                  <div>
                    <span className="text-[10px] text-white/30 uppercase font-bold tracking-widest block mb-1">
                      LỚP
                    </span>
                    <p className="text-2xl font-black">{user.className}</p>
                  </div>
                  <div>
                    <span className="text-[10px] text-white/30 uppercase font-bold tracking-widest block mb-1">
                      XẾP LOẠI
                    </span>
                    <p
                      className={`text-2xl font-black italic ${results.totalScore >= 8 ? "text-green-400" : results.totalScore >= 5 ? "text-blue-400" : "text-red-400"}`}
                    >
                      {results.totalScore >= 8
                        ? "XUẤT SẮC"
                        : results.totalScore >= 5
                          ? "ĐẠT"
                          : "CHƯA ĐẠT"}
                    </p>
                  </div>
                </div>

                <div className="h-[1px] w-full bg-white/10" />

                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-2">
                    <BarChart3 className="w-4 h-4 text-neon-pink" />
                    <span className="text-xs font-bold text-white/40 uppercase tracking-widest">
                      CHI TIẾT ĐIỂM THEO PHẦN
                    </span>
                  </div>
                  <div className="h-40 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={chartData}
                        layout="vertical"
                        margin={{ left: -20, right: 20 }}
                      >
                        <XAxis type="number" hide domain={[0, "dataMax"]} />
                        <YAxis
                          dataKey="name"
                          type="category"
                          stroke="#ffffff40"
                          fontSize={12}
                          width={60}
                        />
                        <Tooltip
                          cursor={{ fill: "rgba(255,255,255,0.03)" }}
                          contentStyle={{
                            background: "#1A0025",
                            border: "1px solid rgba(255,255,255,0.1)",
                            borderRadius: "12px",
                          }}
                        />
                        <Bar dataKey="score" radius={[0, 6, 6, 0]} barSize={20}>
                          {chartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="glass-card p-8 flex flex-col justify-between h-full hover:bg-white/[0.04] transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-blue-400" />
                </div>
                <span className="text-[10px] text-white/20 font-bold uppercase tracking-widest">
                  Thời gian
                </span>
              </div>
              <p className="text-3xl font-black">
                {formatTime(results.timeSpentSeconds)}
              </p>
              <p className="text-xs text-white/40 mt-2">
                Tổng thời gian làm bài mẫu
              </p>
            </div>

            <div className="glass-card p-8 flex flex-col justify-between h-full hover:bg-white/[0.04] transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 rounded-xl bg-neon-pink/10 flex items-center justify-center">
                  <Target className="w-5 h-5 text-neon-pink" />
                </div>
                <span className="text-[10px] text-white/20 font-bold uppercase tracking-widest">
                  Chính xác
                </span>
              </div>
              <p className="text-3xl font-black">
                {singleChoiceCount
                  ? Math.round(
                      (results.part1CorrectCount / singleChoiceCount) * 100,
                    )
                  : 0}
                %
              </p>
              <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden mt-3">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{
                    width: `${singleChoiceCount ? (results.part1CorrectCount / singleChoiceCount) * 100 : 0}%`,
                  }}
                  className="h-full bg-neon-pink"
                />
              </div>
            </div>

            <div className="glass-card p-8 flex flex-col justify-between h-full hover:bg-white/[0.04] transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 rounded-xl bg-neon-purple/10 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-neon-purple" />
                </div>
                <span className="text-[10px] text-white/20 font-bold uppercase tracking-widest">
                  Hoàn thành
                </span>
              </div>
              <p className="text-3xl font-black">
                {Object.keys(answers).length}/{totalQuestions}
              </p>
              <p className="text-xs text-white/40 mt-2">
                Số câu hỏi đã trả lời
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <button
            onClick={() => setShowReviewList(!showReviewList)}
            className="flex-1 py-5 rounded-2xl glass-card flex items-center justify-center gap-3 font-bold hover:bg-white/10 transition-all border-white/20"
          >
            {showReviewList ? (
              <EyeOff className="w-5 h-5" />
            ) : (
              <Eye className="w-5 h-5" />
            )}
            <span>{showReviewList ? "Ẩn chi tiết" : "Review Bài Làm"}</span>
          </button>

          <button
            onClick={onReset}
            className="flex-1 py-5 px-10 bg-gradient-to-r from-neon-pink to-neon-purple rounded-2xl text-white font-black tracking-widest uppercase shadow-xl hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3"
          >
            <RotateCcw className="w-5 h-5" />
            <span>LÀM LẠI BÀI THI</span>
          </button>
        </div>

        <AnimatePresence>
          {showReviewList && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <div className="glass-card p-6 md:p-10 mt-8 space-y-10">
                <div className="flex items-center justify-between border-b border-white/5 pb-6">
                  <div>
                    <h2 className="text-2xl font-black italic uppercase tracking-tight">
                      Chi tiết từng câu
                    </h2>
                    <p className="text-white/40 text-sm">
                      Xem lại các lỗi sai để rút kinh nghiệm
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-5 sm:grid-cols-10 md:grid-cols-20 gap-2 mb-10">
                  {questions.map((q) => {
                    const correct = isCorrect(q.id);
                    const answered = !!answers[q.id];
                    return (
                      <button
                        key={q.id}
                        className={`
                            aspect-square flex items-center justify-center rounded-lg border transition-all text-[10px] font-bold
                            ${!answered ? "bg-white/5 border-white/10 text-white/20" : correct ? "bg-green-500/20 border-green-500/40 text-green-400" : "bg-red-500/20 border-red-500/40 text-red-400"}
                            hover:scale-110 active:scale-90
                          `}
                        onClick={() => {
                          const el = document.getElementById(
                            `review-q-${q.id}`,
                          );
                          el?.scrollIntoView({
                            behavior: "smooth",
                            block: "center",
                          });
                        }}
                      >
                        {q.id}
                      </button>
                    );
                  })}
                </div>

                <div className="space-y-8">
                  {questions.map((q) => {
                    const userAnswer = answers[q.id];
                    const correct = isCorrect(q.id);

                    return (
                      <div
                        key={q.id}
                        id={`review-q-${q.id}`}
                        className="bg-white/[0.02] border border-white/5 p-6 md:p-8 rounded-[2rem] hover:bg-white/[0.04] transition-all scroll-mt-24"
                      >
                        <div className="flex items-center gap-4 mb-6">
                          <span
                            className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-sm border ${correct ? "bg-green-500/10 border-green-500/30 text-green-400" : "bg-red-500/10 border-red-500/30 text-red-400"}`}
                          >
                            #{q.id}
                          </span>
                          <span
                            className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full ${correct ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"}`}
                          >
                            {correct ? "Chính xác" : "Sai"}
                          </span>
                        </div>

                        <h4 className="text-lg font-medium mb-8 text-white/90 leading-relaxed">
                          {q.content}
                        </h4>

                        {q.imageUrl && (
                          <div className="mb-8 rounded-2xl overflow-hidden border border-white/10 max-w-md">
                            <img
                              src={q.imageUrl}
                              alt="Question"
                              className="w-full h-auto"
                            />
                          </div>
                        )}

                        {q.type === QuestionType.SINGLE_CHOICE ? (
                          <div className="grid gap-3">
                            {q.options?.map((opt) => {
                              const isUserSelected = userAnswer === opt.id;
                              const isCorrectOpt = q.correctOptionId === opt.id;

                              return (
                                <div
                                  key={opt.id}
                                  className={`
                                           p-4 rounded-xl border flex items-center gap-4 text-sm transition-all
                                           ${isCorrectOpt ? "bg-green-500/10 border-green-500/40 text-green-400" : isUserSelected ? "bg-red-500/10 border-red-500/40 text-red-400" : "bg-white/[0.02] border-white/5 opacity-50"}
                                         `}
                                >
                                  <span
                                    className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold shrink-0 ${isCorrectOpt ? "bg-green-500 text-white" : isUserSelected ? "bg-red-500 text-white" : "bg-white/5 text-white/40"}`}
                                  >
                                    {opt.id}
                                  </span>
                                  <span className="flex-1 font-medium">
                                    {opt.text}
                                  </span>
                                  {isCorrectOpt && (
                                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                                  )}
                                  {isUserSelected && !isCorrectOpt && (
                                    <XCircle className="w-5 h-5 text-red-500" />
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        ) : (
                          <div className="space-y-4">
                            {q.subQuestions?.map((sub) => {
                              const subUserAns = userAnswer?.[sub.id];
                              const isSubCorrect =
                                subUserAns === sub.correctAnswer;

                              return (
                                <div
                                  key={sub.id}
                                  className={`
                                           p-4 rounded-xl border flex flex-col md:flex-row md:items-center justify-between gap-4
                                           ${isSubCorrect ? "bg-green-500/[0.02] border-green-500/20" : subUserAns !== undefined ? "bg-red-500/[0.02] border-red-500/20" : "bg-white/[0.01] border-white/5"}
                                         `}
                                >
                                  <div className="flex items-start gap-3">
                                    <span className="font-bold text-neon-pink bg-neon-pink/10 px-2 py-0.5 rounded text-[10px] mt-1">
                                      {sub.id}
                                    </span>
                                    <span className="text-sm font-medium opacity-80">
                                      {sub.text}
                                    </span>
                                  </div>
                                  <div className="flex items-center gap-2 shrink-0">
                                    <div
                                      className={`px-4 py-1.5 rounded-lg border text-[10px] font-bold uppercase transition-all ${sub.correctAnswer === true ? "bg-green-500/80 text-white border-green-500 shadow-lg" : "bg-white/5 border-white/10 text-white/20"}`}
                                    >
                                      ĐÚNG
                                    </div>
                                    <div
                                      className={`px-4 py-1.5 rounded-lg border text-[10px] font-bold uppercase transition-all ${sub.correctAnswer === false ? "bg-red-500/80 text-white border-red-500 shadow-lg" : "bg-white/5 border-white/10 text-white/20"}`}
                                    >
                                      SAI
                                    </div>
                                    {subUserAns !== undefined &&
                                      !isSubCorrect && (
                                        <div className="ml-2 flex items-center gap-1 text-[9px] font-black text-red-400 uppercase italic">
                                          <XCircle className="w-3 h-3" />
                                          <span>
                                            Chọn: {subUserAns ? "T" : "F"}
                                          </span>
                                        </div>
                                      )}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
