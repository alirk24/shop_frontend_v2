'use client';

import React from 'react';

import { Product } from '@/app/(en)/(core)/product/[productId]/page';
import ShopSpecifications from '@/components/shared/shop-specifications.component';

import Footer from '../../components/shared/footer.component';
import AddCommentModal from './components/add-comment/add-comment.modal';
import ProductBreadcrumb from './components/product-breadcrumb.component';
import ProductComments from './components/product-comments.component';
import ProductWildCard from './components/product-wild-card/product-wild-card.component';
import RelatedProducts from './components/product-wild-card/related-products.component';
import useSingleProductQuery from './queries/single-product.query';

const ProductDetails = ({
  lang = 'en',
  product,
}: {
  product: Product;
  lang: string;
}) => {
  const { data } = useSingleProductQuery(product);

  if (data)
    return (
      <>
        <AddCommentModal lang={lang} />
        <ProductBreadcrumb productName={data.name} lang={lang} />
        <ProductWildCard
          lang={lang}
          title={data.name}
          description={data.description}
          id={data.id}
          inventory={data.inventory}
          price={data.price}
          priceWithDiscount={data.price_after_promotion}
          images={data.image_urls}
          weight={data.weight}
          totalDiscount={data.total_discount}
          activePromotions={data.active_promotions}
          features={data.features}
          IngredientsAnalysis={data.IngredientsAnalysis}
          ShippingReturns={data.ShippingReturns}
        />
        <ShopSpecifications
          lang={lang}
          className="mt-10 md:mt-24 px-5 md:px-20"
        />
        <ProductComments lang={lang} />
        <RelatedProducts lang={lang} />
        <Footer lang={lang} />
      </>
    );
};

export default ProductDetails;
