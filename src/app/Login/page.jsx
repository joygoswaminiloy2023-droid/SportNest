'use client';

import React from 'react';
import Link from 'next/link';

import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { authClient } from '@/lib/auth-client';

import { HiOutlineMail, HiOutlineLockClosed } from 'react-icons/hi';
import { FaGoogle } from 'react-icons/fa';
import { BsArrowRightShort } from 'react-icons/bs';
import { RiShieldKeyholeLine } from 'react-icons/ri';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Email Login
  const onSubmit = async (data) => {
    try {
      const { email, pass } = data;

      const result = await authClient.signIn.email({
        email,
        password: pass,
        callbackURL: '/',
      });

      console.log('EMAIL LOGIN:', result);

      if (result.data) {
        toast.success('Welcome Back!');
      }

      if (result.error) {
        toast.error(result.error.message);
      }
    } catch (err) {
      console.error('EMAIL LOGIN ERROR:', err);
      toast.error('Something went wrong');
    }
  };

  // Google Login
  const handleGoogleSignIn = async () => {
    try {
      const result = await authClient.signIn.social({
        provider: 'google',
        callbackURL: '/',
      });

      console.log('GOOGLE LOGIN:', result);
    } catch (err) {
      console.error('GOOGLE LOGIN ERROR:', err);
      toast.error('Google sign in failed');
    }
  };

  return (
   <div className="min-h-screen w-full flex items-center justify-center bg-[#070A0F] p-4 md:p-8 relative overflow-hidden">
      
      {/* Immersive Background Arena Mesh & Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-cyan-950/20 via-[#090d14] to-[#040609] z-0" />
      
      {/* Decorative Cyber Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f29370a_1px,transparent_1px),linear-gradient(to_bottom,#1f29370a_1px,transparent_1px)] bg-size-[4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] z-0" />

      {/* Extreme Neon Radial Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-125 h-125 rounded-full bg-cyan-500/10 blur-[160px] pointer-events-none animation-pulse" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-150 h-150 rounded-full bg-blue-600/10 blur-[180px] pointer-events-none" />

      {/* Outer Card Wrapper with Hover-responsive Glow Trigger */}
      <div className="relative w-full max-w-115 z-10 group/card">

        {/* Dynamic Multi-layered Border Glow */}
        <div className="absolute -inset-px rounded-3xl bg-linear-to-r from-cyan-500 via-blue-500 to-emerald-500 opacity-20 blur-xl group-hover/card:opacity-40 group-hover/card:blur-2xl transition-all duration-700" />
        <div className="absolute -inset-px rounded-3xl bg-linear-to-r from-cyan-500/30 via-transparent to-blue-500/20 opacity-100" />

        {/* Central High-Fidelity Glassmorphism Container */}
        <div className="relative bg-[#0E131F]/80 backdrop-blur-xl rounded-3xl border border-slate-800/60 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] px-6 py-10 sm:p-10 transition-all duration-500">

          {/* Identity & Branding Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-cyan-400 via-cyan-500 to-blue-600 flex items-center justify-center mx-auto shadow-xl shadow-cyan-500/20 mb-4 transform group-hover/card:scale-105 duration-500">
              <RiShieldKeyholeLine className="text-black text-3xl" />
            </div>

            <h1 className="text-3xl font-black uppercase tracking-wider text-white">
              Sport<span className="bg-linear-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Nest</span>
            </h1>

            <p className="text-slate-400 mt-2 text-xs font-semibold tracking-wide uppercase">
              Access Athlete Platform
            </p>
          </div>

          {/* Form Element */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

            {/* Email Address Input Block */}
            <div className="space-y-2">
              <label className="block text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold ml-1">
                Email Address
              </label>

              <div className="relative group/input">
                <HiOutlineMail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within/input:text-cyan-400 text-xl transition-all duration-300" />

                <input
                  type="email"
                  placeholder="joy@somthing.com"
                  {...register('email', { required: true })}
                  className="w-full bg-[#070A0F]/90 text-sm text-slate-100 border border-slate-800/80 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 rounded-xl pl-12 pr-4 py-3.5 placeholder:text-slate-600 outline-none transition-all duration-300"
                />
              </div>

              {errors.email && (
                <p className="text-red-400 text-xs font-medium mt-1 ml-1">
                  Email authentication identifier is required
                </p>
              )}
            </div>

            {/* Password Input Block */}
            <div className="space-y-2">
              <div className="flex items-center justify-between ml-1">
                <label className="block text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold">
                  Secret Password
                </label>

                <button
                  type="button"
                  className="text-cyan-400 text-xs font-bold hover:text-cyan-300 transition-colors"
                >
                  Forgot Key?
                </button>
              </div>

         <div className="relative group/input">
  <HiOutlineLockClosed className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within/input:text-cyan-400 text-xl transition-all duration-300" />

  <input
    type="password"
    placeholder="••••••••"
    {...register("pass", {
      required: "Password is required",

      minLength: {
        value: 6,
        message: "Password must be at least 6 characters",
      },

      pattern: {
        value: /^(?=.*[a-z])(?=.*[A-Z])/,
        message:
          "Must include at least one uppercase and one lowercase letter",
      },
    })}
    className="w-full bg-[#070A0F]/90 text-sm text-slate-100 border border-slate-800/80 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 rounded-xl pl-12 pr-4 py-3.5 placeholder:text-slate-600 outline-none transition-all duration-300"
  />
</div>

              {errors.pass && (
                <p className="text-red-400 text-xs font-medium mt-1 ml-1">
                  Password security string is required
                </p>
              )}
            </div>

            {/* Interactive Primary Submit Action */}
            <button
              type="submit"
              className="w-full mt-2 bg-linear-to-r from-cyan-400 via-cyan-500 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-black font-black uppercase tracking-[0.15em] py-3.5 rounded-xl flex items-center justify-center gap-1 transition-all duration-300 transform active:scale-[0.99] shadow-lg shadow-cyan-500/10 group cursor-pointer text-xs"
            >
              Secure Sign In
              <BsArrowRightShort className="text-xl group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </form>

          {/* Visual Grid Separation Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-800/60" />
            </div>

            <div className="relative flex justify-center">
              <span className="bg-[#101624] rounded-full border border-slate-800 px-4 py-0.5 text-[9px] uppercase tracking-[0.25em] text-slate-400 font-bold">
                Alternative Gateways
              </span>
            </div>
          </div>

          {/* Social Sign In Button */}
          <button
            onClick={handleGoogleSignIn}
            className="w-full border border-slate-800/80 hover:border-slate-700 bg-[#070A0F]/40 hover:bg-[#0E131F] rounded-xl py-3.5 flex items-center justify-center gap-3 text-slate-200 text-sm font-semibold transition-all duration-300 group cursor-pointer"
          >
            <FaGoogle className="group-hover:text-cyan-400 text-xs transition-colors duration-300" />
            Continue with Google Profile
          </button>

          {/* Authentication Redirection Footer */}
          <p className="text-center text-slate-400 text-xs mt-8">
            Unregistered Account?{' '}
            <Link
              href="/Signup"
              className="text-cyan-400 font-black tracking-wide hover:text-cyan-300 hover:underline transition-all ml-1"
            >
              Join the Nest
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;