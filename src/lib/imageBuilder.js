import { createImageUrlBuilder } from '@sanity/image-url';

import client from '../sanityClient';

const builder = createImageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}