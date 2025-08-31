'use client';

import { Metadata } from 'next';
import { useRouter } from 'next/navigation';
import { ReactNode, useEffect } from 'react';

import Loading from '@/app/loading';
import Navbar from '@/components/shared/navbar/navbar.component';
import useProfileQuery from '@/hooks/react-query/queries/profile.query';
import DashboardLogoutModal from '@/routes/(dashboard)/_components/modals/dashboard-logout.modal';
import DashboardSidebarLayout from '@/routes/(dashboard)/_layouts/dashboard-sidebar/dashboard-sidebar.layout';

export const metadata: Metadata = {
  title: 'uspetinc - داشبورد کاربر',
};

const DashboardLayout = ({
  lang = 'en',
  children,
}: {
  children: ReactNode;
  lang: string;
}) => {
  const router = useRouter();

  const { data, isPending } = useProfileQuery();

  useEffect(() => {
    if (!isPending && !data?.data) {
      lang == 'fa' ? router.replace('/fa/login') : router.replace('/login');
    }
  }, [data, isPending]);

  if (isPending) {
    return <Loading />;
  }

  return (
    <>
      <DashboardLogoutModal lang={lang} />
      <Navbar lang={lang} />
      <div className="md:grid md:grid-cols-12 md:gap-6 md:mt-8 mt-6 md:pb-6 px-5 md:px-20">
        <div className="col-span-3 hidden md:flex md:flex-col">
          <DashboardSidebarLayout lang={lang} />
        </div>
        <div className="col-span-9 mb-6">{children}</div>
      </div>
    </>
  );
};

export default DashboardLayout;
