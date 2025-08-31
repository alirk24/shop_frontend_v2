import { useQuery } from '@tanstack/react-query';
import React from 'react';

import { Product } from '@/app/(en)/(core)/product/[productId]/page';
import useAxiosProtected from '@/hooks/use-axios-protected.hook';
import queryKeys from '@/lib/constants/query-keys.constants';
import { useAuthStore } from '@/store/auth.store';

export type WishlistResponse = { id: number; products: Product[] };

const useWishlistQuery = () => {
  const axiosProtected = useAxiosProtected();
  const profile = useAuthStore((s) => s.profile);

  const query = useQuery({
    queryKey: [queryKeys.WHISHLISTS],
    queryFn: () =>
      axiosProtected
        .get<WishlistResponse>('/shop/api/v1/wishlists/')
        .then((res) => res.data),
    enabled: !!profile,
  });

  return query;
};

export default useWishlistQuery;
