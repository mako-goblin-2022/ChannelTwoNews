import React, { useState, useEffect } from 'react'
// import { get } from 'superagent'
import { getWelcome, getNews } from '../apiClient'
import Articles from './Articles'

function App() {
  const [welcomeStatement, setWelcomeStatement] = useState('')
  const [news, setNews] = useState([])
  useEffect(() => {
    getWelcome()
      .then((res) => {
        setWelcomeStatement(res.statement)
      })
      .catch((err) => {
        console.error(err.message)
      })
    getNews()
      .then((res) => {
        setNews(res.articles)
      })
      .catch((err) => {
        console.error(err.message)
      })
  }, [])
  console.log(news)
  return (
    <>
      <h1>{welcomeStatement}</h1>
      <div>
        {news && (
         <Articles data={news}/>
        )}
      </div>
    </>
  )
}

export default App
