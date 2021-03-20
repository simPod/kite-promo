import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import React from 'react';
import '../styles/index.css';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <DefaultSeo
      titleTemplate="%s | Šimon Podlipský"
      description="I teach them kitez"
      openGraph={{
        images: [
          {
            alt: 'Šimon Podlipský',
            height: 330,
            url: 'https://kite.simpod.codes/img.png',
            width: 296,
          },
        ],
        locale: 'cs_CZ',
        site_name: 'Kite Courses',
        type: 'website',
        url: 'https://michaelasomolova/',
      }}
    />
    <Component {...pageProps} />
  </>
);

export default MyApp;
