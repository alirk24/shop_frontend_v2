import { Metadata } from 'next';

import ForgotPassword from '@/routes/(registeration)/forgot-password';

export const metadata: Metadata = {
  title: 'uspetinc - فراموشی رمز عبور',
};

const page = () => {
  return <ForgotPassword lang="fa" />;
};

export default page;
