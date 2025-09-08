import bundleAnalyzer from '@next/bundle-analyzer';
const withBundleAnalyzer = bundleAnalyzer({ enabled: process.env.ANALYZE === 'true' });

const baseConfig = {
  images: {
    domains: ['images.unsplash.com', 'cdn.shopify.com', 'files.stripe.com']
  },
  experimental: {
    optimizePackageImports: ['lucide-react', 'react', 'react-dom']
  },
  reactStrictMode: true
  // 🔥 swcMinify removed — no longer valid in Next.js v15+
};

export default withBundleAnalyzer(baseConfig);
