import './App.css';
import Navbar from './components/navbar';
import News from './components/news';

import React from 'react'
import{
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
export default function App(){
    return (
      <div>
        <Router>
        <Navbar/>
          <Routes>
            <Route exact path="/" element={<News key="g" pageSize={9} category="general" country="in"/>}/>
            <Route exact path="/business" element={<News key="b" pageSize={9} category="business" country="in"/>}/>
            <Route exact path="/entertainment" element={<News key="e" pageSize={9} category="entertainment" country="in"/>}/>
            <Route exact path="/health" element={<News key ="h" pageSize={9} category="health" country="in"/>}/>
            <Route exact path="/science" element={<News key="sc" pageSize={9} category="science" country="in"/>}/>
            <Route exact path="/sports" element={<News key="sp" pageSize={9} category="sports" country="in"/>}/>
            <Route exact path="/technology" element={<News key="t" pageSize={9} category="technology" country="in"/>}/>
          </Routes>
        </Router>
      </div>
    )
}