import Image from "next/image";
import Link from "next/link";
import Router from "next/router";

export default function Header() {

  return (
    <>
      <div className="flex justify-between items-center">
        <h1 onClick={() => Router.push('/')} className="text-2xl font-bold p-5" >Cut Cue</h1>
        <div className="flex items-center justify-center p-5 gap-2">
          <button onClick={() => Router.push('/user-flow')} className="border-gray-300 rounded-full border border-solid  transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto" >
            Login
          </button>
          <a className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#000000] dark:hover:text-white dark:hover:bg-[#000] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto" href="" target="_blank" rel="noopener noreferrer" >
            List your business
          </a>
        </div>
      </div>


      <div className="menu_bar sm:hidden fixed bottom-0 left-0 w-full h-[70px] z-[101] bg-white/30 backdrop-blur-md shadow-lg  border-white/20">
        <div className="menu_bar-inner grid grid-cols-4 items-center h-full">
          <div onClick={() => Router.push('/')} className="menu_bar-link flex flex-col items-center gap-1">
            <i className="ri-home-4-fill"></i>
            <span className="menu_bar-title caption2 font-semibold">Home</span>
          </div>
          <div onClick={() => Router.push('/search')} className="menu_bar-link flex flex-col items-center gap-1">
            <i className="ri-search-fill"></i>
            <span className="menu_bar-title caption2 font-semibold">Search</span>
          </div>
          <div onClick={() => Router.push('/booking')} className="menu_bar-link flex flex-col items-center gap-1">
            <i className="ri-list-unordered"></i>
            <span className="menu_bar-title caption2 font-semibold">Booking</span>
          </div>
          <div onClick={() => Router.push('/profile')} className="menu_bar-link flex flex-col items-center gap-1">
            <i className="ri-user-3-fill"></i>
            <span className="menu_bar-title caption2 font-semibold">Profile</span>
          </div>
        </div>
      </div>

    </>
  )
}