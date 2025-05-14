import Image from "next/image";
import Link from "next/link";
import Router from "next/router";

export default function Header() {
    
    return (
        <>
            <div className="flex justify-between items-center">

                <h1 onClick={()=> Router.push('/')} className="text-2xl font-bold p-5" >Cut Cue</h1>
      
                <div className="flex items-center justify-center p-5 gap-2">
                    <button onClick={()=> Router.push('/user-flow')} className="border-gray-300 rounded-full border border-solid  transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto" >
                        Login
                    </button>
                    <a className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#000000] dark:hover:text-white dark:hover:bg-[#000] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto" href="" target="_blank" rel="noopener noreferrer" >
                    List your business
                    </a>
                   
                </div>
            </div>
        </>
    )
}