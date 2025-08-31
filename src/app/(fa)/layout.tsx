import type { Metadata } from 'next';
import 'swiper/css';
import 'swiper/swiper-bundle.css';

import { Toaster } from '@/components/ui/toaster';
import fontsfa from '@/fonts/indexFa';

import '../globals.css';
import { Providers } from '../providers';

export const metadata: Metadata = {
  title: 'uspetinc',
  description:
    'در فروشگاه US Pet Supplies، ما متعهد به ارائه محصولات و لوازم با کیفیت برای دوستان پشمالو، پردار و فلس‌دار شما هستیم. از تغذیه گرفته تا اسباب‌بازی، ما هر آنچه را که برای شاد و سالم نگه داشتن حیوانات خانگی خود نیاز دارید، فراهم می‌کنیم.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa">
      <body
        className={fontsfa.variables + ' font-opensans bg-white text-text-500'}
        dir="rtl"
      >
        <Toaster />

        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
