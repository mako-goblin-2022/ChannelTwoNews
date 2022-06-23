const express = require('express')
const request = require('superagent')
const router = express.Router()
const apikey = '2bf36f72f3df4b84a2bbf66178d350b2'
router.get('/', (req, res) => {
  console.log('hit the route')
  return request
    .get(`https://newsapi.org/v2/top-headlines?country=nz&apiKey=${apikey}`)
    .set('User-Agent', 'userAgent')
    .then((response) => res.json(response.body))
  // .catch((err) => console.log(err))
})

module.exports = router
