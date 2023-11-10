import './App.css';
import Navbar from './components/navbar';
import News from './components/news';
import { useState } from 'react';
import React from 'react'
import{
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
export default function App(){
  const [query,setQuery]=useState()
  const que=(text)=>{
    setQuery(text);
  }
  const unset=()=>{
    setQuery("")
  }
    return (
      <div>
        <Router>
        <Navbar q={que} unset={unset}/>
          <Routes>

            <Route exact path="/" element={<News q={query} key="g" pageSize={21} category="general" country="in"/>}/>
            <Route exact path="/search" element={<News q={query} key={query} pageSize={21} category="general" country="in"/>}/>
            <Route exact path="/news-app" element={<News q={query} key="g" pageSize={21} category="general" country="in"/>}/>
            <Route exact path="/business" element={<News q={query} key="b" pageSize={21} category="business" country="in"/>}/>
            <Route exact path="/entertainment" element={<News q={query} key="e" pageSize={21} category="entertainment" country="in"/>}/>
            <Route exact path="/health" element={<News q={query} key ="h" pageSize={21} category="health" country="in"/>}/>
            <Route exact path="/science" element={<News q={query} key="sc" pageSize={21} category="science" country="in"/>}/>
            <Route exact path="/sports" element={<News q={query} key="sp" pageSize={21} category="sports" country="in"/>}/>
            <Route exact path="/technology" element={<News q={query} key="t" pageSize={21} category="technology" country="in"/>}/>
          </Routes>
        </Router>

      </div>
    )
}