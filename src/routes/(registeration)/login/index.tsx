import Link from 'next/link';

import SvgGoogleDesktop from '@/assets/svg/google-desktop.svg';
import SvgGoogleMobile from '@/assets/svg/google-mobile.svg';
import SvgLogoDesktop from '@/assets/svg/logo-signup-desktop.svg';
import SvgLogoMobile from '@/assets/svg/logo-singup-mobile.svg';
import Icon from '@/components/icon';
import { Button } from '@/components/ui/button';

import LoginForm from './login.form';

const Login = ({ lang = 'en' }) => {
  return (
    <main className="flex min-h-screen justify-center items-center md:py-24 py-7">
      <section className="flex flex-col items-center px-5 w-full md:w-[486px] md:border md:border-nature-800 md:rounded-2xl md:p-6">
        <Icon>
          <SvgLogoMobile className="md:hidden" />
          <SvgLogoDesktop className="hidden md:block" />
        </Icon>

        <h3 className="mt-6 md:mt-7 md:text-2xl font-nunito font-extrabold">
          {lang == 'fa' ? 'ورود به حساب کاربری' : 'Sign in to your account'}
        </h3>
        <p className="mt-2 md:mt-3 text-sm md:text-lg">
          {lang == 'fa' ? 'خوش برگشتی!' : 'welcome back!'}
        </p>
        {/* 
        <Button className="w-full flex gap-2 bg-transparent border border-nature-800 mt-6 md:mt-8 py-[11px] rounded-lg text-sm md:text-base font-normal md:font-normal text-text-500 hover:bg-transparent">
          <Icon>
            <SvgGoogleMobile className="md:hidden" />
            <SvgGoogleDesktop className="hidden md:block" />
          </Icon>
          Continue with Google
        </Button> */}

        {/* <div className="w-full flex gap-3 justify-between items-center mt-6 md:mt-8">
          <div className="w-full border-t border-nature-800"></div>
          <p className="text-sm md:text-base whitespace-nowrap">
            or continue with email
          </p>
          <div className="w-full border-t border-nature-800"></div>
        </div> */}

        <LoginForm lang={lang} />
        <p className="mt-4 md:mt-6 text-sm md:text-base">
          {lang == 'fa' ? 'حساب کاربری ندارید؟' : 'Don’t you have an account?'}{' '}
          <Link
            href={lang == 'fa' ? '/fa/signup' : '/signup'}
            className="font-semibold text-link cursor-pointer"
          >
            {lang == 'fa' ? 'ایجاد حساب' : 'Create account'}
          </Link>
        </p>
      </section>
    </main>
  );
};

export default Login;
