export const ORDER_STATUS_TABS = [
  {
    name: 'Delivered',
    nameFa: 'تحویل داده شده',
  },
  {
    name: 'Pending',
    nameFa: 'در حال انتظار',
  },
  {
    name: 'Shipped',
    nameFa: 'ارسال شده',
  },
  {
    name: 'Cancelled',
    nameFa: 'لغو شده',
  },
  {
    name: 'Salesperson_confirmation',
    nameFa: 'تأیید فروشنده',
  },
  {
    name: 'Salesperson_pre_factored',
    nameFa: 'پیش فاکتور فروشنده',
  },
  {
    name: 'Inventory_reservations',
    nameFa: 'رزرو موجودی',
  },
  {
    name: 'Pre_factored_paid',
    nameFa: 'پیش فاکتور پرداخت شده',
  },
  {
    name: 'Inventory_confirmation',
    nameFa: 'تأیید موجودی',
  },
] as const;
export type OrderStatusTabsType = (typeof ORDER_STATUS_TABS)[number]['name'];
export type OrderStatus = Lowercase<OrderStatusTabsType>;
