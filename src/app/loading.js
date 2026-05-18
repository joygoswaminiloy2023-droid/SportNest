'use client'
import React from 'react';

const loading = () => {
    return (
       <div className="flex flex-col items-center justify-center min-h-screen bg-slate-950 text-white font-sans select-none overflow-hidden">
      {/* Stadium Spotlight Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/10 blur-[150px] rounded-full pointer-events-none animate-pulse" />

      <div className="relative flex flex-col items-center z-10 scale-110">
        
        {/* --- THE BALL & SHADOW BOX --- */}
        <div className="relative w-24 h-24 flex items-center justify-center">
          
          {/* Bouncing Neon Ball */}
          <div className="w-16 h-16 rounded-full bg-lime-400 border-4 border-slate-950 shadow-[inset_-6px_-6px_0_rgba(0,0,0,0.2),0_0_20px_rgba(163,230,53,0.4)] animate-bounce relative flex items-center justify-center">
            
            {/* Tennis/Basketball Style Curved Seams */}
            <div className="absolute inset-1 border-2 border-slate-950/30 rounded-full after:content-[''] after:absolute after:inset-0 after:border-2 after:border-transparent after:border-r-slate-950/40 after:border-l-slate-950/40 after:rounded-full after:animate-spin after:[animation-duration:4s]" />
            
            {/* Motion Blur Streaks */}
            <div className="absolute -top-4 w-0.5 h-3 bg-lime-400/60 rounded-full animate-pulse" />
          </div>

          {/* Dynamic Ground Shadow (Shrinks/fades as ball bounces) */}
          <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-slate-900/80 rounded-full blur-[1px] animate-[ping_1s_infinite_ease-in-out] opacity-70" />
        </div>

        {/* --- SPORTY TYPOGRAPHY --- */}
        <div className="text-center mt-4 space-y-1">
          {/* Aggressive, Italicized Sports Headline */}
          <h2 className="text-3xl font-black italic tracking-tighter uppercase bg-gradient-to-r from-white via-slate-200 to-lime-400 bg-clip-text text-transparent drop-shadow-sm">
            Gearing Up
          </h2>
          
          {/* Subtext mimicking a ticker */}
          <p className="text-[10px] font-bold tracking-[0.3em] text-emerald-400 uppercase italic animate-pulse">
            Fetching Latest Scores
          </p>
        </div>

        {/* --- ANALOG LOADING BAR (No custom tailwind.config needed) --- */}
        <div className="w-40 h-1 bg-slate-900 rounded-full mt-6 overflow-hidden border border-slate-800 relative">
          <div className="h-full bg-linear-to-r from-emerald-500 to-lime-400 rounded-full w-1/2 animate-[shimmer_1.5s_infinite_ease-in-out] absolute left-0" 
               style={{
                 animation: 'loading 1.2s infinite ease-in-out'
               }}
          />
        </div>

      </div>

      {/* Inline style block to guarantee the custom loading bar works anywhere without tailwind.config.js modifications */}
      <style jsx global>{`
        @keyframes loading {
          0% { transform: translateX(-100%) scaleX(0.5); }
          50% { transform: translateX(100%) scaleX(1); }
          100% { transform: translateX(300%) scaleX(0.5); }
        }
      `}</style>
    </div>
    );
};

export default loading;