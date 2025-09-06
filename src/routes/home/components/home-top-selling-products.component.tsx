'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Product } from '@/app/(en)/(core)/product/[productId]/page';
import SvgCatFootDesktop from '@/assets/svg/cat-foot-filled-desktop.svg';
import SvgCatFoot from '@/assets/svg/cat-foot-filled.svg';
import Icon from '@/components/icon';
import { Button } from '@/components/ui/button';
import { useFilteredProducts } from '@/hooks/use-language-filter.hook';

import TopSellingProductCard from './cards/top-selling-product-card.component';

type HomeTopSellingProductsProps = {
  products: Product[];
  lang: string;
};

const HomeTopSellingProducts = (props: HomeTopSellingProductsProps) => {
  const router = useRouter();
  const filteredProducts = useFilteredProducts(props.products);

  return (
    <main className="md:px-20">
      <section className="relative flex flex-col md:flex-row-reverse md:gap-6 items-center md:items-start w-full pt-6 md:px-6 md:py-8 mt-16 md:mt-24 bg-secondary-500 md:rounded-[36px] md:overflow-hidden  pb-[152px] md:pb-8">
        <h4 className="font-black font-nunito text-xl text-white md:hidden">
          {props.lang == 'fa'
            ? 'پرفروش‌ترین محصولات ما'
            : 'Our Best Selling Products'}
        </h4>

        {/* for mobile */}
        <Swiper
          className="mt-5 w-full px-4 md:hidden"
          spaceBetween={16}
          slidesPerView={1.1}
          modules={[Pagination]}
          pagination={{
            clickable: true,
            el: '.top-selling-pagination',
            type: 'bullets',
            bulletClass: 'swiper-pagination-bullet white-pagination',
            bulletActiveClass:
              'swiper-pagination-bullet-active white-pagination-active',
          }}
        >
          {filteredProducts.map((p) => (
            <SwiperSlide key={p.id}>
              <TopSellingProductCard {...p} lang={props.lang} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="md:hidden">
          <div className="top-selling-pagination"></div>
        </div>

        {/* for desktop */}
        <Swiper
          className="hidden md:flex w-full"
          spaceBetween={24}
          slidesPerView={3}
        >
          {filteredProducts.map((p) => (
            <SwiperSlide key={p.id} className="h-[358px]">
              <TopSellingProductCard {...p} lang={props.lang} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex flex-col items-center md:items-start md:min-w-[310px]">
          <p className="hidden md:block font-nunito font-black text-4xl text-white">
            {props.lang == 'fa' ? 'پرفروش‌ترین ' : 'Our Best Selling '}
            <br />
            {props.lang == 'fa' ? 'محصولات ما' : 'Products'}
          </p>
          <Button
            onClick={() => {
              router.push('/shop');
            }}
            className={`mt-6 md:mt-4 p-1 ${props.lang == 'fa' ? ' pr-4 ' : ' pl-4 '} w-[210px] h-[48px] md:w-[225px] md:h-[64px] flex justify-between font-nunito font-black md:text-xl rounded-full`}
          >
            {props.lang == 'fa' ? 'مشاهده فروشگاه' : 'Show store'}
            <Icon>
              <SvgCatFoot className="md:hidden" />
              <SvgCatFootDesktop className="hidden md:block" />
            </Icon>
          </Button>
          <img
            src="/static/pet 1.png"
            alt="pet-looking-up"
            className="absolute bottom-0 -left-5 w-[228px] md:w-auto"
          />
        </div>
      </section>
    </main>
  );
};

export default HomeTopSellingProducts;
