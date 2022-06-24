import React from "react";
import Article from './Article'

function Articles({ data }) {
const articleFeed = data.slice(1) 
  return (
    <div>
    {articleFeed?.map((article, i) =>
      { return <Article key={i} data={article} /> }
      )}
    </div>
  )
}

export default Articles;