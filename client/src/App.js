import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import home from './pages/home';
import bibliotheque from './pages/bibliotheque';
import './assets/scss/style.scss';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
            <Route path='/' exact component={home} />
            <Route path='/bibliotheque' exact component={bibliotheque} />
          {/* Mettre les routes vesr les pages ici  */}
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App

