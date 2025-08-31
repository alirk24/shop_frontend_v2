import Footer from '@/components/shared/footer.component';

import CartTotals from './components/cart-totals.component';
import ProgressBar from './components/progressbar.component';
import ShoppingCart from './components/shopping-cart.component';

const Cart = ({ lang = 'en' }) => {
  return (
    <>
      <ProgressBar lang={lang} active={1} />
      <main className="flex flex-col gap-4 md:gap-6 md:grid md:grid-cols-12 px-5 md:px-20 mt-10 md:mt-16">
        <ShoppingCart lang={lang} />
        <CartTotals lang={lang} />
      </main>
      <Footer lang={lang} />
    </>
  );
};

export default Cart;
