import localFont from 'next/font/local';

const OpenSansLocalFont = localFont({
  src: [
    {
      path: './vazirmatn/vazirmatn-Light.ttf',
      style: 'normal',
      weight: '300',
    },
    {
      path: './vazirmatn/vazirmatn-Regular.ttf',
      style: 'normal',
      weight: '400',
    },
    {
      path: './vazirmatn/vazirmatn-Medium.ttf',
      style: 'normal',
      weight: '500',
    },
    {
      path: './vazirmatn/vazirmatn-SemiBold.ttf',
      style: 'normal',
      weight: '600',
    },
    {
      path: './vazirmatn/vazirmatn-Bold.ttf',
      style: 'normal',
      weight: '700',
    },
    {
      path: './vazirmatn/vazirmatn-ExtraBold.ttf',
      style: 'normal',
      weight: '800',
    },
  ],
  variable: '--font-opensans',
});
const NunitoLocalFont = localFont({
  src: [
    {
      path: './vazirmatn/vazirmatn-ExtraLight.ttf',
      style: 'normal',
      weight: '200',
    },
    {
      path: './vazirmatn/vazirmatn-Light.ttf',
      style: 'normal',
      weight: '300',
    },
    {
      path: './vazirmatn/vazirmatn-Regular.ttf',
      style: 'normal',
      weight: '400',
    },
    {
      path: './vazirmatn/vazirmatn-Medium.ttf',
      style: 'normal',
      weight: '500',
    },
    {
      path: './vazirmatn/vazirmatn-SemiBold.ttf',
      style: 'normal',
      weight: '600',
    },
    {
      path: './vazirmatn/vazirmatn-Bold.ttf',
      style: 'normal',
      weight: '700',
    },
    {
      path: './vazirmatn/vazirmatn-ExtraBold.ttf',
      style: 'normal',
      weight: '800',
    },
    {
      path: './vazirmatn/vazirmatn-Black.ttf',
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
