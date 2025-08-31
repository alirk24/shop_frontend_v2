import React from 'react';

import Footer from '@/components/shared/footer.component';

import ProgressBar from '../cart/components/progressbar.component';
import OrderCompleteDetails from './components/order-complete-details.component';

const OrderComplete = ({ lang = 'en' }) => {
  return (
    <>
      <ProgressBar lang={lang} active={3} />
      <OrderCompleteDetails lang={lang} />
      <Footer lang={lang} />
    </>
  );
};

export default OrderComplete;
