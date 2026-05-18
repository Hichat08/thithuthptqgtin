/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Trophy, Clock, User, Trash2, ArrowLeft, Download, Search, Loader2, LogOut, ShieldCheck } from 'lucide-react';
import { QuizResultRecord } from '../types';
import Logo from './Logo';
import { db, OperationType, handleFirestoreError } from '../lib/firebase';
import { collection, query, orderBy, onSnapshot, writeBatch, getDocs } from 'firebase/firestore';

interface Props {
  onBack: () => void;
}

export default function AdminScreen({ onBack }: Props) {
  const [results, setResults] = useState<QuizResultRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [authError, setAuthError] = useState<string | null>(null);

  const handleLogout = async () => {
    try {
      const { auth } = await import('../lib/firebase');
      await auth.signOut();
      onBack();
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  useEffect(() => {
    let unsubscribe: (() => void) | undefined;

    const setupListener = async () => {
      const { auth, onAuthStateChanged } = await import('../lib/firebase');
      
      // Wait for the user to be actually signed in before starting the listener
          const authUnsub = onAuthStateChanged(auth, (user) => {
        if (user) {
          if (user.email === 'vietinvestt.vn@gmail.com') {
            const q = query(collection(db, 'results'), orderBy('timestamp', 'desc'));
            
            unsubscribe = onSnapshot(q, (snapshot) => {
              const data = snapshot.docs.map(doc => ({
                ...doc.data(),
                id: doc.id
              })) as QuizResultRecord[];
              setResults(data);
              setLoading(false);
              setAuthError(null);
            }, (error) => {
              handleFirestoreError(error, OperationType.LIST, 'results');
              setLoading(false);
            });
          } else {
            setAuthError(`Email ${user.email} không có quyền truy cập.`);
            setLoading(false);
          }
        } else {
          setLoading(false);
        }
      });

      return () => {
        authUnsub();
        if (unsubscribe) unsubscribe();
      };
    };
    
    let cleanup: (() => void) | undefined;
    setupListener().then(c => cleanup = c);
    return () => cleanup?.();
  }, []);

  const handleClearAll = async () => {
    if (!confirm('Bạn có chắc chắn muốn xóa tất cả kết quả không? Thao tác này sẽ xóa vĩnh viễn dữ liệu trên database.')) return;
    
    try {
      const snapshot = await getDocs(collection(db, 'results'));
      const batch = writeBatch(db);
      snapshot.docs.forEach((doc) => {
        batch.delete(doc.ref);
      });
      await batch.commit();
    } catch (error) {
      handleFirestoreError(error, OperationType.DELETE, 'results');
    }
  };

  const filteredResults = results
    .filter(r => 
      r.user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      r.user.className.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const exportToCSV = () => {
    const headers = ['Họ tên', 'Lớp', 'Điểm tổng', 'Phần I', 'Phần II', 'Thời gian (giây)', 'Ngày thi'];
    const rows = results.map(r => [
      r.user.name,
      r.user.className,
      r.totalScore,
      r.part1Score,
      r.part2Score,
      r.timeSpentSeconds,
      new Date(r.timestamp).toLocaleString()
    ]);

    const csvContent = [headers, ...rows].map(e => e.join(",")).join("\n");
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", `ket_qua_thi_${new Date().toLocaleDateString()}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-[#0A0014] text-white p-6 lg:p-12">
      <div className="max-w-7xl mx-auto">
        {authError ? (
          <div className="glass-card p-12 text-center max-w-2xl mx-auto mt-20">
             <div className="w-20 h-20 bg-red-500/10 border border-red-500/30 rounded-3xl flex items-center justify-center mx-auto mb-8">
               <ShieldCheck className="w-10 h-10 text-red-400" />
             </div>
             <h2 className="text-3xl font-black italic uppercase mb-4">Truy cập bị từ chối</h2>
             <p className="text-white/40 mb-8">{authError}</p>
             <button 
               onClick={handleLogout}
               className="px-10 py-5 bg-white text-black rounded-2xl font-black uppercase italic tracking-widest hover:bg-neon-pink hover:text-white transition-all active:scale-95"
             >
               Đăng xuất & Thử lại
             </button>
          </div>
        ) : loading ? (
          <div className="flex flex-col items-center justify-center py-32 space-y-4">
            <Loader2 className="w-12 h-12 text-neon-pink animate-spin" />
            <p className="text-white/40 font-bold uppercase tracking-widest text-xs">Đang tải dữ liệu...</p>
          </div>
        ) : (
          <>
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
              <div className="flex items-center gap-6">
                <button 
                  onClick={onBack}
                  className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all active:scale-95"
                >
                  <ArrowLeft className="w-5 h-5 text-white/40" />
                </button>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <Logo size="sm" />
                    <span className="text-[10px] font-bold text-neon-pink uppercase tracking-widest bg-neon-pink/10 px-2 py-0.5 rounded border border-neon-pink/20">Quản trị viên</span>
                  </div>
                  <h1 className="text-3xl font-black italic tracking-tight uppercase">Bảng Điều Khiển</h1>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                 <div className="relative flex-grow md:flex-none">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
                    <input 
                      type="text" 
                      placeholder="Tìm kiếm thí sinh..." 
                      className="bg-white/5 border border-white/10 rounded-xl px-12 py-3 text-sm focus:outline-none focus:border-neon-pink w-full md:w-64"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                 </div>
                 <button 
                   onClick={exportToCSV}
                   disabled={results.length === 0}
                   className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed font-bold text-xs uppercase tracking-widest transition-all"
                 >
                   <Download className="w-4 h-4" />
                   Xuất CSV
                 </button>
                 <button 
                   onClick={handleClearAll}
                   disabled={results.length === 0}
                   className="flex items-center gap-2 px-6 py-3 rounded-xl bg-red-500/10 border border-red-500/20 hover:bg-red-500/20 disabled:opacity-50 disabled:cursor-not-allowed text-red-400 font-bold text-xs uppercase tracking-widest transition-all"
                 >
                   <Trash2 className="w-4 h-4" />
                   Xóa tất cả
                 </button>
                 <button 
                   onClick={handleLogout}
                   className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-neon-pink hover:text-white font-bold text-xs uppercase tracking-widest transition-all"
                 >
                   <LogOut className="w-4 h-4" />
                   Đăng xuất
                 </button>
              </div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                { label: 'Tổng số thí sinh', value: results.length, icon: User, color: 'text-neon-pink' },
                { label: 'Điểm trung bình', value: results.length ? (results.reduce((acc, r) => acc + r.totalScore, 0) / results.length).toFixed(1) : 0, icon: Trophy, color: 'text-neon-purple' },
                { label: 'Thời gian TB', value: results.length ? Math.floor(results.reduce((acc, r) => acc + r.timeSpentSeconds, 0) / results.length) + 's' : '0s', icon: Clock, color: 'text-blue-400' }
              ].map((stat, i) => (
                <motion.div 
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-8 flex items-center justify-between"
                >
                  <div>
                    <p className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] mb-1">{stat.label}</p>
                    <p className="text-4xl font-black italic">{stat.value}</p>
                  </div>
                  <div className={`w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center ${stat.color}`}>
                    <stat.icon className="w-7 h-7" />
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="glass-card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/10 bg-white/5">
                      <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-white/40 italic">STT</th>
                      <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-white/40 italic">Thí sinh</th>
                      <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-white/40 italic">Lớp</th>
                      <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-white/40 italic text-center">Phần I</th>
                      <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-white/40 italic text-center">Phần II</th>
                      <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-white/40 italic text-center">Tổng điểm</th>
                      <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-white/40 italic text-center">Thời gian</th>
                      <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-white/40 italic text-right">Ngày nộp</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {filteredResults.map((result, idx) => (
                      <tr key={result.id} className="hover:bg-white/[0.02] transition-colors group">
                        <td className="px-8 py-6 font-mono text-white/20 text-xs">{idx + 1}</td>
                        <td className="px-8 py-6">
                          <div className="font-bold text-lg italic group-hover:text-neon-pink transition-colors">{result.user.name}</div>
                        </td>
                        <td className="px-8 py-6">
                          <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-bold uppercase text-white/60">
                            {result.user.className}
                          </span>
                        </td>
                        <td className="px-8 py-6 text-center font-bold text-neon-pink/80">{result.part1Score.toFixed(2)}</td>
                        <td className="px-8 py-6 text-center font-bold text-neon-purple/80">{result.part2Score.toFixed(2)}</td>
                        <td className="px-8 py-6 text-center">
                          <span className="text-xl font-black italic">{result.totalScore.toFixed(2)}</span>
                        </td>
                        <td className="px-8 py-6 text-center font-mono text-white/40 text-sm">
                          {Math.floor(result.timeSpentSeconds / 60)}:{(result.timeSpentSeconds % 60).toString().padStart(2, '0')}
                        </td>
                        <td className="px-8 py-6 text-right">
                          <div className="text-xs text-white/30 font-medium">
                            {new Date(result.timestamp).toLocaleDateString()}
                          </div>
                          <div className="text-[10px] text-white/20">
                            {new Date(result.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </div>
                        </td>
                      </tr>
                    ))}
                    {filteredResults.length === 0 && (
                      <tr>
                        <td colSpan={8} className="px-8 py-20 text-center text-white/20 italic font-medium">
                          Chưa có dữ liệu thí sinh nào.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
