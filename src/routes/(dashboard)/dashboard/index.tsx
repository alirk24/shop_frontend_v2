'use client';

import LoadingSpinner from '@/components/ui/loading-spinner';

import DashboardPages from './components/dashboard-pages.component';
import LastOrders from './components/last-orders.component';
import MobileInfo from './components/mobile-info.component';
import OrdersSummary from './components/orders-summary.component';
import useDashboardQuery from './dashboard.query';

const MainDashboard = ({ lang = 'en' }) => {
  const { data, isPending } = useDashboardQuery();

  if (isPending) return <LoadingSpinner className="mt-20" />;

  if (!isPending && data)
    return (
      <main>
        <MobileInfo email={data.email} fullName={data.full_name} />
        <OrdersSummary lang={lang} summary={data.orders_summary} />
        <LastOrders lang={lang} lastOrder={data.last_order} />
        <DashboardPages lang={lang} />
      </main>
    );
};

export default MainDashboard;
