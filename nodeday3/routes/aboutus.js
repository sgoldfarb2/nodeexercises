let express = require('express')
let router = express.Router()

router.get('/about', (req, res) => {
  res.send('hello!')
})

module.exports = router
