import React from 'react';
import { motion } from 'motion/react';
import { Monitor, BookOpen, Search, Laptop } from 'lucide-react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-16 h-16',
    lg: 'w-32 h-32 md:w-40 md:h-40',
    xl: 'w-48 h-48 md:w-64 md:h-64'
  };

  const [imageError, setImageError] = React.useState(false);

  // If image loads successfully, show it. Otherwise, show the CSS fallback.
  if (!imageError) {
    return (
      <img 
        src="/img/logo_tinhoc.png" 
        alt="Logo THPTQG" 
        className={`${sizeClasses[size]} object-contain drop-shadow-neon-pink ${className}`}
        onError={() => setImageError(true)}
      />
    );
  }

  // Beautiful CSS Fallback that mimics the user's logo structure
  return (
    <motion.div 
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className={`relative rounded-full bg-gradient-to-br from-[#0055FF] via-[#0033AA] to-[#001144] border-4 border-white/40 flex flex-col items-center justify-center overflow-hidden shadow-[0_0_30px_rgba(0,85,255,0.4)] ring-4 ring-[#001144]/50 ${sizeClasses[size]} ${className}`}
    >
      {/* Circuit board background pattern (simplified) */}
      <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-[-10%] w-[120%] h-[1px] bg-white rotate-12" />
        <div className="absolute top-1/2 left-[-10%] w-[120%] h-[1px] bg-white -rotate-12" />
        <div className="absolute top-3/4 left-[-10%] w-[120%] h-[1px] bg-white rotate-6" />
        <div className="absolute left-1/4 top-[-10%] w-[1px] h-[120%] bg-white -rotate-12" />
        <div className="absolute left-1/2 top-[-10%] w-[1px] h-[120%] bg-white rotate-12" />
      </div>

      {/* Top Text: THI THỬ */}
      <div className="z-10 text-[10%] font-black text-white tracking-[0.25em] mb-1 drop-shadow-sm">THI THỬ</div>

      {/* Center: THPTQG */}
      <div className="z-10 text-[24%] font-black text-yellow-400 drop-shadow-[0_4px_6px_rgba(0,0,0,0.6)] italic tracking-tighter leading-none">
        THPTQG
      </div>

      {/* Red Banner: TIN HỌC */}
      <div className="z-10 bg-gradient-to-r from-red-700 to-red-600 px-4 py-1 rounded-sm shadow-xl mt-1 mb-2 border border-red-400/30">
        <span className="text-[12%] font-black text-white whitespace-nowrap tracking-wide">TIN HỌC</span>
      </div>

      {/* Bottom Icons */}
      <div className="z-10 flex gap-3 opacity-90 mb-1">
        <Monitor className="w-[14%] h-[14%] text-blue-100" />
        <Laptop className="w-[14%] h-[14%] text-blue-100" />
        <Search className="w-[14%] h-[14%] text-blue-100" />
      </div>

      {/* Book Icon at the very top */}
      <div className="absolute top-[12%] z-10 opacity-60">
        <BookOpen className="w-[10%] h-[10%] text-white" />
      </div>

      {/* High-quality shine effect */}
      <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-gradient-to-br from-white/30 via-white/10 to-transparent rotate-45 pointer-events-none" />
    </motion.div>
  );
};

export default Logo;
