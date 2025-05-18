'use client';

import Image from 'next/image';

export default function GlassCard({}:any) {
    return (
       
        <div className="flex items-center justify-center min-h-screen bg-white gap-5">
            
            <div className="relative w-[320px] h-[480px] rounded-[30px] overflow-hidden shadow-2xl bg-white/10 backdrop-blur-lg border border-white/20 flex flex-col justify-end p-5">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/assets/images/card/card-2.jpg')", // replace with your image path
                    }}
                    ></div>

                {/* Glass overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-white/10 to-transparent"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col gap-3">
                    <div className="flex items-center justify-between mt-5">
                        {/* Profile Info */}
                        <div className="flex items-center gap-2">
                    
                            <div className="text-white text-xs">
                            <h2 className="text-white text-xl font-semibold">Man Of Cave</h2>
                                <p className="opacity-80">Khaleej Al Arabi Street</p>
                            </div>
                        </div>

                        <button className="bg-white text-black text-sm font-medium px-4 py-2 rounded-full shadow-md hover:bg-gray-100 transition">
                            + More Info
                        </button>
                        {/* More Info Button */}
                    </div>
                </div>
            </div>
            

            <div className="relative w-[320px] h-[480px] rounded-[30px] overflow-hidden shadow-2xl bg-white/10 backdrop-blur-lg border border-white/20 flex flex-col justify-end p-5">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/assets/images/card/card-1.jpg')", // replace with your image path
                    }}
                    ></div>

                {/* Glass overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-white/10 to-transparent"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col gap-3">
                    <div className="flex items-center justify-between mt-5">
                        {/* Profile Info */}
                        <div className="flex items-center gap-2">
                    
                            <div className="text-white text-xs">
                            <h2 className="text-white text-xl font-semibold">Man Of Cave</h2>
                                <p className="opacity-80">Khaleej Al Arabi Street</p>
                            </div>
                        </div>

                        <button className="bg-white text-black text-sm font-medium px-4 py-2 rounded-full shadow-md hover:bg-gray-100 transition">
                            + More Info
                        </button>
                        {/* More Info Button */}
                    </div>
                </div>
            </div>
        </div>

    );
}
