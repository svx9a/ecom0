import 'server-only';
import { cache } from 'react';
export * from './types';
// Re-export the original API, plus cached wrappers for common calls.
// Update the imports below to match your actual exports if needed.
import * as base from './index';

export const getCollections = cache(base.getCollections);
export const getProducts = cache(base.getProducts);
export const getCollectionProducts = cache(base.getCollectionProducts);
