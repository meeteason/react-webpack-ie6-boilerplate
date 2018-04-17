const path = require('path')
const ROOT_PATH = path.resolve(__dirname, './')
const BUILD_PATH = path.resolve(ROOT_PATH, 'dist')
module.exports = {
  build: {
    assetsRoot: BUILD_PATH,
    assetsSubDirectory: 'static',
    assetsPublicPath: './'
  },
  dev: {
    assetsRoot: BUILD_PATH,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    devServer: {
      disableHostCheck: true,
      historyApiFallback: true,
      progress: true,
      outputPath: BUILD_PATH,
      host: '0.0.0.0',
      port: 3000
    }
  },
  ROOT_PATH: ROOT_PATH
}
