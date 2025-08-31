'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

import SvgOurPromiseDesktop from '@/assets/svg/our-promise-to-you-desktop.svg';
import SvgOurPromise from '@/assets/svg/our-promise-to-you.svg';
import Icon from '@/components/icon';
import { Button } from '@/components/ui/button';

const HomeOurPromise = ({ lang = 'en' }) => {
  const router = useRouter();

  return (
    <div className="flex flex-col md:flex-row md:justify-between items-center mt-16 px-5 md:px-20">
      <div className="flex flex-col items-center">
        <Icon>
          <SvgOurPromise className="md:hidden" />
          <SvgOurPromiseDesktop className="hidden md:block" />
        </Icon>
        {lang == 'fa' ? (
          <p className="mt-4 md:mt-6 font-black font-nunito text-xl md:text-4xl">
            <span className="text-primary-500"> حیوانات خانگی </span>خوشحال،
            <span className="text-primary-500"> انسان‌های </span>خوشحال
          </p>
        ) : (
          <p className="mt-4 md:mt-6 font-black font-nunito text-xl md:text-4xl">
            Happy
            <span className="text-primary-500"> pets</span>, happy
            <span className="text-primary-500"> humans</span>
          </p>
        )}
        {lang == 'fa' ? (
          <p className="mx-2 text-sm  text-justify mt-3 md:mt-6 mmd:font-nunito md:text-xl md:max-w-[469px]">
            در uspetsupplies، ما به قدرت شادی اعتقاد داریم - هم برای حیوانات
            خانگی شما و هم برای شما. به همین دلیل است که ما متعهد به ارائه تنها
            محصولات با بالاترین کیفیت هستیم که با دقت ساخته شده و سال‌ها تخصص
            پشتوانه آن است. ماموریت ما این است که اطمینان حاصل کنیم هر تعاملی با
            ما، لبخند را بر لبان شما و همراهان پشمالویتان بنشاند.
          </p>
        ) : (
          <p className="mx-2 text-sm text-center mt-3 md:mt-6 mmd:font-nunito md:text-xl md:max-w-[469px]">
            At uspetsupplies, we believe in the power of happiness—both for your
            pets and for you. That&apos;s why we commit to offering only the
            highest quality products, crafted with care and backed by years of
            expertise. Our mission is to ensure that every interaction with us
            leaves you and your furry companions with a smile.
          </p>
        )}
        <Button
          onClick={() => {
            lang == 'fa'
              ? router.push('/fa/about-us')
              : router.push('about-us');
          }}
          className="mt-4 md:mt-10 font-nunito font-black md:text-xl w-[225px] h-[48px] md:h-[64px] shadow-color-md md:shadow-color-xl"
        >
          {lang == 'fa' ? 'درباره ما' : 'About us'}
        </Button>
      </div>
      <div className="flex gap-3 md:gap-6 mt-4 items-center">
        <img
          src={'/static/our-promise-left-image.png'}
          alt="our-promise"
          className="mt-4 w-[148px] h-auto md:w-[324px]"
        />
        <img
          src={'/static/our-promise-right-image.png'}
          alt="our-promise"
          className="mt-4 w-[117px] h-auto md:w-[258px]"
        />
      </div>
    </div>
  );
};

export default HomeOurPromise;
