import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SeoHeadProps {
  title: string;
  description: string;
}

const SeoHead: React.FC<SeoHeadProps> = ({ title, description }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {/* You can add more meta tags here, e.g., Open Graph, Twitter Cards */}
      {/* <meta property="og:title" content={title} /> */}
      {/* <meta property="og:description" content={description} /> */}
      {/* <meta property="og:type" content="website" /> */}
      {/* <meta name="twitter:card" content="summary_large_image" /> */}
      {/* <meta name="twitter:title" content={title} /> */}
      {/* <meta name="twitter:description" content={description} /> */}
    </Helmet>
  );
};

export default SeoHead;
