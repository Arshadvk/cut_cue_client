export default function AppCard() {


    return (
        <section className="container md:mx-auto md:my-50">
            <div className="grid grid-cols-1 md:grid-cols-2 text-center">
                <div className="container mx-auto my-10 text-start px-10">
                    <h3 className="text-2xl md:text-4xl mb-4 font-bold font-serif">Download the  Cut&nbsp;Cue App</h3>
                    <p className="md:text-2xl text-[15px]">Book unforgettable beauty and wellness  experiences with the  Cut Cue mobile app</p>
                    
                    <div className="flex gap-2">
                        <div className="bg-black text-white rounded-2xl px-3 p-2 mt-2">
                            <i className="ri-apple-fill px-1"></i>
                            <span className="font-bold">Get App On Apple</span>
                        </div>

                        <div className="bg-white text-black rounded-2xl px-3 p-2 mt-2 border border-gray-200">
                            <i className="ri-android-fill px-1"></i>
                            <span className="font-bold">Get App On Android</span>
                        </div>

                    </div>
                </div>
                <div className="flex items-end justify-end">
                    <img src="/assets/images/home/hand.png" className="w-100 " alt="" />
                </div>
            </div>
        </section>
    )
}