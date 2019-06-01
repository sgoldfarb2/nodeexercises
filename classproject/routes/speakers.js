let express = require('express')
let router = express.Router()

router.get('/speakers', (req, res) => {
  res.render('speakers')
})

module.exports = router
