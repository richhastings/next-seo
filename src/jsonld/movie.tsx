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
  reviews,
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
    },
    "review": [
      ${reviews.map(
        review => `{
        "@type": "Review",
        "author": "${review.author}",
        "datePublished": "${review.datePublished}",
        "description": "${review.description}",
        "name": "${review.description}",
        "reviewRating": {
          "@type": "Rating",
          "bestRating": "${review.bestRating}",
          "ratingValue": "${review.ratingValue}",
          "worstRating": "${review.worstRating}"
        }
      }`,
      )}
    ]
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
