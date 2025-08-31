'use client';

import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import SvgArrowWhite16 from '@/assets/svg/Arrow-white-16.svg';
import SvgArrowWhite24 from '@/assets/svg/Arrow-white-24.svg';
import SvgLogoDesktop from '@/assets/svg/logo-title-desktop.svg';
import SvgLogoMobile from '@/assets/svg/logo-title-mobile.svg';
import Icon from '@/components/icon';
import { Button } from '@/components/ui/button';
import useProfileQuery from '@/hooks/react-query/queries/profile.query';
import useSyncCartQuery from '@/hooks/react-query/queries/sync-cart.query';
import { cn } from '@/lib/utils';
import { useAuthStore } from '@/store/auth.store';

import SvgSingleUserDesktop from '@icons/single-user-desktop.svg';
import SvgSingleUser from '@icons/single-user.svg';

import useCategoriesQuery from './categories.query';
import CartButton from './mini-cart/cart-hover.component';
import MobileSidebar from './mobile-sidebar/mobile-sidebar.component';
import NavbarSearch from './search/navbar-search.component';
import ShopHover from './shop-hover.component';

const Navbar = ({ lang = 'en' }) => {
  useProfileQuery();
  useSyncCartQuery();

  const { data } = useCategoriesQuery();

  const pathname = usePathname();
  const router = useRouter();
  const profile = useAuthStore((s) => s.profile);

  const searchParams = useSearchParams();
  const basePath = pathname.replace(/^\/fa/, ''); // Remove '/fa' from the pathname if present

  // const handleLanguageToggle = () => {
  //   // Get the current path
  //   const newPath = pathname.startsWith('/fa')
  //     ? pathname.replace(/^\/fa/, '') // Remove '/fa' from the start
  //     : `/fa${pathname}`; // Add '/fa' to the start

  //   router.push(newPath); // Navigate to the new path
  // };

  return (
    <nav className="flex justify-between md:items-center px-5 md:px-20 py-3 md:py-5 border-b border-nature-800">
      <div className="flex gap-3">
        {/* Drawer */}
        <MobileSidebar categories={data} lang={lang} />
        {/* End Drawer */}
        <Link href={lang == 'fa' ? '/fa' : '/'}>
          <SvgLogoMobile className="md:hidden mt-1" />
          <SvgLogoDesktop className="hidden md:block" />
        </Link>
        <ul
          className={`hidden md:flex items-center ${lang == 'fa' ? ' pr-8 ' : ' pl-8 '} gap-7`}
        >
          <Link href={lang == 'fa' ? '/fa' : '/'}>
            <li
              className={cn(
                'flex items-center gap-1 cursor-pointer  text-lg',
                pathname === '/' || pathname === '/fa'
                  ? 'font-bold text-primary-500 active-dot'
                  : '',
              )}
            >
              {lang == 'fa' ? 'خانه' : 'Home'}
            </li>
          </Link>
          {/* Shop hover card */}
          <ShopHover lang={lang} categories={data} />
          {/* End Shop hover card */}
          <Link href={lang == 'fa' ? '/fa/about-us' : '/about-us'}>
            <li
              className={cn(
                'flex items-center gap-1 cursor-pointer  text-lg',
                pathname === '/about-us' || pathname === '/fa/about-us'
                  ? 'font-bold text-primary-500 active-dot'
                  : '',
              )}
            >
              {lang == 'fa' ? 'درباره ما' : 'About us'}
            </li>
          </Link>
          <Link href={lang == 'fa' ? '/fa/contact-us' : '/contact-us'}>
            <li
              className={cn(
                'flex items-center gap-1 cursor-pointer  text-lg',
                pathname === '/contact-us' || pathname === '/fa/contact-us'
                  ? 'font-bold text-primary-500 active-dot'
                  : '',
              )}
            >
              {lang == 'fa' ? 'تماس با ما' : 'Contact us'}
            </li>
          </Link>
          {/* <a href={process.env.NEXT_PUBLIC_BLOG_BASE_URL + '/blog'}>
            <li
              className={cn(
                'flex items-center gap-1 cursor-pointer  text-lg',
                pathname === '/blog'
                  ? 'font-bold text-primary-500 active-dot'
                  : '',
              )}
            >
              Blog
            </li>
          </a> */}
        </ul>
      </div>
      <div className="flex gap-2 md:gap-4">
        <NavbarSearch lang={lang} />
        <Icon
          onClick={() => {
            if (profile) {
              lang == 'fa'
                ? router.push('/fa/dashboard/main')
                : router.push('/dashboard/main');
            } else {
              lang == 'fa' ? router.push('/fa/login') : router.push('/login');
            }
          }}
          className={cn(
            'flex justify-center items-center w-8 md:w-14 h-8 md:h-14 cursor-pointer bg-secondary-500 rounded-lg md:rounded-2xl text-white',
            profile ? 'w-auto md:w-auto md:px-4 md:gap-2 gap-0 px-2' : '',
          )}
        >
          <SvgSingleUser className="md:hidden w-6 h-6" />
          <SvgSingleUserDesktop className="hidden md:block w-8 h-8" />
          {profile && (
            <>
              <p className="hidden md:block">{profile?.full_name}</p>
              <SvgArrowWhite24 className="hidden md:block" />
              <SvgArrowWhite16 className="md:hidden" />
            </>
          )}
        </Icon>

        {/* Mini cart */}
        <CartButton lang="fa" />
        {lang == 'fa' ? (
          <Link
            href={{
              pathname: pathname == '/fa' ? '/' : pathname.replace(/^\/fa/, ''),
              query: Object.fromEntries(searchParams),
            }}
            className="flex justify-center items-center  w-8 md:w-14 h-8 md:h-14 cursor-pointer bg-gray-500 rounded-lg md:rounded-2xl text-white"
            // onClick={handleLanguageToggle}
          >
            EN
          </Link>
        ) : (
          <Link
            href={{
              pathname: `/fa${pathname}`,
              query: Object.fromEntries(searchParams),
            }}
            className="flex flex-col justify-center items-center w-8 md:w-14 h-8 md:h-14 cursor-pointer bg-gray-500 rounded-lg md:rounded-2xl text-white p-1"
            // onClick={handleLanguageToggle}
          >
            FA
          </Link>
        )}
        {/* End Mini Cart */}
      </div>
    </nav>
  );
};

export default Navbar;
