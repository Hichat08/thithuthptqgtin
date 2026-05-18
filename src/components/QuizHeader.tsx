/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { UserInfo } from "../types";
import { Timer, User, GraduationCap, Send } from "lucide-react";
import GlassContainer from "./GlassContainer";

interface Props {
  user: UserInfo;
  timeRemaining: number;
  onFinishRequest: () => void;
}

export default function QuizHeader({
  user,
  timeRemaining,
  onFinishRequest,
}: Props) {
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <header className="h-16 lg:h-24 bg-black/40 backdrop-blur-md border-b border-white/10 flex items-center justify-between px-4 lg:px-12 shrink-0 relative z-50">
      <div className="flex items-center gap-3 lg:gap-6">
        <div className="flex flex-col">
          <span className="hidden lg:block text-[10px] uppercase font-bold tracking-widest text-white/40 mb-1">
            Thí sinh
          </span>
          <div className="flex items-center gap-2 lg:gap-3">
            <span className="text-xs lg:text-lg font-black tracking-tight text-white uppercase italic truncate max-w-[100px] lg:max-w-none">
              {user.name}
            </span>
            <span className="text-[9px] lg:text-[10px] font-bold text-white/40 bg-white/5 px-1.5 py-0.5 rounded-md border border-white/10">
              {user.className.toUpperCase()}
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:absolute lg:left-1/2 lg:-translate-x-1/2 items-center gap-1 lg:gap-3 bg-white/5 px-3 lg:px-6 py-1.5 lg:py-2 rounded-xl lg:rounded-2xl border border-white/10">
        <div className="flex items-center gap-2">
          <Timer className="w-4 h-4 lg:w-5 lg:h-5 text-neon-pink" />
          <span className="text-lg lg:text-2xl font-mono font-black text-white tabular-nums tracking-tighter leading-none">
            {formatTime(timeRemaining)}
          </span>
        </div>
        <span className="hidden lg:block text-[8px] font-bold text-white/40 uppercase tracking-widest">
          Thời gian còn lại
        </span>
      </div>

      <div className="flex items-center">
        <button
          onClick={onFinishRequest}
          className="group relative h-10 lg:h-12 px-5 lg:px-10 rounded-xl bg-gradient-to-r from-neon-pink to-neon-purple text-white transition-all shadow-lg shadow-neon-pink/10 active:scale-95"
        >
          <div className="flex items-center gap-2 lg:gap-3 relative z-10">
            <Send className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
            <span className="text-[10px] lg:text-xs font-black tracking-[0.1em] lg:tracking-[0.2em] uppercase italic">
              NỘP BÀI
            </span>
          </div>
        </button>
      </div>
    </header>
  );
}
