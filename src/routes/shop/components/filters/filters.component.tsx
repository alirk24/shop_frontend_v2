import { AccordionFilter } from '@/components/ui/accordion-filter';

import AvailableFilter from './available-filter.component';
import BrandFilter from './brand-filter.component';
import CategoryFilter from './category-filter.component';
import DiscountedFilter from './discounted-filter.component';
import PetFilter from './pet-filter.component';
import PriceFilter from './price-filter.component';
import PromotionFilter from './promotion-filter.component';

const Filters = ({ lang = 'en' }) => {
  return (
    <AccordionFilter type="multiple" className="mt-3 md:mt-1">
      <PriceFilter lang={lang} />
      <CategoryFilter lang={lang} />
      <PetFilter lang={lang} />
      <BrandFilter lang={lang} />
      <DiscountedFilter lang={lang} />
      <PromotionFilter lang={lang} />
      <AvailableFilter lang={lang} />
    </AccordionFilter>
  );
};

export default Filters;
