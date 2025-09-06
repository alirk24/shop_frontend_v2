'use client';

import { Category } from '@/app/(en)/(core)/shop/page';
import { useFilteredCategories } from '@/hooks/use-language-filter.hook';

import CategoryCard from './cards/category-card.component';

type HomeCategoriesProps = {
  categories: Category[];
  lang: string;
};

const HomeCategories = (props: HomeCategoriesProps) => {
  // Filter categories based on current language route
  const { categories: filteredCategories } = useFilteredCategories(props.categories);
  
  return (
    <main className="mt-16 px-5 md:px-20 md:mt-24">
      <p className="font-nunito font-black text-xl md:text-4xl text-center">
        {props.lang == 'fa' ? 'دسته بندی' : 'Category'}
      </p>

      <section className="mt-5 md:mt-8 grid grid-cols-1 md:grid-cols-3 justify-items-center gap-y-8 md:gap-y-16 md:gap-x-7">
        {filteredCategories.map((c, index) => (
          <CategoryCard
            lang={props.lang}
            key={c.id}
            category={c}
            index={index}
            totalLength={filteredCategories.length}
          />
        ))}
      </section>
    </main>
  );
};

export default HomeCategories;
