import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {BrowserRouter, Switch,Route} from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';
import FileUpload from "./components/FileUpload";
import FileDownload from "./components/FileDownload";
import axios from 'axios';
import home from './pages/home';
import Event from './pages/Event';
import Login from './pages/Login';
import Signup from './pages/Signup';
import bibliotheque from './pages/bibliotheque';
import './assets/scss/style.scss';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Switch>
          <Route path='/' exact component={home} />
          <Route path='/Event' exact component={Event} />
          <Route path='/Login' exact component={Login} />
          <Route path='/Signup' exact component={Signup} />
          <Route path='/' exact component={home} />
          <Route path='/bibliotheque' exact component={bibliotheque} />

          {/* Mettre les routes vesr les pages ici  */}
        </Switch>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App

