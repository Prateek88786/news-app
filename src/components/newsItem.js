import React from "react";

function newsItem(props){

    return (
      <div className="my-3">
        <div className="card" style={{width: "18rem"}}>
        <img src={props.imageUrl}className="card-img-top" alt="..."/>
        <div className="card-body">
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:"90%",zIndex:'1'}}>
          {props.source}</span>
            <h5 className="card-title">{props.title}...</h5>
            <p className="card-text">{props.description}...</p>
            <p className="card-text"><small className="text-danger">By {props.author?props.author:"unknown"} on {new Date(props.date).toUTCString()}</small></p>
            <a rel= "noreferrer" href={props.newsUrl} className="btn btn-dark btn-sm" target="_blank">Read more...</a>
        </div>
        </div>
      </div>
    )
}

export default newsItem
