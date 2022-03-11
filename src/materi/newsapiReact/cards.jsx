import React from 'react';

export default function Card({objList}) {
  if(objList.length === 0) {
    return <h1>No Result</h1>
  } else {
    return (
      <div className='cards_container'>
      {objList.map(
        (obj, i) =>
        <div className="card" key={i}>
        <img src={obj.urlToImage} className="card-img-top" alt='...' />
        <div className="card-body">
        <a href={obj.url}><h5 className="card-title">{obj.title}</h5></a>
        <p className="card-text">{obj.description}</p>
        <p className="card-text"><small className="text-muted">{obj.publishedAt}</small></p>
        <p className="card-text"><small className="text-muted">{obj.source.name}, {obj.author}</small></p>
        </div>
        </div>
      )}
      </div>
    )
  }
}
