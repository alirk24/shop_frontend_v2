'use client';

import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

import { Button } from '@/components/ui/button';
import { calculatePrice } from '@/lib/utils/calculatePrice';
import { useCartStore } from '@/store/cart.store';

type OrderDetailsProps = {
  isLoading: boolean;
  lang: string;
};

const OrderDetails = (props: OrderDetailsProps) => {
  const cart = useCartStore((s) => s.cart);

  const { discountPercent, finalPrice, totalDiscount, totalPrice } =
    calculatePrice(cart);

  return (
    <section className="flex flex-col border border-nature-900 rounded-xl md:rounded-2xl p-3 md:p-5 md:col-span-4 md:h-min md:mt-14">
      <h3 className="font-nunito font-black text-lg md:text-2xl">
        {props.lang == 'fa' ? 'سفارش شما' : 'Your Order'}
      </h3>

      <p className="font-nunito font-bold text-sm md:text-lg mt-4 md:mt-6">
        {props.lang == 'fa' ? 'تعداد کالا' : 'Products'} ({cart.length})
      </p>
      <ul className="flex flex-col">
        {cart?.map((item) => (
          <li
            key={item.id}
            className="flex justify-between py-3 md:py-4 border-b border-nature-900"
          >
            <div>
              <p className="font-nunito text-sm md:text-base">{item.title}</p>
              <p className="mt-2 text-sm md:text-base text-text-300">
                {item.weight}
                {props.lang == 'fa' ? 'تعداد / کیلوگرم ' : ' KG / Number '}{' '}
                {item.count}
              </p>
            </div>
            <p className="text-sm md:text-base">
              {props.lang == 'fa' ? '' : '$ '}
              {(item.priceWithDiscount * item.count).toFixed(2)}
              {props.lang == 'fa' ? ' تومان' : ''}
            </p>
          </li>
        ))}
      </ul>
      <div className="flex justify-between mt-3 md:mt-4">
        <p className="font-nunito text-sm md:text-base">
          {props.lang == 'fa' ? 'مجموع جزئی' : 'Subtotal:'}
        </p>
        <p className="text-sm md:text-base">
          {props.lang == 'fa' ? '' : '$ '}
          {totalPrice}
          {props.lang == 'fa' ? ' تومان' : ''}
        </p>
      </div>
      <div className="flex justify-between mt-3 md:mt-4">
        <p className="font-nunito text-sm md:text-base">
          {props.lang == 'fa' ? 'تخفیف:' : 'Discount:'}
        </p>
        <p className="text-sm md:text-base text-error-500">
          {props.lang == 'fa' ? '' : '$ '}
          {totalDiscount.toFixed(2)}
          {props.lang == 'fa' ? ' تومان' : ''} ({discountPercent.toFixed(2)}%)
        </p>
      </div>
      <div className="flex justify-between mt-3 md:mt-4">
        <p className="font-nunito text-sm md:text-base font-extrabold">
          {props.lang == 'fa' ? 'مجموع' : 'Total:'}
        </p>
        <p className="text-sm md:text-base font-extrabold">
          {props.lang == 'fa' ? '' : '$ '}
          {finalPrice.toFixed(2)}
          {props.lang == 'fa' ? ' تومان' : ''}
        </p>
      </div>
      <Button
        type="submit"
        variant={cart.length === 0 || props.isLoading ? 'disabled' : 'default'}
        disabled={cart.length === 0 || props.isLoading}
        isLoading={props.isLoading}
        className="mt-6 rounded-lg md:rounded-2xl md:text-base"
      >
        {props.lang == 'fa' ? 'اقدام برای تسویه حساب' : 'Proceed to checkout'}
      </Button>
    </section>
  );
};

export default OrderDetails;
