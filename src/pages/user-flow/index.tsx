'use client';

import Image from 'next/image';
import Router from "next/router";

export default function UserFlow() {
  return (
    <div className="flex min-h-screen">
      {/* Left Side - Background Image */}
      <div className="hidden md:block md:w-1/2 relative bg-cover bg-center" style={{ backgroundImage: 'url(/assets/images/background/login/login.webp)' }}>
  <div className="absolute top-5 left-5">
    <h1 className="text-2xl font-bold text-white">Cut Cue</h1>
  </div>
</div>


      {/* Right Side - Text Content */}
      <div className="md:w-1/2 flex flex-col justify-center items-start p-12 bg-white">
        <h1 className="text-2xl font-bold mb-4">Sign up / Log in</h1>
        
        <div onClick={()=>Router.push('/user-login')} className='border p-5 border-gray-300 rounded-2xl mb-8 w-full'>
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
