'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function GlassCard() {
  const cards = [
    {
      image: '/assets/images/card/card-1.jpg',
      title: 'Man Of Cave',
      location: 'Khaleej Al Arabi Street',
      type : 'Beauty Salon'
    },
    {
      image: '/assets/images/card/card-2.jpg',
      title: 'Man Of Cave',
      location: 'Khaleej Al Arabi Street',
      type : 'Nails Salon'
    },
    {
      image: '/assets/images/card/card-3.avif',
      title: 'Man Of Cave',
      location: 'Khaleej Al Arabi Street',
      type : 'Men Salon'
    },
    {
      image: '/assets/images/card/card-4.avif',
      title: 'Mikas Beauty Salon',
      location: 'Al Muntazah, Zone 1',
      type : 'Men Salon'
    },
  ];

  return (
    <div className="w-full px-6 py-1">
      <Swiper
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={2}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1550: {
            slidesPerView: 4,
          },
        }}
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <div className="relative  w-full h-[200px] md:h-[280px] rounded-[30px] overflow-hidden  bg-white/10 backdrop-blur-lg border border-white/20 flex flex-col justify-end p-5">
              {/* Background Image */}
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${card.image})` }} ></div>

              {/* Glass Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-white/10 to-transparent"></div>

              {/* Content */}
              <div className="relative z-10 flex flex-col gap-3 ">
                <div className="flex items-center justify-between mt-5">
                  <div className="text-white text-xs">
                    <h2 className="text-white md:text-xl font-semibold">{card.title}</h2>
                    <p className="opacity-80 mb-2">{card.location}</p>
                    <span className='border p-1 px-2 rounded-2xl backdrop-blur-md  border-white/20'>{card.type}</span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
