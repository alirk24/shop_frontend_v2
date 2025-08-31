import React from 'react';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

const ProductBreadcrumb = ({ lang = 'en', productName = '' }) => {
  return (
    <section className="mt-6 md:mt-9 px-5 md:px-20">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href={lang == 'fa' ? '/fa' : '/'}>
              {lang == 'fa' ? 'خانه' : 'Home'}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className={lang == 'fa' ? 'rotate-180' : ''} />
          <BreadcrumbItem>
            <BreadcrumbPage className="text-text-500">
              {productName}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </section>
  );
};

export default ProductBreadcrumb;
