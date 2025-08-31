import Link from 'next/link';

import SvgArrow20 from '@/assets/svg/Arrow-gray-20.svg';
import SvgArrowGray32 from '@/assets/svg/Arrow-gray-32.svg';

import { STATUSES } from '../../_constants/dashboard-routes.constants';
import { OrderStatus } from '../../orders/constants/orders.constants';
import { OrderItem } from '../../orders/orders.types';

export type OrdersCardProps = {
  status: OrderStatus;
  date: string;
  orderId: number;
  price: string;
  orderItem: OrderItem[];
  lang: string;
};

const OrdersCard = (props: OrdersCardProps) => {
  return (
    <li className="w-full bg-nature-600 rounded-xl p-4 md:pr-2">
      <div className="w-full flex md:justify-between md:items-center">
        <div className="w-full grid gap-y-[22px] md:gap-x-8 grid-cols-2 place-content-between md:flex md:place-content-start md:grid-cols-4">
          <p className="text-sm md:text-lg text-text-400">
            {props.lang === 'fa' ? 'تاریخ:' : 'Date:'}{' '}
            <span className="font-bold text-text-500">
              {new Date(props.date).toLocaleDateString(
                props.lang === 'fa' ? 'fa-IR' : 'en-US',
                {
                  dateStyle: 'long',
                },
              )}
            </span>
          </p>
          <p className="text-sm md:text-lg text-text-400">
            {props.lang === 'fa' ? 'شماره سفارش:' : 'Order ID:'}{' '}
            <span className="font-bold text-text-500 "> #{props.orderId}</span>
          </p>
          <p className="text-sm md:text-lg text-text-400">
            {props.lang === 'fa' ? 'قیمت:' : 'Price:'}{' '}
            <span className="font-bold text-text-500"> ${props.price}</span>
          </p>
          <p className="text-sm md:text-lg text-text-400">
            {props.lang === 'fa' ? 'وضعیت:' : 'State:'}{' '}
            <span
              className={`font-bold ${STATUSES.find((s) => s.name.toLowerCase() === props.status)?.colorClassName}`}
            >
              {' '}
              {props.status.charAt(0).toUpperCase() + props.status.slice(1)}
            </span>
          </p>
        </div>
        <Link
          href={
            props.lang == 'fa'
              ? `/fa/dashboard/orders/${props.orderId}`
              : `/dashboard/orders/${props.orderId}`
          }
        >
          <SvgArrowGray32 className="hidden md:block" />
        </Link>
      </div>
      <div className="flex items-center justify-between mt-6">
        <div className="hidden md:flex flex-wrap gap-5 md:gap-11">
          {props.orderItem?.map((item) => (
            <Link
              key={item.id}
              href={
                props.lang == 'fa'
                  ? `/fa/product/${item.product.id}`
                  : `/product/${item.product.id}`
              }
            >
              <img
                src={item.product.image_urls[0]}
                alt={item.product.name}
                className="h-[52px] md:h-[82px] w-auto"
              />
            </Link>
          ))}
        </div>
        <div className="flex md:hidden flex-wrap gap-5 md:gap-11">
          {props.orderItem?.slice(0, 4).map((item) => (
            <Link
              key={item.id}
              href={
                props.lang == 'fa'
                  ? `/fa/product/${item.product.id}`
                  : `/product/${item.product.id}`
              }
            >
              <img
                src={item.product.image_urls[0]}
                alt={item.product.name}
                className="h-[52px] md:h-[82px] w-auto"
              />
            </Link>
          ))}
        </div>
        <Link
          href={
            props.lang == 'fa'
              ? `/fa/dashboard/orders/${props.orderId}`
              : `/dashboard/orders/${props.orderId}`
          }
          className="flex items-center text-sm text-text-300 md:hidden"
        >
          {props.lang == 'fa' ? 'مشاهده' : 'view'}
          <SvgArrow20 />
        </Link>
      </div>
    </li>
  );
};

export default OrdersCard;
