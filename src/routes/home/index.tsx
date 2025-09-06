import { Product } from '@/app/(en)/(core)/product/[productId]/page';
import { Brand, Category } from '@/app/(en)/(core)/shop/page';
import { axiosInstance } from '@/lib/constants/axios';

import Footer from '../../components/shared/footer.component';
import Banners1 from './components/banners-1.component';
import Banners2 from './components/banners-2.component';
import HomeAchievements from './components/home-achievements.componen';
import HomeBrandsWeLove from './components/home-brands-we-love.component';
import HomeCategories from './components/home-categories.component';
import HomeFAQ from './components/home-faq.component';
import HomeLanding from './components/home-landing.component';
import HomeOurPromise from './components/home-our-promise.component';
import HomePets from './components/home-pets.component';
import HomeSuperSale from './components/home-super-sale.component';
// import HomeBlog from './components/home-tips.component';
import HomeTopCategories from './components/home-top-categories.component';
import HomeTopSellingProducts from './components/home-top-selling-products.component';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

const Home = async ({ lang = 'en' }) => {
  const [
    bestSelling,
    brands,
    categories,
    onSales,
    topCategories,
    pets,
    banners,
    // blog,
  ] = await getHomePageData();

  return (
    <>
      <HomeLanding lang={lang} />
      <HomeTopCategories lang={lang} products={topCategories} />
      <HomePets lang={lang} pets={pets} />
      <Banners1 banners={banners} />
      <HomeSuperSale lang={lang} products={onSales} />
      <HomeCategories lang={lang} categories={categories} />
      <HomeTopSellingProducts lang={lang} products={bestSelling} />
      <Banners2 banners={banners} />
      <HomeOurPromise lang={lang} />
      <HomeBrandsWeLove lang={lang} brands={brands} />
      <HomeFAQ lang={lang} />
      {/* <HomeBlog blog={blog} /> */}
      <HomeAchievements lang={lang} />
      <Footer lang={lang} />
    </>
  );
};

export type Pet = {
  id: number;
  species: string;
  image: string;
};

export type Banner = {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  created_at: string;
  updated_at: string;
};

export type Blog = {
  title: string;
  image: string;
  description: string;
  date: string;
  link: string;
};

async function getHomePageData() {
  try {
    const results = await Promise.allSettled([
      axiosInstance
        .get<Product[]>('/shop/api/v1/homepage/best-selling/')
        .then((res) => res.data),
      axiosInstance
        .get<Brand[]>('/shop/api/v1/homepage/brands/')
        .then((res) => res.data),
      axiosInstance
        .get<Category[]>('/shop/api/v1/homepage/categories-list/')
        .then((res) => res.data),
      axiosInstance
        .get<Product[]>('/shop/api/v1/homepage/sale/')
        .then((res) => res.data),
      axiosInstance
        .get<Product[]>('/shop/api/v1/homepage/top-products/')
        .then((res) => res.data),
      axiosInstance.get<Pet[]>('/shop/api/v1/pets/').then((res) => res.data),
      axiosInstance
        .get<Banner[]>('/shop/api/v1/homepage/banners/')
        .then((res) => res.data),
      // axiosBlog
      //   .get<Blog[]>('/blog/wp-json/uspet/v1/posts')
      //   .then((res) => res.data),
    ]);

    // Handle results gracefully - use empty arrays for failed requests
    const processedResults = results.map((result, index) => {
      if (result.status === 'rejected') {
        console.warn(`Failed to fetch data for request ${index}:`, result.reason);
        return []; // Return empty array for failed requests
      }
      return result.value;
    });

    return [
      processedResults[0] || [],
      processedResults[1] || [],
      processedResults[2] || [],
      processedResults[3] || [],
      processedResults[4] || [],
      processedResults[5] || [],
      processedResults[6] || [],
      // processedResults[7] || [],
    ] as [
      Product[],
      Brand[],
      Category[],
      Product[],
      Product[],
      Pet[],
      Banner[],
      // Blog[],
    ];
  } catch (error) {
    // Fallback for complete failure - return empty arrays
    console.warn('Complete failure fetching homepage data:', error);
    return [
      [], // bestSelling
      [], // brands
      [], // categories
      [], // onSales
      [], // topCategories
      [], // pets
      [], // banners
      // [], // blog
    ] as [
      Product[],
      Brand[],
      Category[],
      Product[],
      Product[],
      Pet[],
      Banner[],
      // Blog[],
    ];
  }
}

export default Home;
