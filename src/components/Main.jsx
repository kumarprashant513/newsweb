import React from 'react'
import { useEffect, useState } from 'react';

function Main() {
    const [data, setData] =useState(null);
  let url = "https://newsapi.org/v2/everything?q=apple&from=2024-05-18&to=2024-05-18&sortBy=technology&apiKey=113163a737cc48719ec34ff101ef5cf0";
  useEffect(() => {
    fetch(url)
    .then(response=>response.json())
    .then(json=>setData(json))
    .catch(error=>console.log(error))
  }, []);
  console.log(data);
  return(
    <div className='main'>
       {data ? (
        <div className="row">
          {data.articles.map((news)=>(
            <div className="col">
              <img className="myimg" src={news.urlToImage} alt=""/>
              <h2 title={news.title} id='api-text'>{news.title}</h2>
            </div>
          ))}
        </div>
        ) : (
          "Loading..."
          )}
    </div>
  )
}

export default Main
