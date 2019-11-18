import React, { FC } from 'react';
import Head from 'next/head';

import markup from '../utils/markup';

export interface MovieJsonLdProps {
  name: string;
  images: ReadonlyArray<string>;
  dateCreated: string;
  director: string;
  ratingValue: string;
  reviewCount: string;
  reviews: ReadonlyArray<object>;
}

const MovieJsonLd: FC<MovieJsonLdProps> = ({
  name,
  images = [],
  dateCreated,
  director,
  ratingValue,
  reviewCount,
}) => {
  const jslonld = `{
    "@context": "http://schema.org",
    "@type": "Movie",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "${ratingValue}",
      "reviewCount": "${reviewCount}"
    },
    "name": "${name}",
    "image": [
      ${images.map(image => `"${image}"`)}
     ],
    "dateCreated": "${dateCreated}",
    "director": {
      "@type": "Person",
      "name": "${director}"
    }
  }`;

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={markup(jslonld)}
        key="jsonld-movie"
      />
    </Head>
  );
};

export default MovieJsonLd;
