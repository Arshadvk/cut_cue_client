"use client";

import Image from "next/image";
import Link from "next/link";

export default function Login() {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center px-4"
      style={{
        backgroundImage: "url(/assets/images/background/login/user-auth.webp)",
      }}
    >
      {/* Logo top left */}
      <div className="absolute top-5 left-5">
        <h1 className="text-2xl font-bold text-white">Cut Cue</h1>
      </div>

      {/* Glass Effect Form Box */}
      <div className="w-full max-w-md bg-white/30 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/20">
        <h1 className="text-2xl font-bold mb-2">Login into Cut Cue</h1>
        <p className="mb-4 text-gray-700">Login to book and manage your appointments.</p>

        <div className="space-y-4">
          <input
            className="border p-4 border-gray-300 rounded-2xl w-full bg-white/70 placeholder-gray-600"
            type="text"
            placeholder="Enter Email address"
          />
          <input
            className="border p-4 border-gray-300 rounded-2xl w-full bg-white/70 placeholder-gray-600"
            type="password"
            placeholder="Enter Your Password"
          />
          <Link href="/otp">
            <button className="w-full p-4 bg-black text-white rounded-2xl font-bold hover:bg-gray-800 transition">
              Login
            </button>
          </Link>

          <div className="flex items-center my-4">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="px-4 text-sm text-gray-500">or</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          <button className="flex items-center justify-center gap-x-3 border border-gray-300 p-4 rounded-2xl w-full bg-white/70 hover:bg-white transition">
            <img src="/assets/svg/google.svg" alt="Google Logo" width={20} />
            <span className="text-sm font-medium text-gray-800">
              Continue with Google
            </span>
          </button>

          <button className="flex items-center justify-center gap-x-3 border border-gray-300 p-4 rounded-2xl w-full bg-white/70 hover:bg-white transition">
            <img src="/assets/svg/facebook.svg" alt="Facebook Logo" width={20} />
            <span className="text-sm font-medium text-gray-800">
              Continue with Facebook
            </span>
          </button>

          <div className="text-center text-gray-700 mt-4">
            Don't have an account?{" "}
            <Link href="/user-register" className="text-black font-bold">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
