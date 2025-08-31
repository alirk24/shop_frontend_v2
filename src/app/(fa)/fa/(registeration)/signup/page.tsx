import { Metadata } from 'next';

import SignupPages from '@/routes/(registeration)/signup/pages';

export const metadata: Metadata = {
  title: 'uspetinc - ثبت نام',
};

const SignupPage = () => {
  return <SignupPages lang="fa" />;
};

export default SignupPage;
