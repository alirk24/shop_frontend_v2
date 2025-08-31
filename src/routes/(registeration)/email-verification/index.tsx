'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import SvgLogoDesktop from '@/assets/svg/logo-signup-desktop.svg';
import SvgLogoMobile from '@/assets/svg/logo-singup-mobile.svg';
import Icon from '@/components/icon';
import { cn } from '@/lib/utils';
import convertSecondsToMinutes from '@/lib/utils/convertSecondsToMinutes';

import { useRegisterStore } from '../_store/register.store';
import EmailVerificationForm from './email-verification.form';
import useResendCode from './resend-code.mutation';

const EmailVerification = ({ lang = 'en' }) => {
  const [timer, setTimer] = useState(120);

  const email = useRegisterStore((s) => s.signupEmail);

  const { mutate, isPending, isSuccess } = useResendCode();

  const router = useRouter();

  useEffect(() => {
    if (!isPending && isSuccess) {
      setTimer(120);
    }
  }, [isPending, isSuccess]);

  useEffect(() => {
    let interval = setInterval(() => {
      if (timer > 0) {
        setTimer((prev) => prev - 1);
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [timer]);

  return (
    <main className="flex justify-center items-center min-h-screen px-5 md:p-24 py-7">
      <section className="flex flex-col items-center md:w-[486px] md:border md:border-nature-800 md:rounded-2xl md:p-6">
        <Icon>
          <SvgLogoMobile className="md:hidden" />
          <SvgLogoDesktop className="hidden md:block" />
        </Icon>
        <h3 className="mt-6 md:mt-7 font-nunito font-extrabold md:text-2xl">
          {lang == 'fa' ? 'تایید آدرس ایمیل' : 'Email verification'}
        </h3>
        <p className="mt-2 md:mt-3 text-sm md:text-base text-center leading-7 md:leading-8">
          {lang == 'fa'
            ? 'لطفا کد تایید ۴ رقمی که به ایمیل شما ارسال شده است را وارد کنید.'
            : 'Please enter the 4-digit verification code that was sent to your email.'}
        </p>

        <EmailVerificationForm lang={lang} />

        <p
          className={cn(
            'w-full mt-4 md:mt-6 text-sm md:text-base text-center cursor-pointer',
            isPending ? 'animate-ping' : '',
          )}
          onClick={() => {
            if (timer === 0 && email && !isPending) {
              mutate({ email });
            }
          }}
        >
          {lang == 'fa' ? 'ارسال مجدد کد' : 'Resend the Code'} (
          {convertSecondsToMinutes(timer)})
        </p>
        <p
          onClick={() => {
            router.back();
          }}
          className="w-full mt-4 md:mt-6 text-sm md:text-base text-center cursor-pointer"
        >
          {lang == 'fa' ? 'بازگشت' : 'Back'}
        </p>
      </section>
    </main>
  );
};

export default EmailVerification;
