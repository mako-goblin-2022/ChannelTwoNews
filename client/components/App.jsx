import React, { useState, useEffect } from 'react'
import { get } from 'superagent'
import { getWelcome, getNews } from '../apiClient'

function App() {
  const [welcomeStatement, setWelcomeStatement] = useState('')
  const [news, setNews] = useState(null)
  useEffect(() => {
    getWelcome()
      .then((res) => {
        setWelcomeStatement(res.statement)
      })
      .catch((err) => {
        console.error(err.message)
      })
  })
  getNews()
    .then((res) => {
      setNews(res)
      console.log(res)
      return null
    })
    .catch((err) => {
      console.error(err.message)
    })

  return (
    <>
      <h1>{welcomeStatement}</h1>
      <div>
        {pokemon && (
          <div>
            <h2>{articles.title}</h2>
            <p>Id: {pokemon.id}</p>
            <p>Base experience: {pokemon.base_experience}</p>
            <p>Height: {pokemon.height}</p>
          </div>
        )}
      </div>
    </>
  )
}

export default App
