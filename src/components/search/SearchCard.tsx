"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function SearchCard() {
  const cards = [
    {
      image: ["01.avif", "02.avif", "03.avif", "04.avif"],
      title: "La Poupee Beauty Center - Abu Dhabi Branch",
      location: "Khaleej Al Arabi Street",
      type: "Beauty Salon",
    },
    {
      image: ["01.avif", "02.avif", "03.avif", "04.avif"],
      title: "Man Of Cave",
      location: "Khaleej Al Arabi Street",
      type: "Nails Salon",
    },
    {
      image: ["01.avif", "02.avif", "03.avif", "04.avif"],
      title: "Man Of Cave",
      location: "Khaleej Al Arabi Street",
      type: "Men Salon",
    },
    {
      image: ["01.avif", "02.avif", "03.avif", "04.avif"],
      title: "Mikas Beauty Salon",
      location: "Al Muntazah, Zone 1",
      type: "Men Salon",
    },
  ];
  return (
    <section>
      {cards.map((card, index) => (
        <div className="p-4">
          {/* Swiper Image Wrapper */}
          <div className="relative rounded-4xl overflow-hidden">
            <Swiper spaceBetween={0} slidesPerView={1}>
              {card.image.map(
                (img, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={`/assets/images/search/one/${img}`}
                      alt={`Slide ${index + 1}`}
                      className="w-full h-auto object-cover"
                    />
                    <span className="absolute bottom-3 left-3 border p-1 px-2 text-sm text-white rounded-2xl backdrop-blur-md border-white/20 bg-black/40">
                     {card.type}
                    </span>
                  </SwiperSlide>
                )
              )}
            </Swiper>
          </div>

          {/* Content */}
          <div className="p-4">
            <p className="font-bold text-lg">
              {card.title}
            </p>
            <p className="text-gray-600">Tamouh - Abu Dhabi</p>
            <div className="flex items-center gap-1 text-yellow-500 mt-1">
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-half-fill"></i>
              <span className="font-bold ml-2 text-black">4.6 (1,200)</span>
            </div>
            <hr className="text-gray-300 mt-5" />
          </div>
        </div>
      ))}
    </section>
  );
}
