import Image from "next/image";
import Router from "next/router";

export default function Footer() {
    return (
        <footer className="bg-gray-100 mt-10 row-start-3 flex gap-[24px] flex-wrap items-center justify-center px-10 md:py-0">
            <div className="footer-main bg-surface">
                <div className="container">
                    <div className="content-footer md:py-[60px] py-10 flex justify-between flex-wrap gap-y-8">
                        <div className="company-infor basis-1/4 max-lg:basis-full pr-7">
                            <a href="/" className="logo inline-block">
                                <div className="heading3 w-fit">

                                    <h3 className="font-bold text-3xl py-4">Cutcue</h3>

                                </div>
                            </a>
                            <div className="bg-white text-center p-2 rounded-4xl border-1 border-gray-300 w-50">
                                <span className="font-bold">Get the app</span>
                                <i className="ri-apple-fill px-1"></i>
                                <i className="ri-android-fill px-1"></i>

                            </div>
                            <div className="list-social flex items-center gap-6 mt-4">
                                <a href="https://www.facebook.com/" target="_blank">
                                    <i className="ri-facebook-circle-fill"></i>
                                </a>
                                <a href="https://www.instagram.com/" target="_blank">
                                    <i className="ri-instagram-fill"></i>
                                </a>
                                <a href="https://www.twitter.com/" target="_blank">
                                    <i className="ri-twitter-fill"></i>
                                </a>
                                <a href="https://www.youtube.com/" target="_blank">
                                    <i className="ri-youtube-fill"></i>
                                </a>
                                <a href="https://www.pinterest.com/" target="_blank">
                                    <i className="ri-pinterest-fill"></i>
                                </a>
                            </div>
                        </div>
                        <div className="right-content flex flex-wrap gap-y-8 basis-3/4 max-lg:basis-full">
                            <div className="list-nav flex justify-between basis-2/3 max-md:basis-full gap-4">
                                <div className="item flex flex-col basis-1/3">
                                    <div className="text-button-uppercase pb-3  font-bold ">About</div>
                                    <div className="caption1 has-line-before duration-300 w-fit cursor-pointer" onClick={() => Router.push('/contact')}>Contact us </div>
                                    <div className="caption1 has-line-before duration-300 w-fit pt-2 cursor-pointer" onClick={() => Router.push('/career')}> Career </div>
                                    <div className="caption1 has-line-before duration-300 w-fit pt-2 cursor-pointer" onClick={() => Router.push('/faq')}>FAQs </div>
                                </div>
                                <div className="item flex flex-col basis-1/3">
                                    <div className="text-button-uppercase pb-3 font-bold" >Quick Shop</div>
                                    <div className="caption1 has-line-before duration-300 w-fit" onClick={() => Router.push('/contact')}>Women</div>
                                    <div className="caption1 has-line-before duration-300 w-fit pt-2" onClick={() => Router.push('/contact')}>Men </div>
                                    <div className="caption1 has-line-before duration-300 w-fit pt-2" onClick={() => Router.push('/contact')}>Blog </div>
                                </div>
                                <div className="item flex flex-col basis-1/3">
                                    <div className="text-button-uppercase pb-3 font-bold">Customer Services</div>
                                    <div className="caption1 has-line-before duration-300 w-fit" onClick={() => Router.push('/contact')}>FAQs </div>
                                    <div className="caption1 has-line-before duration-300 w-fit pt-2" onClick={() => Router.push('/contact')}>Privacy Policy</div>
                                    <div className="caption1 has-line-before duration-300 w-fit pt-2" onClick={() => Router.push('/contact')}>Return & Refund</div>
                                </div>
                            </div>
                            <div className="newsletter basis-1/3 pl-7 max-md:basis-full max-md:pl-0">
                                <div className="text-button-uppercase font-bold">Newletter</div>
                                <div className="caption1 mt-3">Sign up for our newsletter and get 10% off your first purchase</div>
                                <div className="input-block w-full h-[52px] mt-4">
                                    <form className="w-full h-full relative" action="post">
                                        <input type="email" placeholder="Enter your e-mail"
                                            className="caption1 w-full h-full pl-4 pr-14 rounded-xl border border-line" required />
                                        <button
                                            className="w-[44px] h-[44px] bg-black flex items-center justify-center rounded-xl absolute top-1 right-1">
                                            <i className="ri-arrow-right-fill text-white"></i>
                                        </button>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div
                        className="footer-bottom py-3 flex items-center justify-between gap-5 max-lg:justify-center max-lg:flex-col border-t border-line">
                        <div className="left flex items-center gap-8">
                            <div className="copyright caption1 text-secondary">©2024 Cutcue . All Rights Reserved.</div>
                        </div>
                        {/* <div className="right flex items-center gap-2">
                    <div className="caption1 text-secondary">Payment:</div>
                    <div className="payment-img">
                        <img src="./assets/images/payment/Frame-0.png" alt="payment" className="w-9" />
                    </div>
                    <div className="payment-img">
                        <img src="./assets/images/payment/Frame-1.png" alt="payment" className="w-9" />
                    </div>
                    <div className="payment-img">
                        <img src="./assets/images/payment/Frame-2.png" alt="payment" className="w-9" />
                    </div>
                    <div className="payment-img">
                        <img src="./assets/images/payment/Frame-3.png" alt="payment" className="w-9" />
                    </div>
                    <div className="payment-img">
                        <img src="./assets/images/payment/Frame-4.png" alt="payment" className="w-9" />
                    </div>
                    <div className="payment-img">
                        <img src="./assets/images/payment/Frame-5.png" alt="payment" className="w-9" />
                    </div>
                </div> */}
                    </div>
                </div>
            </div>
        </footer>
    )
}