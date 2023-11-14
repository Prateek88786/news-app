import React from 'react'
import NewsItem from './newsItem' 
import Spinner from './spinner'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { useEffect } from 'react'
import { useCallback } from 'react'
export default function News(props){
  const [article,setArticle]=useState([])
  const [loading,setLoading]=useState(false)
  const [page,setPage]=useState(1)
  const [totalArticles,setTotalArticles]=useState(0)
const update = useCallback(async () => {
  let url=""
    if(props.q==null || props.q===""){
      url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=2bc62b0048b14ccb8375015fe1550b34&page=${page}&pageSize=${props.pageSize}`;
    }
    else{
      url = `https://newsapi.org/v2/everything?q=${props.q}&apiKey=2bc62b0048b14ccb8375015fe1550b34&page=${page}&pageSize=${props.pageSize}`;

    }
    
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticle(parsedData.articles);
    setTotalArticles(parsedData.totalResults);
    setLoading(false);
  }, [props.country, props.category, page, props.pageSize,props.q]);

useEffect(() => {
  const fetchData = async () => {
    await update();
  };

  fetchData();
}, [update]);

  const prev=()=>{
    setPage(page-1)
    update()
  } 
  const next=()=>{
    setPage(page+1)
    update()
  }
  let imageUrl="https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    return (
      <div className='container' id="newsbox">
        <h1 id="topheadlines" className="text-center">Top headlines</h1>
        {loading && <Spinner/>}
          <div className='row'>
          {!loading && article.map((element)=>{
              return(
                <div className='col-md-4' key={element.url}>
                  <NewsItem key={element.url} title={element.title?element.title.slice(0,42):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage?element.urlToImage:imageUrl} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
              </div>
              )
          })}
          </div>
          <div className="container d-flex justify-content-between">
            <button className="btn btn-dark" disabled={page<=1} onClick={prev}>&larr;Previous</button>
            <button className="btn btn-dark" disabled={page>=Math.ceil(totalArticles/props.pageSize)} onClick={next}>Next&rarr;</button>
          </div>
      </div>
    )
}
News.defaultProps={
  country:'in',
  pageSize:9,
  category:"general"
}
News.propTypes={
  country:PropTypes.string,
  category:PropTypes.string,
  pageSize:PropTypes.number
}

