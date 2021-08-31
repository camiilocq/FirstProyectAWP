import logo from './logo.svg';
import './App.css';
import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';

import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import { breakStatement } from '@babel/types';

function App() {
  return (
    <BrowserRouter>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/home" component={Home}/>
    </BrowserRouter>
  );
}

export default App;
