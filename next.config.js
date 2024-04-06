const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  images: {
    domains: ['res.cloudinary.com'],
  },
  // Add the videos configuration
  webpack(config, { isServer }) {
    if (!isServer) {
      // Exclude Node.js core modules from bundling in the browser
      config.resolve.fallback = {
        fs: false,
        net: false,
        dns: false,
      };
    }
    config.module.rules.push({
      test: /\.(mov|mp4|webm)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next',
            name: 'static/media/[name].[hash].[ext]',
          },
        },
      ],
    });
    return config;
  },
};

module.exports = nextConfig;
