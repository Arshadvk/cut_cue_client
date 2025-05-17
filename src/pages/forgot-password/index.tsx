"use client";

import Image from "next/image";
import Link from "next/link";

export default function ForgotPassword() {
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
        <h1 className="text-2xl font-bold mb-4">Forgot Password</h1>
     
        <div className="w-full space-y-4">
          <input
            className="border p-5 border-gray-300 rounded-2xl mb- w-full"
            type="text"
            placeholder="Enter Email address"
          />
         

          <Link href="/otp" >
          <button className="border p-5 border-gray-300 rounded-2xl mb- w-full bg-black text-white font-bold">
            {" "}
            Send Otp
          </button>
          </Link>


          <div className="flex items-center justify-center pt-3" style={{ textAlign: "center" }}>
            <p className="text-center text-gray-500">
              Don't have an account ?{" "}
              <Link className="text-black font-bold" href="/user-register">
                Sign Up
              </Link>
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
