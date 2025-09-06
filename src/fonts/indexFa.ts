import localFont from 'next/font/local';

const OpenSansLocalFont = localFont({
  src: [
    {
      path: './vazirmatn/Vazirmatn-Light.ttf',
      style: 'normal',
      weight: '300',
    },
    {
      path: './vazirmatn/Vazirmatn-Regular.ttf',
      style: 'normal',
      weight: '400',
    },
    {
      path: './vazirmatn/Vazirmatn-Medium.ttf',
      style: 'normal',
      weight: '500',
    },
    {
      path: './vazirmatn/Vazirmatn-SemiBold.ttf',
      style: 'normal',
      weight: '600',
    },
    {
      path: './vazirmatn/Vazirmatn-Bold.ttf',
      style: 'normal',
      weight: '700',
    },
    {
      path: './vazirmatn/Vazirmatn-ExtraBold.ttf',
      style: 'normal',
      weight: '800',
    },
  ],
  variable: '--font-opensans',
});
const NunitoLocalFont = localFont({
  src: [
    {
      path: './vazirmatn/Vazirmatn-ExtraLight.ttf',
      style: 'normal',
      weight: '200',
    },
    {
      path: './vazirmatn/Vazirmatn-Light.ttf',
      style: 'normal',
      weight: '300',
    },
    {
      path: './vazirmatn/Vazirmatn-Regular.ttf',
      style: 'normal',
      weight: '400',
    },
    {
      path: './vazirmatn/Vazirmatn-Medium.ttf',
      style: 'normal',
      weight: '500',
    },
    {
      path: './vazirmatn/Vazirmatn-SemiBold.ttf',
      style: 'normal',
      weight: '600',
    },
    {
      path: './vazirmatn/Vazirmatn-Bold.ttf',
      style: 'normal',
      weight: '700',
    },
    {
      path: './vazirmatn/Vazirmatn-ExtraBold.ttf',
      style: 'normal',
      weight: '800',
    },
    {
      path: './vazirmatn/Vazirmatn-Black.ttf',
      style: 'normal',
      weight: '900',
    },
  ],
  variable: '--font-nunito',
});

const classNames = `${OpenSansLocalFont.className} ${NunitoLocalFont.className}`;
const variables = `${OpenSansLocalFont.variable} ${NunitoLocalFont.variable}`;

const fontsfa = {
  fonts: {
    opensans: OpenSansLocalFont,
    nunito: NunitoLocalFont,
  },
  classNames,
  variables,
};

export default fontsfa;
