'use client';

import React from 'react';
// Importing specific icons from React Icons library
import { HiOutlineMail, HiOutlineUser, HiOutlineLink } from 'react-icons/hi';
import { RiLockPasswordLine } from 'react-icons/ri';
import { FaGoogle } from 'react-icons/fa';
import { BsArrowRightShort } from 'react-icons/bs';
import Link from 'next/link';

import { authClient } from '@/lib/auth-client';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useRouter } from "next/navigation";

const Signup = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { name, email, password, img } = data;
    
    const { data: res, error } = await authClient.signUp.email({
      email: email, 
      password: password, 
      name: name, 
      image: img, 
      callbackURL: "/Login" 
    });

    if (res) {
      await authClient.signOut();
      toast.success("Signup Successfully!");
      router.push('/Login');
    } else if (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/"
    });
  };

  return (
    <div className=" bg-[#0f1115] flex items-center justify-center p-6 selection:bg-cyan-500/30 relative overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-cyan-900/20 blur-[120px] animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-900/20 blur-[120px]" />

      <div className="w-full max-w-xl  relative">
        {/* Card Border Gradient Effect */}
        <div className="absolute -inset-0.5 bg-linear-to-r from-cyan-500 to-blue-600 rounded-[2.5rem] blur opacity-20" />
        
        <div className="bg-[#1a1d23]/80 backdrop-blur-2xl rounded-[2.5rem] shadow-2xl border border-white/5 p-10 relative">
          
          {/* Header */}
          <div className="mb-10 text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white mb-4 shadow-lg shadow-cyan-500/20">
              <HiOutlineUser className="w-7 h-7" />
            </div>
            <h1 className="text-3xl font-black text-white tracking-tight uppercase">
              Sport<span className="text-cyan-500">Nest</span>
            </h1>
            <p className="text-gray-400 mt-2 font-medium">Join us and start your journey today.</p>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
            {/* Full Name */}
            <div className="group">
              <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-2 ml-1">Full Name</label>
              <div className="relative text-gray-400 group-focus-within:text-cyan-500">
                <HiOutlineUser className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors" />
                <input 
                  {...register("name", { required: true })}
                  type="text" 
                  placeholder="John Doe"
                  className="w-full pl-12 pr-4 py-4 bg-[#0f1115]/50 border border-gray-800 rounded-2xl text-white placeholder:text-gray-600 focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 outline-none transition-all"
                />
              </div>
            </div>

            {/* Email */}
            <div className="group">
              <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-2 ml-1">Email Address</label>
              <div className="relative text-gray-400 group-focus-within:text-cyan-500">
                <HiOutlineMail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors" />
                <input 
                  {...register("email", { required: true })}
                  type="email" 
                  placeholder="name@example.com"
                  className="w-full pl-12 pr-4 py-4 bg-[#0f1115]/50 border border-gray-800 rounded-2xl text-white placeholder:text-gray-600 focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 outline-none transition-all"
                />
              </div>
            </div>

            {/* Password */}
            <div className="group">
              <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-2 ml-1">Password</label>
              <div className="relative text-gray-400 group-focus-within:text-cyan-500">
                <RiLockPasswordLine className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors" />
                <input 
                  {...register("password", { required: true })}
                  type="password" 
                  placeholder="••••••••"
                  className="w-full pl-12 pr-4 py-4 bg-[#0f1115]/50 border border-gray-800 rounded-2xl text-white placeholder:text-gray-600 focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 outline-none transition-all"
                />
              </div>
            </div>

            {/* Image Link */}
            <div className="group">
              <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-2 ml-1">Profile Image URL</label>
              <div className="relative text-gray-400 group-focus-within:text-cyan-500">
                <HiOutlineLink className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors" />
                <input 
                  {...register("img", { required: true })}
                  type="url" 
                  placeholder="https://images.com/avatar.jpg"
                  className="w-full pl-12 pr-4 py-4 bg-[#0f1115]/50 border border-gray-800 rounded-2xl text-white placeholder:text-gray-600 focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 outline-none transition-all"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button type="submit" className="w-full mt-6 bg-cyan-500 hover:bg-cyan-400 active:scale-[0.97] text-black font-black uppercase tracking-widest py-4 rounded-2xl flex items-center justify-center gap-2 group transition-all shadow-xl shadow-cyan-500/20">
              Create Account
              <BsArrowRightShort className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-800"></div></div>
            <div className="relative flex justify-center text-[10px] uppercase tracking-widest"><span className="bg-[#1a1d23] px-4 text-gray-500 font-bold">Or continue with</span></div>
          </div>

          {/* Social Logins */}
          <div className="grid grid-cols-1 gap-4">
            <button onClick={handleGoogleSignIn} className="w-full flex items-center justify-center gap-3 py-4 px-4 rounded-2xl border border-gray-800 bg-[#0f1115]/50 hover:bg-gray-800 transition-all font-bold text-white text-sm group">
              <FaGoogle className="w-4 h-4 text-white group-hover:text-cyan-500 transition-colors" /> <span>Google</span>
            </button>
          </div>

          {/* Footer */}
          <p className="text-center text-gray-500 text-sm mt-10 font-medium">
            Already have an account? <Link href="Login" className="text-cyan-500 font-bold hover:text-cyan-400 transition-colors underline-offset-8 hover:underline">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;