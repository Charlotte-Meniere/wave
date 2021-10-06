import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {BrowserRouter, Switch,Route} from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';
/* import { UserContext } from './UserContext'; */


const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      {/* mettre la Navbar ici */}
        <p> C'est l'aap.js</p>
        <Switch>
          {/* Mettre les routes vesr les pages ici 
          ex:  <Route path='/Home' component={Home}/> */}
        </Switch>
        {/* mettre le footer ici */}
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App

