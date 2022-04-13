import React from 'react'
import noImage from './img/noImage.jpg'

export default function NewsItem({ news }) {
  return (
    <div className="card col-7 mx-auto" style={{ width: '20rem', height: '30rem',"margin": "20px" }}>
    <img src={news.media ?  news.media : noImage} className="card-img-top" alt={news.title} style={{ height: '200px' }} />
        <div className="card-body">
            <h5 className="card-title">{news.title}</h5>
            <p className="card-text news-summary">{news.summary}</p>
            <a href={news.link} target="_blank" className="btn btn-primary">Know More</a>
        </div>
    </div>
  )
}
