import AppCard from "@/components/home/AppCard";
import GlassCard from "@/components/home/GlassCard";
import SearchCard from "@/components/search/card";

export default function Search() {
    const data: never[] = []
    return (
        <div className="bg-white min-h-screen  text-gray-900">
            <div className="w-full h-full relative">
                <form  action="post">
                    <input type="email" placeholder="Enter your e-mail"
                        className="caption1 w-full  p-4  pl-4 pr-14 rounded-xl border border-line" required />
                    <button
                        className="w-[44px] h-[44px] bg-black flex items-center justify-center rounded-xl absolute top-1 right-1">
                        <i className="ri-arrow-right-fill text-white"></i>
                    </button>
                </form>
            </div>

            <SearchCard />

        </div>
    );
}