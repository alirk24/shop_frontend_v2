import React from 'react';

import { Brand } from '@/app/(en)/(core)/shop/page';
import Footer from '@/components/shared/footer.component';
import { axiosInstance } from '@/lib/constants/axios';

import HomeBrandsWeLove from '../home/components/home-brands-we-love.component';
import AboutusFounder from './components/about-us-founder.component';
import AboutUsGallery from './components/about-us-gallery.component';
import AboutUsHero from './components/about-us-hero.component';
import AboutUsInfo from './components/about-us-info.component';
import AboutUsWhatWeProvide from './components/about-us-what-we-provide.component';
import AboutUsWhy from './components/why-rely/about-us-why.component';

const AboutUs = async ({ lang = 'en' }) => {
  const brands = await getData();

  return (
    <>
      <AboutUsHero lang={lang} />
      <HomeBrandsWeLove lang={lang} brands={brands} />
      <AboutUsInfo lang={lang} />
      <AboutUsWhatWeProvide lang={lang} />
      <AboutusFounder lang={lang} />
      <AboutUsGallery lang={lang} />
      <AboutUsWhy lang={lang} />
      <Footer lang={lang} />
    </>
  );
};

const getData = async () => {
  const response = await axiosInstance
    .get<Brand[]>('/shop/api/v1/homepage/brands/')
    .then((res) => res.data);

  return response;
};

export default AboutUs;
