/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Question, QuestionType } from "../types";
import GlassContainer from "./GlassContainer";
import {
  ChevronLeft,
  ChevronRight,
  Check,
  X,
  Bookmark,
  Send,
} from "lucide-react";
import { motion } from "motion/react";

interface Props {
  question: Question;
  currentAnswer: any;
  isMarked: boolean;
  onAnswer: (answer: any) => void;
  onToggleMark: () => void;
  totalQuestions: number;
  currentIndex: number;
  onPrev: () => void;
  onNext: () => void;
}

export default function QuestionDisplay({
  question,
  currentAnswer,
  isMarked,
  onAnswer,
  onToggleMark,
  totalQuestions,
  currentIndex,
  onPrev,
  onNext,
  onFinishRequest,
  onOpenMobileNav,
}: Props & { onFinishRequest: () => void; onOpenMobileNav: () => void }) {
  const handleTrueFalse = (subId: string, val: boolean) => {
    const current = currentAnswer || {};
    onAnswer({ ...current, [subId]: val });
  };

  const isCodeBlock =
    question.content.includes("Python") || question.content.includes("C++");

  function renderTextWithCode(text?: string) {
    if (!text) return null;
    const parts: Array<string | React.ReactNode> = [];
    const re = /`([^`]+)`/g;
    let lastIndex = 0;
    let m: RegExpExecArray | null;
    while ((m = re.exec(text)) !== null) {
      if (m.index > lastIndex) parts.push(text.slice(lastIndex, m.index));
      parts.push(
        <code key={parts.length} className="font-mono bg-white/5 px-1 rounded">
          {m[1]}
        </code>,
      );
      lastIndex = re.lastIndex;
    }
    if (lastIndex < text.length) parts.push(text.slice(lastIndex));
    return (
      <>
        {parts.map((p, i) =>
          typeof p === "string" ? <span key={i}>{p}</span> : p,
        )}
      </>
    );
  }

  return (
    <div className="flex flex-col h-full bg-[#0F011A]/60 border border-white/10 rounded-[24px] md:rounded-[40px] backdrop-blur-2xl shadow-2xl relative overflow-hidden p-4 md:p-10 w-full group">
      {/* Decorative Lines and Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] overflow-hidden rounded-[inherit]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:20px_20px]" />
      </div>

      {/* Top Navigation and Actions */}
      <div className="flex justify-between items-center mb-4 md:mb-10 relative z-20">
        <div
          onClick={onOpenMobileNav}
          className="flex items-center gap-3 md:gap-4 cursor-pointer group/nav"
        >
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover/nav:bg-neon-pink group-hover/nav:border-white transition-all duration-500 shadow-lg relative overflow-hidden">
            <span className="text-lg md:text-xl font-black italic relative z-10">
              {currentIndex + 1}
            </span>
            <div className="absolute inset-x-0 bottom-0 h-[2px] md:h-[3px] bg-neon-pink" />
          </div>
          <div className="flex flex-col">
            <span className="text-[8px] md:text-[10px] uppercase font-bold tracking-widest text-white/40 mb-0.5">
              Câu hỏi
            </span>
            <div className="flex items-center gap-2">
              <span className="text-[10px] md:text-xs font-bold text-white/80 uppercase">
                {currentIndex + 1}/{totalQuestions}
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          <button
            onClick={onToggleMark}
            className={`
              flex items-center gap-2 md:gap-3 px-3 md:px-5 py-2 md:py-2.5 rounded-lg md:rounded-xl border transition-all text-[10px] md:text-xs font-bold tracking-widest uppercase
              ${
                isMarked
                  ? "bg-orange-500/10 border-orange-500/50 text-orange-400"
                  : "bg-white/5 border-white/10 text-white/30 hover:bg-white/10 hover:border-white/20"
              }
            `}
          >
            <Bookmark
              className={`w-3.5 h-3.5 md:w-4 md:h-4 ${isMarked ? "fill-current" : ""}`}
            />
            <span className="hidden sm:inline">
              {isMarked ? "Đã đánh dấu" : "Đánh dấu"}
            </span>
          </button>
        </div>
      </div>

      <div className="flex-grow pt-2 md:pt-6 overflow-y-auto custom-scrollbar pr-1 -mr-1 mb-4">
        <div className="relative mb-6 md:mb-10">
          {/* Question Content */}
          <div className="absolute -left-10 top-2 w-[2px] h-full bg-gradient-to-b from-neon-pink via-neon-pink/20 to-transparent hidden lg:block" />
          {isCodeBlock ? (
            <div className="rounded-3xl border border-white/10 bg-white/5 p-4 md:p-6 text-sm md:text-base font-mono leading-relaxed text-white/90 whitespace-pre-wrap break-words">
              {renderTextWithCode(question.content)}
            </div>
          ) : (
            <h3 className="text-lg md:text-2xl font-bold leading-relaxed text-white/90 whitespace-pre-wrap tracking-tight break-words">
              {renderTextWithCode(question.content)}
            </h3>
          )}
        </div>

        {question.imageUrl && (
          <div className="mb-6 md:mb-10 rounded-2xl md:rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl max-w-full md:max-w-2xl mx-auto group/img relative">
            <img
              src={question.imageUrl}
              alt="Question"
              className="w-full h-auto object-contain bg-black/40"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity" />
          </div>
        )}

        {question.type === QuestionType.SINGLE_CHOICE ? (
          <div className="grid grid-cols-1 gap-3 md:gap-4">
            {question.options?.map((opt) => {
              const isSelected = currentAnswer === opt.id;
              return (
                <button
                  key={opt.id}
                  onClick={() => onAnswer(opt.id)}
                  className={`
                    w-full text-left p-4 md:p-6 rounded-xl md:rounded-[1.5rem] border flex items-center gap-4 md:gap-6 transition-all relative z-10 group/opt
                    ${
                      isSelected
                        ? "border-neon-pink bg-neon-pink/[0.08] shadow-lg shadow-neon-pink/10"
                        : "border-white/10 bg-white/[0.02] hover:border-white/30 hover:bg-white/[0.04]"
                    }
                  `}
                >
                  <div
                    className={`
                    w-9 h-9 md:w-12 md:h-12 shrink-0 rounded-lg md:rounded-xl border-2 flex items-center justify-center font-black transition-all text-base md:text-lg
                    ${
                      isSelected
                        ? "bg-neon-pink border-white text-white"
                        : "border-white/10 text-white/20 group-hover/opt:border-white/30 group-hover/opt:text-white/40"
                    }
                  `}
                  >
                    {opt.id}
                  </div>
                  <span
                    className={`text-sm md:text-lg transition-all break-words ${isSelected ? "font-bold text-white" : "font-medium text-white/70"}`}
                  >
                    {renderTextWithCode(opt.text)}
                  </span>

                  {isSelected && (
                    <div className="ml-auto">
                      <Check className="w-4 h-4 md:w-5 md:h-5 text-neon-pink" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        ) : (
          <div className="space-y-4 md:space-y-6">
            {question.subQuestions?.map((sub) => {
              const subAnswer = currentAnswer?.[sub.id];
              return (
                <div
                  key={sub.id}
                  className="p-4 md:p-8 rounded-xl md:rounded-[2rem] bg-white/[0.02] border border-white/10 flex flex-col lg:flex-row lg:items-center justify-between gap-4 md:gap-6 transition-all hover:bg-white/[0.04]"
                >
                  <div className="flex items-start gap-4 md:gap-5">
                    <div className="bg-neon-pink/10 px-2 py-0.5 md:px-3 md:py-1 rounded-md md:rounded-lg border border-neon-pink/20 shrink-0">
                      <span className="font-bold text-neon-pink text-[10px] md:text-xs italic tracking-tighter uppercase">
                        {sub.id}
                      </span>
                    </div>
                    <p className="text-sm md:text-lg font-medium text-white/80 leading-relaxed">
                      {renderTextWithCode(sub.text)}
                    </p>
                  </div>
                  <div className="flex gap-3 md:gap-4 shrink-0">
                    <button
                      onClick={() => handleTrueFalse(sub.id, true)}
                      className={`
                        flex-1 lg:flex-none px-6 md:px-8 py-2.5 md:py-3 rounded-lg md:rounded-xl border font-bold text-[10px] md:text-xs uppercase tracking-widest transition-all
                        ${
                          subAnswer === true
                            ? "bg-green-500/20 border-green-500 text-green-400"
                            : "bg-white/5 border-white/10 text-white/30 hover:bg-white/10"
                        }
                      `}
                    >
                      Đúng
                    </button>
                    <button
                      onClick={() => handleTrueFalse(sub.id, false)}
                      className={`
                        flex-1 lg:flex-none px-6 md:px-8 py-2.5 md:py-3 rounded-lg md:rounded-xl border font-bold text-[10px] md:text-xs uppercase tracking-widest transition-all
                        ${
                          subAnswer === false
                            ? "bg-red-500/20 border-red-500 text-red-400"
                            : "bg-white/5 border-white/10 text-white/30 hover:bg-white/10"
                        }
                      `}
                    >
                      Sai
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Navigation Footer */}
      <div className="mt-auto flex flex-col items-center pt-4 md:pt-8 border-t border-white/10 gap-4 md:gap-8 relative z-20">
        <div className="flex gap-3 w-full">
          <button
            onClick={onPrev}
            disabled={currentIndex === 0}
            className="flex-1 px-4 md:px-8 py-3.5 md:py-4 rounded-lg md:rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 font-bold tracking-widest uppercase text-[10px] md:text-xs transition-all flex items-center justify-center gap-2 md:gap-3 disabled:opacity-10 active:scale-95"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Quay lại</span>
            <span className="sm:hidden">Lùi</span>
          </button>
          <button
            onClick={onNext}
            disabled={currentIndex === totalQuestions - 1}
            className="flex-1 px-4 md:px-10 py-3.5 md:py-4 rounded-lg md:rounded-xl bg-white/[0.08] border border-white/20 hover:bg-white/[0.12] hover:border-white/40 font-bold tracking-widest uppercase text-[10px] md:text-xs transition-all flex items-center justify-center gap-2 md:gap-3 disabled:opacity-10 active:scale-95"
          >
            <span className="hidden sm:inline">Câu tiếp theo</span>
            <span className="sm:hidden">Tiếp</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <button
          onClick={onFinishRequest}
          className="w-full group relative h-11 md:h-12 px-6 md:px-10 rounded-lg md:rounded-xl bg-gradient-to-r from-neon-pink to-neon-purple text-white shadow-lg shadow-neon-pink/10 hover:scale-[1.02] active:scale-95 transition-all"
        >
          <div className="flex items-center justify-center gap-2 md:gap-3 relative z-10">
            <Send className="w-4 h-4" />
            <span className="text-[10px] md:text-xs font-black tracking-[0.1em] md:tracking-[0.2em] uppercase italic">
              NỘP BÀI THI
            </span>
          </div>
        </button>
      </div>
    </div>
  );
}
