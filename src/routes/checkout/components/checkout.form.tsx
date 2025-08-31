import { zodResolver } from '@hookform/resolvers/zod';
import React, { useEffect } from 'react';
import { Control, Controller, useForm } from 'react-hook-form';

import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useAuthStore } from '@/store/auth.store';

import { CheckoutValidationType } from '../checkout.validation';
import { AddressResponse } from '../queries/addresses.query';

type CheckoutFormProps = {
  address: AddressResponse[];
  control: Control<CheckoutValidationType>;
  lang: string;
};

const CheckoutForm = (props: CheckoutFormProps) => {
  const profile = useAuthStore((s) => s.profile);

  return (
    <main className="w-full md:col-span-8">
      <h1 className="font-nunito font-black text-lg md:text-2xl">
        {props.lang == 'fa' ? 'جزئیات صورتحساب' : 'Billing Details'}
      </h1>
      <section className="flex flex-col gap-4 md:gap-8 mt-6 md:mt-7">
        <div className="flex flex-col md:flex-row gap-4 md:gap-6">
          <div className="flex flex-col gap-3 md:w-full">
            <label className="text-sm md:text-base text-text-200">
              {props.lang == 'fa' ? 'نام و نام خانوادگی' : 'Full name'}
            </label>
            <Input disabled value={profile?.full_name} />
          </div>
          <div className="flex flex-col gap-3 md:w-full">
            <label className="text-sm md:text-base text-text-200">
              {props.lang == 'fa' ? 'ایمیل' : 'Email'}
            </label>
            <Input disabled value={profile?.email} />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-6">
          <div className="flex flex-col gap-3 md:w-full">
            <label className="text-sm md:text-base">
              {props.lang == 'fa' ? 'کشور / منطقه' : 'Country / Region'} *
            </label>
            <Controller
              control={props.control}
              name="country"
              render={({ field, fieldState }) => (
                <Input {...field} errorText={fieldState.error?.message} />
              )}
            />
          </div>
          <div className="flex flex-col gap-3 md:w-full">
            <label className="text-sm md:text-base">
              {props.lang == 'fa' ? 'کشور' : 'Country'} *
            </label>
            <Controller
              control={props.control}
              name="county"
              render={({ field, fieldState }) => (
                <Input {...field} errorText={fieldState.error?.message} />
              )}
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-6">
          <div className="flex flex-col gap-3 md:w-full">
            <label className="text-sm md:text-base">
              {props.lang == 'fa' ? 'آدرس' : 'Street address'} *
            </label>
            <Controller
              control={props.control}
              name="street"
              render={({ field, fieldState }) => (
                <Input {...field} errorText={fieldState.error?.message} />
              )}
            />
          </div>
          <div className="flex flex-col gap-3 md:w-full">
            <label className="text-sm md:text-base">
              {props.lang == 'fa' ? 'استان / شهر' : 'Town / City'} *
            </label>
            <Controller
              control={props.control}
              name="city"
              render={({ field, fieldState }) => (
                <Input {...field} errorText={fieldState.error?.message} />
              )}
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-6">
          <div className="flex flex-col gap-3 md:w-full">
            <label className="text-sm md:text-base">
              {props.lang == 'fa' ? 'کد پستی' : 'Postcode'} *
            </label>
            <Controller
              control={props.control}
              name="postCode"
              render={({ field, fieldState }) => (
                <Input
                  {...field}
                  type="number"
                  className="hide-arrows"
                  errorText={fieldState.error?.message}
                />
              )}
            />
          </div>
          <div className="flex flex-col gap-3 md:w-full">
            <label className="text-sm md:text-base">
              {props.lang == 'fa' ? 'شماره تلفن' : 'Phone'} *
            </label>
            <Controller
              control={props.control}
              name="phone"
              render={({ field, fieldState }) => (
                <Input
                  {...field}
                  type="number"
                  className="hide-arrows"
                  errorText={fieldState.error?.message}
                />
              )}
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-6">
          <div className="flex flex-col gap-3 md:w-full">
            <label className="text-sm md:text-base">
              {props.lang == 'fa'
                ? 'یادداشت‌های سفارش (اختیاری)'
                : 'Order Notes (optional)'}
            </label>
            <Controller
              control={props.control}
              name="notes"
              render={({ field }) => (
                <Textarea {...field} className="h-[126px]" />
              )}
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default CheckoutForm;
