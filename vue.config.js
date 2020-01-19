module.exports = {
  productionSourceMap: false,
  pwa: {
    name: 'GDG Web App',
    workboxPluginMode: 'InjectManifest',
    themeColor: '#4A90E2',
    workboxOptions: {
      swSrc: './src/sw.js',
      swDest: 'service-worker.js',
    },
  },

  configureWebpack: {
    devtool: 'source-map'
  },

  publicPath: process.env.NODE_ENV === 'production'
    ? '/gdg-shanghai-homepage/'
    : '/'
}
