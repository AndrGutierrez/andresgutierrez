// next-sitemap.config.js
module.exports = {
  siteUrl: 'https://andresgutierrez.me',
  generateRobotsTxt: true,
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  outDir: 'out',
  exclude: [
    '/404',
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api', '/_next', '/404'],
      },
    ],
  },
  // Additional configuration for dynamic routes
  transform: async (config, path) => {
    // Custom priority and changefreq for specific routes
    let priority = config.priority;
    let changefreq = config.changefreq;

    if (path === '/') {
      priority = 1.0;
      changefreq = 'montly';
    } else if (path === '/blog') {
      priority = 0.9;
      changefreq = 'monthly';
    } else if (path.startsWith('/blog/')) {
      priority = 0.8;
      changefreq = 'monthly';
    }

    return {
      loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },
};
