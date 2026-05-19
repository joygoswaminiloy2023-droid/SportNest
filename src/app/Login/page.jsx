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
    <div className="min-h-screen bg-[#0b0f14] flex items-center justify-center px-6 py-10 overflow-hidden relative">

      {/* Background Glow */}
      <div className="absolute top-[-10%] left-[-10%] w-100 h-100 rounded-full bg-cyan-500/10 blur-[140px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-100 h-100 rounded-full bg-blue-500/10 blur-[140px]" />

      {/* Card */}
      <div className="relative w-full max-w-md">

        {/* Border Glow */}
        <div className="absolute -inset-px rounded-4xl bg-linear-to-r from-cyan-500 via-blue-500 to-cyan-500 opacity-30 blur-lg" />

        <div className="relative bg-[#131920]/90 backdrop-blur-2xl rounded-4xl border border-white/5 shadow-2xl p-8 md:p-10">

          {/* Logo */}
          <div className="text-center mb-10">

            <div className="w-20 h-20 rounded-3xl bg-linear-to-br from-cyan-400 to-blue-600 flex items-center justify-center mx-auto shadow-xl shadow-cyan-500/20 mb-6">
              <RiShieldKeyholeLine className="text-white text-4xl" />
            </div>

            <h1 className="text-4xl font-black uppercase tracking-tight text-white">
              Sport<span className="text-cyan-400">Nest</span>
            </h1>

            <p className="text-gray-400 mt-3 text-sm font-medium">
              Access your athlete dashboard
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5"
          >

            {/* Email */}
            <div>
              <label className="block text-[11px] uppercase tracking-[0.25em] text-gray-500 font-bold mb-2 ml-1">
                Email Address
              </label>

              <div className="relative group">
                <HiOutlineMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-cyan-400 text-xl transition-all" />

                <input
                  type="email"
                  placeholder="name@example.com"
                  {...register('email', { required: true })}
                  className="w-full bg-[#0b0f14]/70 border border-gray-800 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 rounded-2xl pl-12 pr-4 py-4 text-white placeholder:text-gray-600 outline-none transition-all"
                />
              </div>

              {errors.email && (
                <p className="text-red-400 text-xs mt-2 ml-1">
                  Email is required
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <div className="flex items-center justify-between mb-2 ml-1">
                <label className="block text-[11px] uppercase tracking-[0.25em] text-gray-500 font-bold">
                  Password
                </label>

                <button
                  type="button"
                  className="text-cyan-400 text-xs font-semibold hover:text-cyan-300 transition-all"
                >
                  Forgot?
                </button>
              </div>

              <div className="relative group">
                <HiOutlineLockClosed className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-cyan-400 text-xl transition-all" />

                <input
                  type="password"
                  placeholder="••••••••"
                  {...register('pass', { required: true })}
                  className="w-full bg-[#0b0f14]/70 border border-gray-800 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 rounded-2xl pl-12 pr-4 py-4 text-white placeholder:text-gray-600 outline-none transition-all"
                />
              </div>

              {errors.pass && (
                <p className="text-red-400 text-xs mt-2 ml-1">
                  Password is required
                </p>
              )}
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full mt-3 bg-cyan-400 hover:bg-cyan-300 active:scale-[0.98] text-black font-black uppercase tracking-[0.2em] py-4 rounded-2xl flex items-center justify-center gap-2 transition-all shadow-xl shadow-cyan-500/20 group"
            >
              Sign In

              <BsArrowRightShort className="text-2xl group-hover:translate-x-1 transition-all" />
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-800" />
            </div>

            <div className="relative flex justify-center">
              <span className="bg-[#131920] px-4 text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold">
                Or continue with
              </span>
            </div>
          </div>

          {/* Google Button */}
          <button
            onClick={handleGoogleSignIn}
            className="w-full border border-gray-800 hover:border-cyan-500/40 bg-[#0b0f14]/70 hover:bg-[#161d27] rounded-2xl py-4 flex items-center justify-center gap-3 text-white font-semibold transition-all group"
          >
            <FaGoogle className="group-hover:text-cyan-400 transition-all" />

            Continue with Google
          </button>

          {/* Footer */}
          <p className="text-center text-gray-500 text-sm mt-10">
            New here?{' '}
            <Link
              href="/Signup"
              className="text-cyan-400 font-bold hover:text-cyan-300 transition-all"
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