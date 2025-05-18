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
      <div className="w-full md:w-1/2 flex flex-col justify-center items-start p-12 bg-white">
        <h1 className="text-2xl font-bold mb-4">Sign up / Log in</h1>

        <div onClick={() => Router.push('/user-login')} className='border p-5 border-gray-300 rounded-2xl mb-8 w-full'>
          <div className='flex justify-between'>
            <div className=''>

              <h2 className="text-xl font-semibold">Cut Cue for customers</h2>
              <p className="text-gray-600">Book salons and spas near you</p>
            </div>
            <div>

              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="24" height="24"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg>
            </div>
          </div>
        </div>
        
        <div className='border border-gray-300 p-5 rounded-2xl w-full'>
          <div className='flex justify-between'>
            <div>
              <h2 className="text-xl font-semibold">Cut Cue for professionals</h2>
              <p className="text-gray-600">Manage and grow your business</p>
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="24" height="24">
                <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path>
              </svg>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
