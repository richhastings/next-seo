import { FC } from 'react';
export interface MovieJsonLdProps {
  name: string;
  images: ReadonlyArray<string>;
  dateCreated: string;
  director: string;
  ratingValue: string;
  reviewCount: string;
  reviews: ReadonlyArray<object>;
}
declare const MovieJsonLd: FC<MovieJsonLdProps>;
export default MovieJsonLd;
