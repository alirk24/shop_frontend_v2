import { Metadata } from 'next';
import { ReactNode } from 'react';

import DashboardLayout from '@/components/shared/dashboard.layout';

export const metadata: Metadata = {
  title: 'uspetinc - User dashboard',
};

const Layout = ({ children }: { children: ReactNode }) => {
  return <DashboardLayout lang="en">{children}</DashboardLayout>;
};

export default Layout;
