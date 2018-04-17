const argv = require('minimist')(process.argv.slice(2)),
  webconfig = require('../../web.config'),
  path = require('path'),
  fs = require('fs')

const pageName = argv.n
if (!argv.n) {
  console.error(
    'please input the page name,for example:" npm run createpage -- --n="your page name" "'
  )
} else {
  init()
}

function init() {
  let rootpath = webconfig.ROOT_PATH
  //   let pagePath = path.join(rootpath ,'src/Pages')
  let pageDir = path.join(rootpath, 'src/Pages', pageName)
  let jsFileName = path.join(pageDir, 'index.js')
  let templateFilePath = path.join(
    rootpath,
    'build/generate/template/_index.js'
  )

  //the dir is exist
  if (fs.existsSync(path.resolve(pageDir))) {
    console.error('page dir already exist')
  } else {
    //create dir
    fs.mkdirSync(path.resolve(pageDir))
    // //copy the template file to dir
    fs.copyFileSync(templateFilePath, jsFileName)

    console.log('create page successed !')
  }
}
