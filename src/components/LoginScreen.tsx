/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  XCircle,
  User,
  BookOpen,
  ChevronRight,
  ShieldCheck,
  ArrowLeft,
} from "lucide-react";
import { UserInfo } from "../types";
import Logo from "./Logo";
import { EXAM_SETS } from "../data";

interface Props {
  onStart: (info: UserInfo) => void;
  isAdminAuthenticating?: boolean;
  onAdminCancel?: () => void;
}

export default function LoginScreen({
  onStart,
  isAdminAuthenticating,
  onAdminCancel,
}: Props) {
  const [name, setName] = useState("");
  const [className, setClassName] = useState("");
  const [error, setError] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const [password, setPassword] = useState("");
  const [step, setStep] = useState<"form" | "select">("form");
  const [tempUser, setTempUser] = useState<UserInfo | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedName = name.trim();
    const trimmedClass = className.trim();

    if (!trimmedName || !trimmedClass) {
      setError("Vui lòng nhập đầy đủ thông tin!");
      return;
    }
    setTempUser({ name: trimmedName, className: trimmedClass });
    setStep("select");
  };

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggingIn(true);
    setError("");

    // We send a special object that App.tsx will recognize
    onStart({
      name: "Admin",
      className: "264280",
      isAwaitingAdminLogin: true,
      adminPassword: password,
    } as any);

    setIsLoggingIn(false);
  };

  if (isAdminAuthenticating) {
    return (
      <div className="min-h-screen bg-[#0A0014] text-white flex items-center justify-center p-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(236,72,153,0.05),transparent_70%)]" />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md glass-card p-10 md:p-14 text-center relative z-10"
        >
          <div className="w-20 h-20 bg-neon-pink/10 border border-neon-pink/30 rounded-3xl flex items-center justify-center mx-auto mb-8">
            <ShieldCheck className="w-10 h-10 text-neon-pink" />
          </div>
          <div className="space-y-2 mb-8">
            <h2 className="text-3xl font-black italic uppercase tracking-tight">
              Xác thực QTV
            </h2>
            <p className="text-white/40 text-xs font-bold tracking-widest uppercase">
              Email: vietinvestt.vn@gmail.com
            </p>
          </div>

          <form onSubmit={handleAdminLogin} className="space-y-6">
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-xl text-xs font-bold text-center"
              >
                {error}
              </motion.div>
            )}

            <div className="relative group">
              <ShieldCheck className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20 group-focus-within:text-neon-pink transition-colors" />
              <input
                type="password"
                placeholder="Mật khẩu Admin"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-16 bg-white/5 border border-white/10 rounded-2xl px-14 font-bold focus:outline-none focus:border-neon-pink transition-all placeholder:text-white/20"
                autoFocus
              />
            </div>

            <button
              type="submit"
              disabled={isLoggingIn || !password}
              className="w-full h-16 bg-neon-pink text-white rounded-2xl flex items-center justify-center gap-3 font-black uppercase italic tracking-wider hover:bg-neon-pink/80 transition-all active:scale-95 disabled:opacity-50"
            >
              {isLoggingIn ? (
                <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <ChevronRight className="w-6 h-6" />
                  Xác nhận Admin
                </>
              )}
            </button>

            <button
              type="button"
              onClick={onAdminCancel}
              className="w-full text-white/30 hover:text-white transition-colors text-[10px] font-black uppercase tracking-[0.2em] flex items-center justify-center gap-2 italic"
            >
              <ArrowLeft className="w-3 h-3" />
              Hủy và quay lại
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden bg-[#0A0014]">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.05),transparent_70%)]" />
      </div>

      <div className="absolute -top-40 -left-40 w-96 h-96 bg-neon-purple/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-neon-pink/10 rounded-full blur-[120px] animate-pulse delay-700" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-lg relative z-10"
      >
        <div className="glass-card p-10 md:p-14 text-center">
          <div className="flex justify-center mb-10">
            <Logo size="lg" />
          </div>

          <div className="space-y-2 mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white uppercase italic leading-none">
              THI THỬ THPTQG
            </h1>
            <p className="text-white/40 font-bold tracking-[0.2em] text-xs uppercase">
              BẮT ĐẦU KIỂM TRA ĐỊNH KỲ
            </p>
          </div>

          {step === "form" ? (
            <form onSubmit={handleSubmit} className="space-y-8 text-left">
              <div className="space-y-6">
                <div className="group text-left">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-white/40 ml-4 mb-2 block">
                    Họ và Tên
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
                      <User className="w-4 h-4 text-neon-pink" />
                    </div>
                    <input
                      type="text"
                      required
                      placeholder="NHẬP HỌ VÀ TÊN"
                      className="w-full h-16 bg-white/[0.03] border border-white/10 rounded-2xl px-14 text-white placeholder:text-white/20 focus:outline-none focus:border-neon-pink focus:bg-white/[0.06] transition-all"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>

                <div className="group text-left">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-white/40 ml-4 mb-2 block">
                    Lớp
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
                      <BookOpen className="w-4 h-4 text-neon-purple" />
                    </div>
                    <input
                      type="text"
                      required
                      placeholder="NHẬP LỚP CỦA BẠN"
                      className="w-full h-16 bg-white/[0.03] border border-white/10 rounded-2xl px-14 text-white placeholder:text-white/20 focus:outline-none focus:border-neon-purple focus:bg-white/[0.06] transition-all"
                      value={className}
                      onChange={(e) => setClassName(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <AnimatePresence>
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center justify-center gap-2 text-red-400 text-xs font-bold bg-red-400/5 py-4 rounded-xl border border-red-400/10"
                  >
                    <XCircle className="w-4 h-4" />
                    {error}
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                type="submit"
                className="w-full group relative h-16 bg-gradient-to-r from-neon-pink to-neon-purple rounded-2xl text-white font-black tracking-[0.2em] uppercase overflow-hidden shadow-xl hover:scale-[1.02] active:scale-95 transition-all"
              >
                <div className="relative z-10 flex items-center justify-center gap-3">
                  <span>Bắt Đầu Thi</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            </form>
          ) : (
            <div className="space-y-6">
              <h3 className="text-lg font-bold">Chọn đề thi</h3>
              <div className="grid grid-cols-1 gap-4">
                {EXAM_SETS.map((exam) => (
                  <button
                    key={exam.id}
                    onClick={() => {
                      if (tempUser)
                        onStart({ ...tempUser, examId: exam.id } as any);
                    }}
                    className="w-full text-left p-4 rounded-xl bg-white/[0.02] border border-white/10 hover:bg-white/[0.04]"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm font-bold">{exam.title}</div>
                        <div className="text-xs text-white/40">
                          Số câu: {exam.questions.length}
                        </div>
                      </div>
                      <div className="text-sm font-black">Đề {exam.id}</div>
                    </div>
                  </button>
                ))}
              </div>
              <button
                type="button"
                onClick={() => setStep("form")}
                className="w-full text-white/30 hover:text-white transition-colors text-[10px] font-black uppercase tracking-[0.2em] flex items-center justify-center gap-2 italic"
              >
                <ArrowLeft className="w-3 h-3" /> Quay lại
              </button>
            </div>
          )}

          <p className="mt-12 text-[10px] text-white/20 uppercase font-bold tracking-widest italic">
            Tin Học Lớp 12 — Trắc nghiệm định hướng 2026
          </p>
        </div>
      </motion.div>
    </div>
  );
}
