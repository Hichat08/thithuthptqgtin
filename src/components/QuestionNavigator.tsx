/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Question, QuestionType } from '../types';
import { motion } from 'motion/react';
import GlassContainer from './GlassContainer';
import { Bookmark, Trophy } from 'lucide-react';

interface Props {
  questions: Question[];
  answers: Record<number, any>;
  markedForReview: number[];
  currentIndex: number;
  onNavigate: (index: number) => void;
  onFinishRequest: () => void;
}

export default function QuestionNavigator({ questions, answers, markedForReview, currentIndex, onNavigate, onFinishRequest }: Props) {
  const isAnswered = (qId: number) => {
    const ans = answers[qId];
    if (!ans) return false;
    const question = questions.find(q => q.id === qId);
    if (question?.subQuestions) {
      return question.subQuestions.length === Object.keys(ans).length;
    }
    return true;
  };

  const answeredCount = questions.filter(q => isAnswered(q.id)).length;
  const progressPercent = Math.round((answeredCount / questions.length) * 100);

  const singleChoiceQuestions = questions.filter(q => q.type === QuestionType.SINGLE_CHOICE);
  const trueFalseQuestions = questions.filter(q => q.type === QuestionType.TRUE_FALSE);

  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-col gap-1 mb-4 lg:mb-8">
        <div className="flex items-center gap-3">
          <div className="w-1.5 h-5 lg:h-6 bg-neon-pink rounded-full" />
          <h2 className="text-lg lg:text-xl font-bold tracking-tight uppercase italic text-white/90">Danh sách câu hỏi</h2>
        </div>
        <span className="text-[9px] lg:text-[10px] font-bold text-white/20 uppercase tracking-widest ml-5">Kiểm tra tiến độ của bạn</span>
      </div>

      <div className="flex-grow overflow-auto pr-3 custom-scrollbar -mr-3">
        <div className="mb-6 lg:mb-10">
          <div className="flex items-center justify-between mb-3 lg:mb-4 px-1">
             <div className="text-[9px] lg:text-[10px] uppercase font-bold tracking-widest text-white/40">Phần I: Trắc nghiệm</div>
             <div className="text-[9px] lg:text-[10px] font-bold text-neon-pink/60">{singleChoiceQuestions.length} Câu</div>
          </div>
          <div className="grid grid-cols-6 lg:grid-cols-5 gap-1.5 lg:gap-2">
            {singleChoiceQuestions.map((q) => {
              const active = currentIndex === questions.indexOf(q);
              const answered = isAnswered(q.id);
              const marked = markedForReview.includes(q.id);
              return (
                <button
                  key={q.id}
                  onClick={() => onNavigate(questions.indexOf(q))}
                  className={`
                    aspect-square flex items-center justify-center rounded-xl text-xs font-bold border transition-all duration-300 relative
                    ${active 
                      ? 'bg-neon-pink border-white text-white shadow-lg scale-110 z-10' 
                      : marked
                        ? 'bg-orange-500/10 border-orange-500/50 text-orange-400'
                        : answered
                          ? 'bg-neon-purple/10 border-neon-purple/50 text-neon-purple'
                          : 'bg-white/[0.03] border-white/10 text-white/20 hover:bg-white/[0.08] hover:border-white/30'
                    }
                  `}
                >
                  {q.id}
                  {marked && !active && (
                    <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-orange-400 rounded-full" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-3 lg:mb-4 px-1">
             <div className="text-[9px] lg:text-[10px] uppercase font-bold tracking-widest text-white/40">Phần II: Đúng/Sai</div>
             <div className="text-[9px] lg:text-[10px] font-bold text-neon-purple/60">{trueFalseQuestions.length} Câu</div>
          </div>
          <div className="grid grid-cols-6 lg:grid-cols-5 gap-1.5 lg:gap-2">
            {trueFalseQuestions.map((q) => {
              const active = currentIndex === questions.indexOf(q);
              const answered = isAnswered(q.id);
              const marked = markedForReview.includes(q.id);
              return (
                <button
                  key={q.id}
                  onClick={() => onNavigate(questions.indexOf(q))}
                  className={`
                    aspect-square flex items-center justify-center rounded-xl text-xs font-bold border transition-all duration-300 relative
                    ${active 
                      ? 'bg-neon-pink border-white text-white shadow-lg scale-110 z-10' 
                      : marked
                        ? 'bg-orange-500/10 border-orange-500/50 text-orange-400'
                        : answered
                          ? 'bg-neon-purple/10 border-neon-purple/50 text-neon-purple'
                          : 'bg-white/[0.03] border-white/10 text-white/20 hover:bg-white/[0.08] hover:border-white/30'
                    }
                  `}
                >
                  {q.id}
                  {marked && !active && (
                    <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-orange-400 rounded-full" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mt-4 lg:mt-8 grid grid-cols-2 gap-2">
         {[
            { label: 'Đang chọn', color: 'bg-neon-pink' },
            { label: 'Đã làm', color: 'bg-neon-purple/50' },
            { label: 'Đánh dấu', color: 'bg-orange-500/50' },
            { label: 'Chưa làm', color: 'bg-white/10' }
         ].map(item => (
            <div key={item.label} className="flex items-center gap-2 p-1.5 lg:p-2 rounded-lg bg-white/[0.02] border border-white/5">
               <div className={`w-1.5 h-1.5 lg:w-2 lg:h-2 rounded ${item.color}`} />
               <span className="text-[8px] lg:text-[10px] font-bold text-white/30 tracking-widest uppercase">{item.label}</span>
            </div>
         ))}
      </div>

      <div className="mt-auto pt-4 lg:pt-8 border-t border-white/10">
        <div className="p-4 lg:p-6 rounded-[24px] lg:rounded-3xl bg-white/5 border border-white/10 relative overflow-hidden group">
          <div className="relative z-10">
             <div className="text-[8px] lg:text-[10px] font-bold text-white/30 uppercase tracking-widest mb-2 lg:mb-3">Tiến độ bài làm</div>
             <div className="flex justify-between items-baseline mb-2 lg:mb-4">
               <span className="text-2xl lg:text-4xl font-black text-white tabular-nums tracking-tighter">
                 {progressPercent}<span className="text-[10px] lg:text-xs text-white/20 uppercase ml-1">%</span>
               </span>
               <span className="text-[8px] lg:text-[10px] font-bold text-white/40">
                  {answeredCount} / {questions.length} Câu
               </span>
             </div>
             
             <div className="w-full h-1.5 lg:h-2 bg-white/5 rounded-full overflow-hidden">
               <motion.div 
                 initial={{ width: 0 }}
                 animate={{ width: `${progressPercent}%` }}
                 className="h-full bg-gradient-to-r from-neon-pink to-neon-purple" 
                 transition={{ duration: 1.5, ease: "easeOut" }}
               />
             </div>
          </div>
        </div>

        <button 
          onClick={onFinishRequest}
          className="w-full mt-4 lg:mt-6 py-4 lg:py-5 rounded-xl lg:rounded-2xl bg-gradient-to-r from-neon-pink to-neon-purple shadow-lg shadow-neon-pink/10 font-black tracking-widest text-white text-[10px] lg:text-xs uppercase transition-all hover:scale-[1.02] active:scale-95 group overflow-hidden relative"
        >
          <span className="relative z-10">Nộp bài ngay</span>
        </button>
      </div>
    </div>
  );
}
