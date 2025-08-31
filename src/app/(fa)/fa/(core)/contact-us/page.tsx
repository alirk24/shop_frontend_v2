import { Metadata } from 'next';
import React from 'react';

import ContactUs from '@/routes/contact-us';

export const metadata: Metadata = {
  title: 'uspetinc - تماس با ما',
};

const page = () => {
  return <ContactUs lang="fa" />;
};

export default page;
