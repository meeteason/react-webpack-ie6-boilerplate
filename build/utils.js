const path = require('path'),
  glob = require('glob'),
  webconfig = require('../web.config'),
  fs = require('fs')

const getEntrys = () => {
  let indexFiles = glob.sync(getPageDir() + '/*/index.js')
  let entryList = {}
  indexFiles.forEach(entry => {
    let arrDirName = path.dirname(entry).split('/')
    let chunkName = arrDirName[arrDirName.length - 1]
    if (chunkName == 'Index') chunkName = 'index'
    let html = path.join(path.dirname(entry), 'index.html')
    if (!fs.existsSync(html)) html = getTemplateIndexHtml()
    html = entryList[chunkName] = {
      html: html,
      js: entry,
      chunk: chunkName
    }
  })
  //   console.log(entryList)
  return entryList
}
const getTemplateIndexHtml = () => {
  return path.resolve(path.join(webconfig.ROOT_PATH, 'src/Template/index.html'))
}
const getPageDir = () => {
  return path.resolve(path.join(webconfig.ROOT_PATH, 'src/Pages'))
}
const assetsPath = _path => {
  var assetsSubDirectory =
    process.env.NODE_ENV == 'production'
      ? webconfig.build.assetsSubDirectory
      : webconfig.dev.assetsSubDirectory
  return path.posix.join(assetsSubDirectory, _path)
}
// getEntrys()
module.exports = {
  getEntrys: getEntrys,
  assetsPath: assetsPath
}
