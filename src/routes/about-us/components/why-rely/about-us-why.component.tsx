'use client';

import React from 'react';

import SvgCatPawWhy from '@/assets/svg/cat-paw-why.svg';

import WhyRelyItemsMobile from './why-items-mobile.component';
import WhyRelyItemsDesktop from './why-rely-items-desktop.component';

const AboutUsWhy = ({ lang = 'en' }) => {
  return (
    <main className="mt-16 md:mt-24 flex flex-col md:flex-row gap-6 md:gap-16 md:px-20">
      <section className="md:relative px-5 w-full">
        <p className="font-nunito text-2xl md:text-[54px] font-extrabold md:leading-[60px]">
          {lang == 'fa' ? 'چرا به ما' : 'Why rely'}
          <br className="hidden md:block" />{' '}
          {lang == 'fa' ? 'اعتماد کنید' : 'on us?'}
        </p>
        <p className="mt-2 md:mt-4 text-sm md:max-w-[580px] md:text-xl">
          {lang === 'fa'
            ? 'در USPetSupplies، ما به اندازه شما به حیوانات خانگی‌تان اهمیت می‌دهیم. ما مجموعه‌ای گسترده از محصولات با کیفیت بالا، از غذاهای سالم تا اسباب بازی‌های سرگرم‌کننده، را ارائه می‌دهیم که همه با توجه به نیازهای حیوانات خانگی شما انتخاب شده‌اند. تیم دوستانه و با دانش ما اینجاست تا به شما کمک کند دقیقاً آنچه را که حیوانات خانگی‌تان نیاز دارند پیدا کنید. به USPetSupplies برای هر آنچه که حیوانات خانگی‌تان شایسته آن هستند اعتماد کنید.'
            : 'At USPetSupplies, we care about your pets as much as you do. We offer a wide range of high-quality products, from healthy food to fun toys, all chosen with your pets in mind. Our friendly and knowledgeable team is here to help you find '}
        </p>
        <img
          src="/static/about-us-why-cat.png"
          className="mt-4 w-[116px] md:w-[218px] md:mt-6"
        />
        <SvgCatPawWhy className="hidden md:block absolute top-0 right-0" />
      </section>
      <section>
        <WhyRelyItemsMobile lang={lang} />
        <WhyRelyItemsDesktop lang={lang} />
      </section>
    </main>
  );
};

export default AboutUsWhy;
