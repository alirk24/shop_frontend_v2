import { Metadata } from 'next';
import React from 'react';

import EmailVerification from '@/routes/(registeration)/email-verification';

export const metadata: Metadata = {
  title: 'uspetinc - ثبت ایمیل',
};

const page = () => {
  return <EmailVerification lang="fa" />;
};

export default page;
