import React,{useState, useEffect} from 'react';
import NewsItem  from './NewsItem'
import noImage from './img/noImage.jpg'
export default function Business() {
  const [newsdata, setNewsData]= useState([])
  const [loading, setLoading] = useState(true)
  let page = 1
  
  useEffect(()=>{
    loadNews()
  },[])

  const loadNews = async () =>{
    let url = `https://api.newscatcherapi.com/v2/latest_headlines?countries=IN&topic=business&lang=en&page_size=20&page=${page}`
    let data = await fetch(url, {
      mode: 'cors',
      headers: {
        'x-api-key': 'kspC9j74MPqWr9wBLGYteOyInpXQnYFh5F5l7meSQZQ'
      }
    })
    let result = await data.json()
    setNewsData(result.articles)
    console.log(result.articles)
    setLoading(false)
  }

  const loadMore = async () => {
    setLoading(true)
    page++
    let url = `https://api.newscatcherapi.com/v2/latest_headlines?countries=IN&topic=business&lang=en&page_size=20&page=${page}`
    let data = await fetch(url, {
      mode: 'cors',
      headers: {
        'x-api-key': 'kspC9j74MPqWr9wBLGYteOyInpXQnYFh5F5l7meSQZQ'
      }
    })
    let result = await data.json()
    setNewsData([...newsdata, ...result.articles])
    setLoading(false)
  }

  return <div className="container-fluid" style={{"marginTop":"100px"}}>
    <div className="row">
    { newsdata && newsdata.map(news => <NewsItem news={news} key={news._id} />)}
    { loading ? <button className="btn btn-warning btn-block m-4" disabled>Loading news...</button> : <button className="btn btn-info btn-block m-4" onClick={loadMore}>More</button> }
    </div>
  </div>;
}
