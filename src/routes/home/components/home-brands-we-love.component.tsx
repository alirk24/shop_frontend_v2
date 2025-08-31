'use client';

import React from 'react';
import { Autoplay, FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Brand } from '@/app/(en)/(core)/shop/page';

const Slide = (props: { url: string }) => {
  return (
    <div className="flex items-center justify-center h-full">
      <img
        src={props.url}
        alt={props.url}
        className="max-h-[50px] md:max-h-full"
      />
    </div>
  );
};

type HomeBrandsWeLoveProps = { brands: Brand[]; lang: string };

const HomeBrandsWeLove = (props: HomeBrandsWeLoveProps) => {
  return (
    <section className="mt-16 md:mt-24">
      <p className="font-black font-nunito text-xl md:text-4xl text-center">
        {props.lang == 'fa' ? 'برندهایی که دوستشان داریم' : 'Brands We Love'}
      </p>
      <Swiper
        modules={[Autoplay, FreeMode]}
        className="mt-5 px-5 md:hidden"
        autoplay={{ delay: 2000 }}
        loop
        freeMode
        spaceBetween={44}
        slidesPerView={2.2}
      >
        {props.brands.map((item) => (
          <SwiperSlide key={item.id}>
            <Slide url={item.logo} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="hidden md:flex gap-20 justify-between items-center px-20 mt-8 flex-wrap">
        {props.brands.map((item) => (
          <Slide key={item.id} url={item.logo} />
        ))}
      </div>
    </section>
  );
};

export default HomeBrandsWeLove;
