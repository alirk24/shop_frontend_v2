import React from 'react';

import { Switch } from '@/components/ui/switch';

import { useFiltersStore } from '../../store/filters.store';

const DiscountedFilter = ({ lang = 'en' }) => {
  const discounted = useFiltersStore((s) => s.discounted);
  const setDiscounted = useFiltersStore((s) => s.setDiscounted);

  return (
    <label
      htmlFor="only-discounted"
      className="flex justify-between items-center py-4 md:py-5 cursor-pointer border-b"
    >
      <p className="font-semibold">
        {lang == 'fa' ? 'محصولات تخفیف خورده' : 'Discounted products'}
      </p>
      <Switch
        lang={lang}
        checked={discounted}
        onCheckedChange={() => setDiscounted(!discounted)}
        id="only-discounted"
      />
    </label>
  );
};

export default DiscountedFilter;
