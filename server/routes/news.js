const express = require('express')
const request = require('superagent')
const dotenv = require('dotenv')
dotenv.config()
const router = express.Router()
const apiKey = process.env.apiKey
router.get('/', (req, res) => {
  return request
    .get(`https://newsapi.org/v2/top-headlines?country=nz&apiKey=${apiKey}`)
    .set('User-Agent', 'userAgent')
    .then((response) => res.json(response.body))
    .catch((err) => console.log(err))
})

module.exports = router
