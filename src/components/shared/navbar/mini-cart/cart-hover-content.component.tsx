import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { calculatePrice } from '@/lib/utils/calculatePrice';
import { useAuthStore } from '@/store/auth.store';
import { useCartStore } from '@/store/cart.store';

import NavbarProductCard from '../navbar-product-card.component';

const CartHoverContent = ({ lang = 'en' }) => {
  const router = useRouter();

  const profile = useAuthStore((s) => s.profile);
  const isLoading = useAuthStore((s) => s.isLoading);
  const cart = useCartStore((s) => s.cart);

  const { finalPrice, discountPercent, totalDiscount, totalPrice } =
    calculatePrice(cart);

  return (
    <>
      <ul className="w-full max-h-[300px] overflow-y-auto no-scrollbar flex flex-col md:px-4 px-5 md:pt-4 pt-5 gap-5 md:gap-6">
        {cart.map((item) => (
          <NavbarProductCard key={item.id} {...item} lang={lang} />
        ))}
      </ul>
      <div className="flex justify-between mt-4 md:mt-6 text-sm md:text-base md:px-4 px-5">
        <p>{lang == 'fa' ? 'تخفیف:' : 'Discount:'}</p>
        <p className="text-error-500">
          {lang == 'fa' ? '' : '$'}
          {totalDiscount.toFixed(2)}
          {lang == 'fa' ? ' تومان' : ''} ({discountPercent.toFixed(2)}%)
        </p>
      </div>
      <div className="flex justify-between mt-2 md:mt-4 text-sm md:text-base md:px-4 px-5">
        <p>{lang == 'fa' ? 'مجموع:' : 'Total:'}</p>
        <p className="">
          {lang == 'fa' ? '' : '$'}
          {finalPrice.toFixed(2)}
          {lang == 'fa' ? ' تومان' : ''}
        </p>
      </div>
      <div className="mt-6 md:px-4 px-5 py-4 bg-nature-600 border-t border-nature-800">
        <div className="flex justify-between font-extrabold text-sm md:text-base">
          <p>{lang == 'fa' ? 'جمع جزئی:' : 'Subtotal:'}</p>
          <p className="">
            {lang == 'fa' ? '' : '$'}
            {totalPrice.toFixed(2)}
            {lang == 'fa' ? ' تومان' : ''}
          </p>
        </div>
        <div className="flex gap-4 mt-5 md:mt-6">
          <Button
            isLoading={isLoading}
            disabled={isLoading}
            variant={isLoading ? 'disabled' : 'default'}
            onClick={() => {
              if (profile) {
                lang == 'fa'
                  ? router.push('/fa/cart/checkout')
                  : router.push('/cart/checkout');
              } else {
                lang == 'fa' ? router.push('/fa/login') : router.push('/login');
              }
            }}
            className="w-full rounded-xl"
          >
            {lang == 'fa' ? 'تسویه حساب' : 'Checkout'}
          </Button>
          <Link href={lang == 'fa' ? '/fa/cart/' : '/cart'} className="w-full">
            <Button
              variant={'outline'}
              className="w-full rounded-xl font-normal md:font-normal"
            >
              {lang == 'fa' ? 'مشاهده سبد' : 'View cart'}
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CartHoverContent;
