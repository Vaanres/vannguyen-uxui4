const { series, src, dest } = require('gulp')
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

function getBehanceJSON() {
  return request(apiBehance + keyBehance).pipe(
    fs.createWriteStream(jsonFilePath)
  )
}

function convertToWebPStatic() {
  return src('static/img/banner.jpg')
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

function downloadImage(url, destination) {
  return request(url)
    .pipe(
      sharp()
        .resize({ width: 1024 })
        .png()
    )
    .pipe(fs.createWriteStream(destination))
}

function getImages(cb) {
  const json = JSON.parse(fs.readFileSync(jsonFilePath))

  json.projects.forEach((item) => {
    // const folder = imgAssets + item.id

    if (!fs.existsSync(imgAssets)) {
      fs.mkdirSync(imgAssets)
    }

    const url = item.covers.original
    const destination = imgAssets + item.id + '.png'

    downloadImage(url, destination)
  })

  cb()
}

exports.convertToWebPStatic = convertToWebPStatic

exports.resize = series(
  convertToWebP,
  resizeImages,
  moveImages,
  cleanWorkResized
)
exports.default = series(getBehanceJSON, getImages)
