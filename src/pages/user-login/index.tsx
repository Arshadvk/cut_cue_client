'use client';

import Image from 'next/image';

export default function Login() {
  return (
    <div className="flex min-h-screen">
      {/* Left Side - Background Image */}
      <div className="w-1/2 relative">
        <Image
          src="/assets/images/background/login/user-auth.webp"
          alt="Login Background"
          fill
          className="object-cover"
        />
      </div>

      {/* Right Side - Text Content */}
      <div className="w-1/2 flex flex-col justify-center items-start p-12 bg-white">
        <h1 className="text-2xl font-bold mb-4">Sign up / Log in</h1>
        
        <div className='border p-5 border-gray-300 rounded-2xl mb-8 w-full'>
          <h2 className="text-xl font-semibold">Cut Cue for customers</h2>
          <p className="text-gray-600">Book salons and spas near you</p>
        </div>
        <div className='border border-gray-300 p-5 rounded-2xl w-full'>
          <h2 className="text-xl font-semibold">Cut Cue for professionals</h2>
          <p className="text-gray-600">Manage and grow your business</p>
        </div>
      </div>
    </div>
  );
}
