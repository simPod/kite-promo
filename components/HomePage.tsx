import { NextSeo } from 'next-seo';
import React from 'react';
import { baseUrl } from '../url';
import { Layout } from './Layout';

export const HomePage: React.FC = () => {
  const canonical = baseUrl;

  return (
    <Layout>
      <NextSeo
        // title={title}
        canonical={canonical}
        openGraph={{
          title: 'Šimon Podlipský',
          url: canonical,
        }}
      />
    </Layout>
  );
};
