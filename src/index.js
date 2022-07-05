import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from './pages/home/home';
import State from './pages/state/state';
import Village from './pages/Village/village';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
        <Route exact path="/states" element={<State/>}/>
          <Route exact path="/states/villages" element={<Village/>}/>
    </Routes>
  </Router>
);

