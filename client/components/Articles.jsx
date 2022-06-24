import React from "react";
import Article from './Article'

function Articles({ data }) {
  return (
    <div>
    {data?.map((article, i) =>
      { return <Article key={i} data={article} /> }
      )}
    </div>
  )
}

export default Articles;