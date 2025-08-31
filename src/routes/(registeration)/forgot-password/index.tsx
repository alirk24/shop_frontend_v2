'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

import SvgLogoDesktop from '@/assets/svg/logo-signup-desktop.svg';
import SvgLogoMobile from '@/assets/svg/logo-singup-mobile.svg';
import Icon from '@/components/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import ForgotPasswordForm from './forgot-password.form';

const ForgotPassword = ({ lang = 'en' }) => {
  const router = useRouter();

  return (
    <main className="flex justify-center items-center min-h-screen px-5 md:p-24 py-7">
      <section className="flex flex-col items-center md:w-[486px] md:border md:border-nature-800 md:rounded-2xl md:p-6">
        <Icon>
          <SvgLogoMobile className="md:hidden" />
          <SvgLogoDesktop className="hidden md:block" />
        </Icon>
        <h3 className="mt-6 md:mt-7 font-nunito font-extrabold md:text-2xl">
          {lang == 'fa'
            ? 'رمز عبور خود را بازنشانی کنید'
            : 'Reset your password'}
        </h3>
        <p className="mt-2 md:mt-3 text-sm md:text-base text-center leading-7 md:leading-8">
          {lang == 'fa'
            ? 'پس از وارد کردن ایمیل، پیامی برای تغییر رمز عبور برای شما ارسال می‌شود.'
            : 'After entering your email, a message will be sent to you to change your password.'}
        </p>

        <ForgotPasswordForm lang={lang} />
        <Link
          href={lang == 'fa' ? '/fa/login' : '/login'}
          className="w-full mt-4 md:mt-6 text-sm md:text-base text-center cursor-pointer"
        >
          {lang == 'fa' ? 'بازگشت' : 'Back'}
        </Link>
      </section>
    </main>
  );
};

export default ForgotPassword;
