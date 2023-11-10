import React from "react";
import {Link} from "react-router-dom";

function navbar(props){
  const search = (event) => {
    event.preventDefault();
    const que = document.getElementById("search").value
    props.q(que);
  }
  
    return (
      <div>
        <nav className="navbar navbar-expand-lg" style={{backgroundColor:'#e3f2fd'}}>
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <Link onClick={props.unset} className="navbar-brand" to="/">News</Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item mx-2">
                  <Link onClick={props.unset} className="nav-link" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item mx-2">
                  <Link onClick={props.unset} className="nav-link" to="/business">Business</Link>
                </li>
                <li className="nav-item mx-2">
                  <Link onClick={props.unset} className="nav-link" to="/entertainment">Entertainment</Link>
                </li>
                <li className="nav-item mx-2">
                  <Link onClick={props.unset} className="nav-link" to="/health">Health</Link>
                </li>
                <li className="nav-item mx-2">
                  <Link onClick={props.unset} className="nav-link" to="/science">Science</Link>
                </li>
                <li className="nav-item mx-2">
                  <Link onClick={props.unset} className="nav-link" to="/sports">Sports</Link>
                </li>
                <li className="nav-item mx-2">
                  <Link onClick={props.unset} className="nav-link" to="/technology">Technology</Link>
                </li>
              </ul>
              <form className="d-flex">
                <input id="search" className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <Link to="/search"><button className="btn btn-outline-success" onClick={search}>Search</button></Link>
              </form>

            </div>
          </div>
        </nav>
      </div>
    )
}

export default navbar
