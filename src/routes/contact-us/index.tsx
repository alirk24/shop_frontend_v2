import React from 'react';

import Footer from '@/components/shared/footer.component';

import ContactUsInfo from './components/contact-us-info.component';
import ContactUsForm from './components/contact-us.form';

const ContactUs = ({ lang = 'en' }) => {
  return (
    <>
      <ContactUsForm lang={lang} />
      <ContactUsInfo lang={lang} />
      <Footer lang={lang} />
    </>
  );
};

export default ContactUs;
