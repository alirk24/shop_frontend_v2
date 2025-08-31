import { Metadata } from 'next';

import Login from '@/routes/(registeration)/login';

export const metadata: Metadata = {
  title: 'uspetinc - ورود به حساب کاربری',
};
const page = () => {
  return <Login lang="fa" />;
};

export default page;
