'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import Icon from '@/components/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import SvgEyeDesktop from '@icons/eye-desktop.svg';
import SvgEye from '@icons/eye-mobile.svg';

import useLoginMutation from './login.mutation';
import {
  LoginValidationType,
  emailValidation,
  loginValidation,
} from './login.validation';

const LoginForm = ({ lang = 'en' }) => {
  const [showPassword, setShowPassword] = useState(false);

  const { mutate, isPending } = useLoginMutation({});

  const { control, handleSubmit, formState } = useForm<LoginValidationType>({
    resolver: zodResolver(loginValidation),
  });

  const submitHandler = (values: LoginValidationType) => {
    const isEmail = emailValidation.safeParse(values.username).success;

    mutate({
      ...(isEmail ? { email: values.username } : { username: values.username }),
      password: values.password,
    });
  };

  const isFormValid = formState.isValid;

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="w-full flex flex-col mt-6 md:mt-8"
    >
      <label className="text-sm md:text-base">
        {lang == 'fa' ? 'نام کامل یا ایمیل' : 'Full name or email'}
      </label>
      <Controller
        control={control}
        name="username"
        render={({ field, fieldState }) => (
          <Input
            {...field}
            errorText={fieldState.error?.message}
            className="mt-2 md:mt-3"
          />
        )}
      />
      <label className="text-sm md:text-base mt-4">
        {lang == 'fa' ? 'رمز عبور' : 'Password'}
      </label>
      <Controller
        control={control}
        name="password"
        render={({ field, fieldState }) => (
          <>
            <div
              className={`flex items-center bg-nature-600 rounded-lg mt-2 md:mt-3 ${lang == 'fa' ? ' pl-3 ' : ' pr-3 '}`}
            >
              <Input
                type={showPassword ? 'text' : 'password'}
                {...field}
                className="flex-1"
              />
              <Icon
                onMouseOver={() => {
                  setShowPassword(true);
                }}
                onMouseLeave={() => {
                  setShowPassword(false);
                }}
              >
                <SvgEye className="md:hidden w-6 h-6" />
                <SvgEyeDesktop className="hidden md:block" />
              </Icon>
            </div>
            <p className="text-error-400 mt-2 text-xs">
              {fieldState.error?.message}
            </p>
          </>
        )}
      />

      <div className="flex items-center justify-end mt-4">
        <Link
          href={lang == 'fa' ? '/fa/forgot-password' : '/forgot-password'}
          className="text-link text-xs md:text-base"
        >
          {lang == 'fa' ? 'رمز عبور را فراموش کرده‌ام' : 'I forgot my password'}
        </Link>
      </div>

      <Button
        variant={!isFormValid || isPending ? 'disabled' : 'default'}
        disabled={!isFormValid || isPending}
        isLoading={isPending}
        className="mt-6 md:mt-8 font-bold text-sm shadow-color-md md:text-base"
      >
        {lang == 'fa' ? 'ورود به حساب' : 'Login'}
      </Button>
    </form>
  );
};

export default LoginForm;
