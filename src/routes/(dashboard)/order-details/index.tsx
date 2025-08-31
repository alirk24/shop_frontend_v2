'use client';

import Link from 'next/link';

import SvgLongArrow20 from '@/assets/svg/long-arrow-20.svg';
import SvgLongArrow24 from '@/assets/svg/long-arrow-24.svg';
import LoadingSpinner from '@/components/ui/loading-spinner';

import { STATUSES } from '../_constants/dashboard-routes.constants';
import OrderDetailsCard from './components/cards/order-details-card.component';
import useOrderDetailsQuery from './order-details.query';

const translations = {
  en: {
    orderDetails: 'Order details',
    orderHistory: 'Order history',
    date: 'Date:',
    orderId: 'Order ID:',
    price: 'Price:',
    state: 'State:',
    detailsProfile: 'Details profile',
    fullName: 'Full name:',
    phone: 'Phone:',
    streetAddress: 'Street address:',
    products: 'Products',
  },
  fa: {
    orderDetails: 'جزئیات سفارش',
    orderHistory: 'تاریخچه سفارش',
    date: 'تاریخ:',
    orderId: 'شناسه سفارش:',
    price: 'قیمت:',
    state: 'وضعیت:',
    detailsProfile: 'جزئیات پروفایل',
    fullName: 'نام کامل:',
    phone: 'تلفن:',
    streetAddress: 'آدرس خیابان:',
    products: 'محصولات',
  },
};
type Language = 'en' | 'fa';
const OrderDetails = ({ lang = 'en' }: { lang?: Language }) => {
  const { data: order, isPending } = useOrderDetailsQuery();

  if (isPending) return <LoadingSpinner className="mt-20" />;

  if (!isPending && order)
    return (
      <>
        <Link
          href={'/dashboard/main'}
          className="flex gap-1 items-center md:text-lg md:font-semibold"
        >
          <SvgLongArrow20 className="md:hidden" />
          <SvgLongArrow24 className="hidden md:block" />
          {translations[lang].orderDetails}
        </Link>

        <section className="border border-nature-900 rounded-2xl mt-8 md:mt-6 py-4 md:py-6">
          <div className="flex items-center gap-2 px-4 md:px-6">
            <span className="w-[9px] h-[9px] bg-primary-500 rounded-[50px]" />
            <p className="font-nunito font-bold text-sm md:text-lg">
              {translations[lang].orderHistory}
            </p>
          </div>

          <div className="mt-3 md:mt-4 px-4 md:px-6 w-full grid gap-y-[24px] md:gap-x-8 grid-cols-2 place-content-between md:flex md:place-content-start md:grid-cols-4">
            <p className="text-sm inline md:text-base text-text-400">
              {translations[lang].date}{' '}
              <span className="font-bold text-text-500">
                {new Date(order?.created_at).toLocaleDateString(
                  lang === 'fa' ? 'fa-IR' : 'en-US',
                  {
                    dateStyle: 'long',
                  },
                )}
              </span>
            </p>
            <p className="text-sm inline md:text-base text-text-400 text-right md:text-left">
              {translations[lang].orderId}{' '}
              <span className="font-bold text-text-500"> #{order.id}</span>
            </p>
            <p className="text-sm inline md:text-base text-text-400">
              {translations[lang].price}{' '}
              <span className="font-bold text-text-500">
                {' '}
                ${order.total_price}
              </span>
            </p>
            <p className="text-sm inline md:text-base text-text-400 text-right md:text-left">
              {translations[lang].state}{' '}
              <span
                className={`font-bold ${STATUSES.find((s) => s.name.toLowerCase() === order.status)?.colorClassName}`}
              >
                {' '}
                {order.status}
              </span>
            </p>
          </div>

          <div className="mt-5 md:mt-6 border-b border-nature-900"></div>

          <div className="flex items-center gap-2 px-4 md:px-6 mt-5 md:mt-6">
            <span className="w-[9px] h-[9px] bg-primary-500 rounded-[50px]" />
            <p className="font-nunito font-bold text-sm md:text-lg">
              {translations[lang].detailsProfile}
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 md:gap-8 md:mt-4 mt-6 px-4 md:px-6">
            <p className="text-sm inline md:text-base text-text-400 whitespace-nowrap">
              {translations[lang].fullName}{' '}
              <span className="font-bold text-text-500">
                {order.user_full_name}
              </span>
            </p>
            <p className="text-sm inline md:text-base text-text-400 whitespace-nowrap">
              {translations[lang].phone}{' '}
              <span className="font-bold text-text-500">
                {order.order_address.phone_number}
              </span>
            </p>
            <p className="text-sm leading-[26px] inline md:text-base text-text-400">
              {translations[lang].streetAddress}{' '}
              <span className="font-bold text-text-500">
                {order.order_address.street}
              </span>
            </p>
          </div>

          <div className="mt-5 md:mt-6 border-b border-nature-900"></div>

          <div className="flex items-center gap-2 px-4 md:px-6 mt-5 md:mt-6">
            <span className="w-[9px] h-[9px] bg-primary-500 rounded-[50px]" />
            <p className="font-nunito font-bold text-sm md:text-lg">
              {translations[lang].products}
            </p>
          </div>

          <div className="mt-6 flex flex-col md:grid md:grid-cols-2 px-4 md:px-6 gap-5 md:gap-6">
            {order.order_items.map((item) => (
              <OrderDetailsCard
                key={item.id}
                product={item.product}
                finalPrice={item.product.price_after_promotion * item.quantity}
                quantity={item.quantity}
              />
            ))}
          </div>
        </section>
      </>
    );
};

export default OrderDetails;
