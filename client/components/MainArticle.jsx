import React from 'react';

function MainArticle({ headline }) {
  console.log(headline)

  return (
    <>
      <h4>CHANNEL TWO NEWS</h4>
      <h3>~updated hourly~</h3>
      <h1>TOP ARTICLE THIS HOUR:</h1>
      {headline && (
        <div>
          <h2>{headline.title}</h2>
          <p>{headline.publishedAt}</p>
          <p>{headline.author}</p>
          <a href={headline.url}>Read more here</a> <br></br>
          <img src={headline.urlToImage} />
          <p>{headline.content}</p>
          <br></br>
        </div>
      )}
    </>
  )
}

export default MainArticle
