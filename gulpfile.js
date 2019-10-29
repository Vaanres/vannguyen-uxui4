const { series, parallel, src, dest } = require('gulp')
const request = require('request')
const fs = require('fs-extra')
const sharp = require('sharp')
const del = require('del')
const imagemin = require('gulp-imagemin')
const webp = require('gulp-webp')

const apiBehance = 'https://www.behance.net/v2/users/Vaanres/projects?api_key='
const keyBehance = 'A3XrFvC6jnX6dLGSipermgOApEKZ6AU6'
const jsonFilePath = 'static/data/projects.json'
// const imgAssets = 'assets/img/work/'
const imgAssets = 'static/img/work/'

function convertToWebPStatic() {
  return src('static/img/banners/*')
    .pipe(
      webp({
        quality: 80
      })
    )
    .pipe(dest('static/img/'))
}

function convertToWebP() {
  return src('static/img/work/*')
    .pipe(
      webp({
        quality: 80
      })
    )
    .pipe(dest('static/img/work_resized/'))
}

function resizeImages() {
  return src('static/img/work/*')
    .pipe(imagemin([imagemin.optipng({ optimizationLevel: 5 })]))
    .pipe(dest('static/img/work_resized/'))
}

function cleanWorkResized(cb) {
  return del('static/img/work_resized/', cb)
}

function moveImages() {
  return src('static/img/work_resized/*').pipe(dest('static/img/work/'))
}

function getBehanceJSON() {
  return request(apiBehance + keyBehance).pipe(
    fs.createWriteStream(jsonFilePath)
  )
}

function downloadImage(url, destination) {
  const stream = request(url)
    .pipe(
      sharp()
        .resize({ width: 1024 })
        .png()
    )
    .pipe(fs.createWriteStream(destination))

  return stream
}

function getImages(done) {
  const data = JSON.parse(fs.readFileSync(jsonFilePath)).projects

  data.forEach((item) => {
    if (!fs.existsSync(imgAssets)) {
      fs.mkdirSync(imgAssets)
    }

    const url = item.covers.original
    const destination = imgAssets + item.id + '.png'

    downloadImage(url, destination)
  })

  done()
}

exports.convertToWebPStatic = convertToWebPStatic

exports.resize = series(
  parallel(resizeImages, convertToWebP),
  moveImages,
  cleanWorkResized
)

exports.default = series(getBehanceJSON, getImages)
