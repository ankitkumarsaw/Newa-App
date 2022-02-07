import React,{useState, useEffect} from 'react';
import noImage from './img/noImage.jpg'
export default function Business() {
  const[newsdata, setNewsData]= useState([])
  useEffect(()=>{
    news()
  },[])
const news = async ()=>{
  let url = ' https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=9ba69ef462424bd384c72c1085d6a13e'
  let data = await fetch(url)
  let parseData = await data.json()
  let pD = parseData.articles;
  setNewsData(pD)
}

  return <div className="container" style={{"marginTop":"50px"}}>
    <div className="row align-items-start">
    { newsdata.map((e)=>{
      console.log(e)
return(
  <div className="card row" style={{"width": "20rem", "margin" : "5px", "height":"550px"}} key={e.url}>
  <img src={e.urlToImage?e.urlToImage : noImage} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{e.title?e.title :""}</h5>
    <p className="card-text">{e.description?e.description.slice(0, 88): ""}</p>
    <a href="#" className="btn btn-primary">Know More</a>
  </div>
</div>
)
    })
      
    }
    </div>
  </div>;
}
