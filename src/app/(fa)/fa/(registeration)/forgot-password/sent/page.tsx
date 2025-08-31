import { Metadata } from 'next';
import React from 'react';

import ForgotPasswordSent from '@/routes/(registeration)/forgot-password-sent';

export const metadata: Metadata = {
  title: 'uspetinc - فراموشی رمز عبور',
};
const page = () => {
  return <ForgotPasswordSent lang="fa" />;
};

export default page;
