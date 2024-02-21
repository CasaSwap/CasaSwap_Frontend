import React from "react";
// next
import Head from "next/head";

// type
import { SEO_INFO_TYPE } from "./types";

// -----------------------------------------------------

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "";

const Seo_Meta: React.FC<SEO_INFO_TYPE> = ({
  title,
  description,
  canonical,
  keywords,
  css,
  image,
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:type" content="website" />
      <meta name="og:title" property="og:title" content={title} />
      <meta
        name="og:description"
        property="og:description"
        content={description}
      />
      <meta property="og:site_name" content="app" />
      <meta property="og:url" content={`${canonical || APP_URL}`} />
      {image ? <meta property="og:image" content={`${image}`} /> : ""}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:site" content={`${canonical || APP_URL}`} />
      {image && <meta name="twitter:image" content={`${image}`} />}
      {canonical && <link rel="canonical" href={`${canonical}`} />}
      <link rel="publisher" href={APP_URL} />
      <meta name="robots" content="index,follow" />
      <meta name="GOOGLEBOT" content="index,follow" />
      {css && <link rel="stylesheet" href={`${css}`} />}
    </Head>
  );
};

export default Seo_Meta;
