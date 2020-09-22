module.exports = {
  ci: {
    collect: {
      url: [
        '/',
        '/404.html',
        '/resume/',
        '/releases/',
        '/tools/',
        '/portfolio/',
        '/blog/',
      ],
      staticDistDir: './dist',
      numberOfRuns: 5,
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};