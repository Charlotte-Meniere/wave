import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Routes/App';
import ChatRoute from './Routes/ChatRoute';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Inscription from './Components/Login/Inscription';
import Connexion from './Components/Login/Connexion';
import {Footer,Header} from './Components/Navbar';
import Home from './Routes/Home';
import './assets/scss/style.scss';

ReactDOM.render(
  <Router>
    <div>
      <Header />
      <Switch>
        <Route path="/forum">
          <ChatRoute />
        </Route>
        <Route path="/inscription">
          <Inscription />
        </Route>
        <Route path="/connexion">
          <Connexion />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
      </div>
    </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
