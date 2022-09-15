const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  lintOnSave: false,

  devServer:
    process.env.NODE_ENV == 'development'
      ? {
          port: 8101,
          disableHostCheck: true,
          proxy: {
            '/proxy': {
              target: process.env.VUE_APP_PROXY,
              changeOrigin: true,
              secure: true,
              pathRewrite: {
                '/proxy': '',
              },
            },
          },
          headers: {
            'Access-Control-Allow-Origin': '*',
          }, //
        }
      : undefined,
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, './src/style/variables.less')],
    },
  },
  pwa: {
    iconPaths: {
      favicon32: 'favicon.ico',
      favicon16: 'favicon.ico',
      appleTouchIcon: 'favicon.ico',
      maskIcon: 'favicon.ico',
      msTileImage: 'favicon.ico',
    },
  },

  productionSourceMap: false,

  chainWebpack(config) {
    config.module.rule('svg').exclude.add(resolve('src/assets/svgs')).end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/assets/svgs'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]',
      })
      .end()
  },
}
