"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Otp() {
  const [otp, setOtp] = useState(["", "", "", ""]);

  const handleChange = (value: string, index: number) => {
    if (/^\d?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      // Focus next input
      if (value && index < 3) {
        const next = document.getElementById(`otp-${index + 1}`);
        next?.focus();
      }
    }
  };

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
            <Link href='/'>
          <h1 className="text-2xl font-bold text-white">Cut Cue</h1>
            </Link>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-12 bg-white">
        <div className="flex flex-col items-center space-y-8">
          {/* Icon */}
          <div className="bg-black text-white p-5 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              fill="white"
              viewBox="0 0 24 24"
            >
              <path d="M12 1C8.686 1 6 3.686 6 7v4H4v12h16V11h-2V7c0-3.314-2.686-6-6-6zm0 2c2.206 0 4 1.794 4 4v4H8V7c0-2.206 1.794-4 4-4zm-1 11h2v5h-2v-5z" />
            </svg>
          </div>

          <h1 className="text-xl font-bold text-center">Enter Your Otp</h1>

          {/* OTP Inputs */}
          <div className="flex space-x-4">
            {otp.map((digit, index) => (
              <input
                key={index}
                id={`otp-${index}`}
                type="text"
                value={digit}
                onChange={(e) => handleChange(e.target.value, index)}
                maxLength={1}
                className="w-16 h-16 text-center text-xl rounded-2xl outline-none bg-white shadow-inner border border-gray-200"
                style={{
                  boxShadow: "inset 0 4px 8px rgba(0,0,0,0.1), inset 0 -4px 8px rgba(0,0,0,0.05)",
                }}
              />
            ))}
          </div>

          {/* Sign In Button */}
          <Link href="/" >
          <button className="w-full mt-8 py-4 px-8 bg-black text-white rounded-2xl text-lg font-medium">
            Sign In
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
