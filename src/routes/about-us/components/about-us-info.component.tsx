import React from 'react';

const AboutUsInfo = ({ lang = 'en' }) => {
  return (
    <main className="mt-16 md:mt-24 flex flex-col md:grid md:grid-cols-12 gap-8 px-5 md:px-20">
      <section className="md:col-span-6 md:flex md:flex-col md:justify-center">
        <p className="font-nunito font-bold text-lg md:text-4xl">
          {lang === 'fa'
            ? 'حیوانات خانگی شاد، انسان شاد'
            : 'Happy pets, happy humans'}
        </p>
        <p className="mt-2 md:mt-4 text-sm md:text-lg leading-6 md:leading-8">
          {lang === 'fa'
            ? 'در uspetsupplies، ما به قدرت شادی اعتقاد داریم—هم برای حیوانات خانگی شما و هم برای شما. به همین دلیل است که ما متعهد به ارائه تنها با کیفیت‌ترین محصولات هستیم که با دقت ساخته شده و با سال‌ها تجربه پشتیبانی می‌شوند. مأموریت ما این است که اطمینان حاصل کنیم هر تعامل با ما شما و همراهان پشمالویتان را با لبخند ترک کند.'
            : 'At uspetsupplies, we believe in the power of happiness—both for your pets and for you. That’s why we commit to offering only the highest quality products, crafted with care and backed by years of expertise. Our mission is to ensure that every interaction with us leaves you and your furry companions with a smile.'}
        </p>
        <div className="mt-4 md:mt-6 grid grid-cols-2 gap-6">
          <span>
            <p className="font-bold text-xl md:txet-[32px]">
              {lang === 'fa' ? '2000+ محصول' : '+2000 Products'}
            </p>
            <p className="text-sm mt-2 md:text-base">
              {lang === 'fa'
                ? 'بهترین کیفیت، تنوع در دسته‌ها'
                : 'Best Quality, Variety of Categories'}
            </p>
          </span>
          <span>
            <p className="font-bold text-xl md:txet-[32px]">
              {lang === 'fa' ? '20+ کشور' : '+20 Countries'}
            </p>
            <p className="text-sm mt-2 md:text-base">
              {lang === 'fa'
                ? 'خدمات به حیوانات خانگی در سرتاسر جهان'
                : 'Serving Pets Worldwide'}
            </p>
          </span>
          <span>
            <p className="font-bold text-xl md:txet-[32px]">
              {lang === 'fa' ? '25+ سال تجربه' : '+25 Years Experience'}
            </p>
            <p className="text-sm mt-2 md:text-base">
              {lang === 'fa'
                ? 'مورد اعتماد صاحبان حیوانات خانگی از سال 1377'
                : 'Trusted by Pet Owners Since 1999'}
            </p>
          </span>
          <span>
            <p className="font-bold text-xl md:txet-[32px]">
              {lang === 'fa' ? '1000+ مشتری راضی' : '+1000 Happy Clients'}
            </p>
            <p className="text-sm mt-2 md:text-base">
              {lang === 'fa'
                ? 'محبوب در بین حیوانات و صاحبان آنها'
                : 'Loved by Pets & Owners Alike'}
            </p>
          </span>
        </div>
      </section>
      <div className="hidden md:block col-span-1"></div>
      <section className="md:col-span-5 md:flex md:justify-end items-center">
        <img src="/static/about-us-info.png" alt="about-us info" />
      </section>
    </main>
  );
};

export default AboutUsInfo;
