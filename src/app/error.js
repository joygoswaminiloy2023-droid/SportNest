'use client'
import Link from 'next/link';
import React from 'react';

const error = ({ error, reset }) => {
    return (

<div className="flex flex-col items-center justify-center min-h-screen bg-slate-950 text-white font-sans select-none overflow-hidden relative px-4">
      
      {/* Dynamic Warning Spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 blur-[180px] rounded-full pointer-events-none" />

      <div className="relative flex flex-col items-center z-10 text-center max-w-md">
        
        {/* Yellow Card / Injury Report Icon */}
        <div className="relative w-20 h-24 bg-amber-400 rounded-lg shadow-[0_0_30px_rgba(245,158,11,0.3)] skew-x-6 flex items-center justify-center border-2 border-amber-300 mb-8 animate-pulse">
          <span className="text-slate-950 font-black text-4xl italic transform -skew-x-6">!</span>
        </div>

        {/* Sporty Error Messaging */}
        <div className="space-y-3">
          <h1 className="text-4xl font-black italic uppercase tracking-tight bg-gradient-to-r from-white via-slate-100 to-amber-400 bg-clip-text text-transparent">
            Foul on the Play!
          </h1>
          <p className="text-slate-400 font-bold text-xs uppercase tracking-widest text-amber-500/90">
            Injury Report: Connection or Server Glitch
          </p>
          <p className="text-slate-400 font-medium text-sm leading-relaxed max-w-sm">
            We hit an unexpected fumble while loading this page. Let&apos;s check the tape and try that play one more time.
          </p>
        </div>

        {/* Interactive Action Blocks */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full justify-center">
          {/* Reset Button (Tries to re-render the segment) */}
          <button
            onClick={() => reset()}
            className="px-6 py-3 bg-gradient-to-r from-lime-400 to-emerald-500 text-slate-950 font-black italic uppercase tracking-wider rounded text-sm hover:from-lime-300 hover:to-emerald-400 transition-all duration-200 shadow-[0_4px_20px_rgba(163,230,53,0.3)] hover:scale-105 active:scale-95 text-center cursor-pointer"
          >
            Run Play Again
          </button>
          
          {/* Fallback Link */}
          <Link 
            href="/"
            className="px-6 py-3 bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-300 font-bold italic uppercase tracking-wider rounded text-sm transition-all duration-200 hover:text-white text-center"
          >
            Back to Locker Room
          </Link>
        </div>

      </div>

      {/* Subtle stadium texture detail */}
      <div className="absolute top-0 inset-x-0 h-full opacity-[0.02] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
    </div>
    )
};

export default error;