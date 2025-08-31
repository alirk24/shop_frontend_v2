import Image from 'next/image';
import React from 'react';

import SvgMiniPetDesktop from '@/assets/svg/mini-pet-desktop.svg';
import SvgMiniPetMobile from '@/assets/svg/mini-pet-mobile.svg';
import Icon from '@/components/icon';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const HomeFAQ = ({ lang = 'en' }) => {
  return (
    <section className="mt-16 md:px-20 md:grid md:grid-cols-12 md:mt-24">
      <div className="md:pt-11 md:col-span-6">
        {lang == 'fa' ? (
          <p className="px-7 font-black font-nunito text-xl md:text-4xl text-center md:text-right">
            بهترین محصول برای{' '}
            <Icon>
              <SvgMiniPetMobile className="inline md:hidden -mt-3" />
              <SvgMiniPetDesktop className="hidden md:inline -mt-4" />
            </Icon>{' '}
            دوستان پشمالوی شما
          </p>
        ) : (
          <p className="px-7 font-black font-nunito text-xl md:text-4xl text-center md:text-left">
            the best product for{' '}
            <Icon>
              <SvgMiniPetMobile className="inline md:hidden -mt-3" />
              <SvgMiniPetDesktop className="hidden md:inline -mt-4" />
            </Icon>{' '}
            your <br />
            furry freinds
          </p>
        )}
        <Accordion
          type="single"
          collapsible
          className="flex flex-col gap-3 w-full px-5 mt-5 md:mt-6"
        >
          <AccordionItem value="1">
            <AccordionTrigger>
              {lang == 'fa'
                ? 'چه نوع محصولاتی برای حیوانات خانگی ارائه می‌دهید؟'
                : 'What types of products do you offer for pets?'}
            </AccordionTrigger>
            <AccordionContent>
              {lang == 'fa'
                ? 'ما طیف گسترده‌ای از محصولات حیوانات خانگی را ارائه می‌دهیم، از غذاهای حیوانات خانگی با کیفیت بالا و خوراکی‌های تشویقی گرفته تا اسباب‌بازی‌ها، لوازم آرایش، جای خواب و لوازم جانبی. چه به دنبال وعده‌های غذایی مغذی، اسباب‌بازی‌های سرگرم‌کننده یا اقلام مراقبتی ضروری باشید، ما هر آنچه حیوان خانگی شما نیاز دارد را زیر یک سقف داریم.s'
                : 'We offer a wide variety of pet products, ranging from high-quality pet foods and treats to toys, grooming supplies, bedding, and accessories. Whether you’re looking for nutritious meals, fun toys, or essential care items, we have everything your pet needs under one roof.'}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="2">
            <AccordionTrigger>
              {lang == 'fa'
                ? 'آیا برای خرید عمده تخفیف ارائه می‌دهید؟'
                : 'Do you offer discounts for bulk purchases?'}
            </AccordionTrigger>
            {lang == 'fa' ? (
              <AccordionContent>
                بله، ما برای خریدهای عمده تخفیف ارائه می‌دهیم! اگر در مقادیر
                زیاد خرید می‌کنید، لطفاً از کارکنان ما در مورد قیمت‌های فعلی
                عمده و تخفیف‌ها سوال کنید.
              </AccordionContent>
            ) : (
              <AccordionContent>
                Yes, we provide discounts for bulk purchases! If you&apos;re
                buying in large quantities, please ask our staff about current
                bulk pricing and discounts.
              </AccordionContent>
            )}
          </AccordionItem>
          <AccordionItem value="3">
            <AccordionTrigger
              className={lang == 'fa' ? 'text-right' : 'text-left'}
            >
              {lang == 'fa'
                ? 'آیا می‌توانم محصولات را به صورت آنلاین سفارش دهم و آنها را در فروشگاه تحویل بگیرم؟'
                : 'Can I order products online and pick them up in-store?'}
            </AccordionTrigger>
            <AccordionContent>
              {lang == 'fa'
                ? 'بله، کاملاً! شما می‌توانید هر محصولی را به صورت آنلاین سفارش دهید و در هنگام پرداخت، گزینه تحویل حضوری را انتخاب کنید. ما اقلام شما را ظرف دو ساعت در ساعات کاری آماده تحویل خواهیم کرد.'
                : 'Absolutely! You can order any product online and choose the in-store pickup option at checkout. We’ll have your items ready for pickup within two hours during regular business hours.'}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="4">
            <AccordionTrigger>
              {lang == 'fa'
                ? 'چه برندهایی از غذای حیوانات خانگی را عرضه می‌کنید؟'
                : 'What brands of pet food do you carry?'}
            </AccordionTrigger>
            {lang == 'fa' ? (
              <AccordionContent>
                ما طیف گسترده‌ای از برندهای غذای حیوانات خانگی با کیفیت بالا، از
                جمله Royal Canin، Hill&apos;s Science Diet، Blue Buffalo و موارد
                دیگر را ارائه می‌دهیم. اگر به دنبال برند خاصی هستید، می‌توانید
                از ما بپرسید و ما به شما در یافتن آن کمک خواهیم کرد.
              </AccordionContent>
            ) : (
              <AccordionContent>
                We carry a wide range of high-quality pet food brands, including
                Royal Canin, Hill&apos;s Science Diet, Blue Buffalo, and more.
                If you’re looking for a specific brand, feel free to ask, and
                we’ll help you find it.
              </AccordionContent>
            )}
          </AccordionItem>
        </Accordion>
      </div>
      <div className="hidden md:block md:col-span-1"></div>
      <div className="flex justify-center pt-6 md:pt-0 md:col-span-5">
        <Image
          src={'/static/kity-hurt.webp'}
          alt="kity-hurt"
          width={598}
          height={547}
          className="w-[254px] h-[233px] md:min-w-[598px] md:h-[547px]"
        />
      </div>
    </section>
  );
};

export default HomeFAQ;
