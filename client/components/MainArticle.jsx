import React, { useState, useEffect } from 'react'
import { get } from 'superagent'
import { getNews } from '../apiClient'

function MainArticle({ headline }) {
  console.log(headline)

  return (
    <>
      <h1>Today's Top Article</h1>
      {headline && <p>{headline.title}</p>}
    </>
  )
}

export default MainArticle
