import { ReactNode } from 'react';

import Navbar from '@/components/shared/navbar/navbar.component';

type CoreLayoutProps = {
  children: ReactNode;
};

const CoreLayout = (props: CoreLayoutProps) => {
  return (
    <>
      <Navbar lang={'fa'} />
      {props.children}
    </>
  );
};

export default CoreLayout;
