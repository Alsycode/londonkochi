const { withNextVideo } = require('next-video/process')

const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  images: {
    domains: ['res.cloudinary.com'],
  },
  webpack(config, { isServer }) {
    if (!isServer) {
      // Exclude Node.js core modules from bundling in the browser
      config.resolve.fallback = {
        fs: false,
        net: false,
        dns: false,
        child_process: false,
        tls: false,
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
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/londoncollege-mumbai',
        has: [
          {
            type: 'host',
            value: 'mumbai.londoncollege.in',
          },
        ],
      },
      {
        source: '/',
        destination: '/londoncollege-kochi',
        has: [
          {
            type: 'host',
            value: 'kochi.londoncollege.in',
          },
        ],
      },
    ];
  },
};

module.exports = withNextVideo(nextConfig);
