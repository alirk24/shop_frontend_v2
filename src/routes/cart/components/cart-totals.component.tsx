'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

import { Button } from '@/components/ui/button';
import useProfileQuery from '@/hooks/react-query/queries/profile.query';
import { calculatePrice } from '@/lib/utils/calculatePrice';
import { useCartStore } from '@/store/cart.store';

const CartTotals = ({ lang = 'en' }) => {
  const { data, isPending } = useProfileQuery();

  const router = useRouter();
  const cart = useCartStore((s) => s.cart);

  const { discountPercent, finalPrice, totalDiscount, totalPrice } =
    calculatePrice(cart);

  return (
    <section className="flex flex-col md:w-full border border-nature-900 md:col-span-4 md:mt-14 p-3 md:p-5 rounded-xl md:rounded-2xl md:h-min">
      <h3 className="font-nunito font-black text-lg md:text-2xl">
        {lang == 'fa' ? 'مجموع سبد' : 'Cart Totals'}
      </h3>
      <div className="flex justify-between mt-4 md:mt-6 text-sm md:text-base">
        <p>{lang == 'fa' ? 'جمع جزئی:' : 'Subtotal:'}</p>
        <p>
          {lang == 'fa' ? '' : '$'}
          {totalPrice.toFixed(2)}
          {lang == 'fa' ? ' تومان' : ''}
        </p>
      </div>
      <div className="flex justify-between mt-2 md:mt-4 text-sm md:text-base">
        <p>{lang == 'fa' ? 'تخفیف' : 'Discount:'}</p>
        <p className="text-error-500">
          {lang == 'fa' ? '' : '$'}
          {totalDiscount.toFixed(2)}
          {lang == 'fa' ? ' تومان' : ''} ({discountPercent.toFixed(2)}%)
        </p>
      </div>
      <div className="mt-4 border-t border-nature-900 w-full"></div>
      <div className="flex justify-between mt-4 text-sm md:text-base font-extrabold">
        <p>{lang == 'fa' ? 'مجموع' : 'Total:'}</p>
        <p>
          {lang == 'fa' ? '' : '$'} {finalPrice.toFixed(2)}
          {lang == 'fa' ? ' تومان' : ''}
        </p>
      </div>
      <Button
        onClick={() => {
          if (data?.data) {
            lang == 'fa'
              ? router.push('/fa/cart/checkout')
              : router.push('/cart/checkout');
          } else {
            lang == 'fa' ? router.push('/fa/login') : router.push('/login');
          }
        }}
        isLoading={isPending}
        disabled={isPending || cart.length === 0}
        variant={isPending || cart.length === 0 ? 'disabled' : 'default'}
        className="mt-4 md:mt-6 font-bold text-sm rounded-lg md:rounded-2xl md:h-[56px]"
      >
        {lang == 'fa' ? 'برای تسویه حساب اقدام کنید' : 'Proceed to checkout'}
      </Button>
    </section>
  );
};

export default CartTotals;
