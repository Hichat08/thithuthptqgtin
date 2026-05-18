/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { AlertCircle } from 'lucide-react';
import GlassContainer from './GlassContainer';

interface Props {
  isOpen: boolean;
  onCancel: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  confirmLabel?: string;
  hideCancel?: boolean;
}

export default function ConfirmPopup({ 
  isOpen, 
  onCancel, 
  onConfirm, 
  title, 
  message,
  confirmLabel = "Xác nhận",
  hideCancel = false
}: Props) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={hideCancel ? undefined : onCancel}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            className="relative w-full max-w-md"
          >
              <div className="glass-card p-10 md:p-12 text-center rounded-[2.5rem]">
                <div className="w-16 h-16 bg-red-500/10 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-red-500/20">
                   <AlertCircle className="w-8 h-8 text-red-500" />
                </div>

                <div className="space-y-2 mb-8">
                   <h3 className="text-2xl font-black text-white italic uppercase tracking-tight">{title}</h3>
                   <p className="text-sm font-medium text-white/50 leading-relaxed px-4">{message}</p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  {!hideCancel && (
                    <button
                      onClick={onCancel}
                      className="flex-1 py-4 rounded-xl bg-white/5 border border-white/10 font-bold text-sm text-white/40 hover:bg-white/10 hover:text-white transition-all uppercase"
                    >
                      Quay lại
                    </button>
                  )}
                  <button
                    onClick={onConfirm}
                    className="flex-1 py-4 rounded-xl bg-red-500 text-white font-black text-sm tracking-widest hover:bg-red-600 shadow-xl shadow-red-500/20 transition-all active:scale-95 uppercase"
                  >
                    {confirmLabel}
                  </button>
                </div>
              </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
