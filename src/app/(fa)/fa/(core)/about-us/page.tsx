import { Metadata } from 'next';
import React from 'react';

import AboutUs from '@/routes/about-us';

export const metadata: Metadata = {
  title: 'uspetinc - درباره ما',
};

const page = () => {
  return <AboutUs lang="fa" />;
};

export default page;
