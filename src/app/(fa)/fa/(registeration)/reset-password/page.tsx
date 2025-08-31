import { Metadata } from 'next';
import React from 'react';

import ResetPassword from '@/routes/(registeration)/reset-password';

export const metadata: Metadata = {
  title: 'uspetinc - بازنشانی رمز عبور',
};
const page = () => {
  return <ResetPassword lang="fa" />;
};

export default page;
