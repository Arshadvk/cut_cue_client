"use client";

import Image from "next/image";
import Link from "next/link";

export default function Login() {
  return (
    <div className="flex min-h-screen">
      {/* Left Side - Background Image */}
      <div
        className="hidden md:block md:w-1/2 relative bg-cover bg-center"
        style={{
          backgroundImage:
            "url(/assets/images/background/login/user-auth.webp)",
        }}
      >
        <div className="absolute top-5 left-5">
          <h1 className="text-2xl font-bold text-white">Cut Cue</h1>
        </div>
      </div>
      {/* Right Side - Text Content */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-start p-12 bg-white">
        <h1 className="text-2xl font-bold ">Login into Cut Cue</h1>
        <p className="mb-4 text-gray-500">
          Create an account or log in to book and manage your appointments.
        </p>

        <div className="w-full space-y-4">
          <input
            className="border p-5 border-gray-300 rounded-2xl mb- w-full"
            type="text"
            placeholder="Enter Email address"
          />
          <input
            className="border p-5 border-gray-300 rounded-2xl mb- w-full"
            type="text"
            placeholder="Enter Your Password"
          />
          <button className="border p-5 border-gray-300 rounded-2xl mb- w-full bg-black text-white font-bold">
            {" "}
            Login
          </button>
          <div className="flex items-center my-4">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="px-4 text-sm text-gray-500">or</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
          <button className="flex items-center justify-center gap-x-3 border border-gray-300 p-4 rounded-2xl w-full hover:bg-gray-50 transition">
            <img src="/assets/svg/google.svg" alt="Google Logo" width={20} />
            <span className="text-sm font-medium text-gray-700">
              Continue with Google
            </span>
          </button>

          <button className="flex items-center justify-center gap-x-3 border border-gray-300 p-4 rounded-2xl w-full hover:bg-gray-50 transition">
            <img
              src="/assets/svg/facebook.svg"
              alt="Facebook Logo"
              width={20}
            />
            <span className="text-sm font-medium text-gray-700">
              Continue with Facebook
            </span>
          </button>
        </div>

        <div className="flex items-center justify-center" style={{textAlign:"center"}}>
          <p className="text-center text-gray-500">
            Don't have an account ?{" "}
            <Link className="text-black font-bold" href="/user-register">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
