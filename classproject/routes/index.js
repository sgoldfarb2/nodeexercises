let express = require('express')
let router = express.Router()
let dataFile = require('../data/data.json')


router.get('/', (req, res) => {
  let pageSpeakers = dataFile.speakers
  let pagePhotos = []
  pageSpeakers.forEach((item) => {
    pagePhotos = pagePhotos.concat(item.artwork)
  })



  res.render('index', {
    pageTitle: "Home",
    pageID: 'home',
    artwork: pagePhotos,
    speakers: pageSpeakers
  })

})

module.exports = router
