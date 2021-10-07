import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {BrowserRouter, Switch,Route} from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';
import home from './pages/home';
import Event from './pages/Event';
import './assets/scss/style.scss';


const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <p> C'est l'aap.js</p>
        <Switch>
          <Route path='/' exact component={home} />
          <Route path='/Event' exact component={Event} />

          {/* Mettre les routes vesr les pages ici  */}
        </Switch>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App

