import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {BrowserRouter, Switch,Route} from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';
import FileUpload from "./components/FileUpload";
import FileDownload from "./components/FileDownload";
import axios from 'axios';
import home from './pages/home';
/* import { UserContext } from './UserContext'; */


const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Switch>
          <Route path='/' exact component={home} />
          {/* Mettre les routes vesr les pages ici  */}
        </Switch>
        <Footer/>
      </BrowserRouter>
        <FileUpload/>
        <FileDownload/>
    </div>
  )
}

export default App

