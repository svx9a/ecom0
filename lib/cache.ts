import 'server-only';
import { cache } from 'react';

// Wrap any async server function to memoize per-request and enable dedupe()
export const cached = <T extends (...args: any[]) => Promise<any>>(fn: T) => cache(fn);
