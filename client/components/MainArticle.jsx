import React, { useState, useEffect } from 'react'
import { get } from 'superagent'
import { getNews } from '../apiClient'

function MainArticle({ headline }) {
  console.log(headline)

  return (
    <>
      <h1>Today's Top Article</h1>
      {headline && (
        <div>
          <p>{headline.title}</p>
          <p>{headline.author}</p>
          <img src={headline.urlToImage} />
          <p>{headline.content}</p>
          <p>{headline.url}</p>
          <p>{headline.publishedAt}</p>
        </div>
      )}
    </>
  )
}

export default MainArticle
