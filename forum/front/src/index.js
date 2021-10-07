import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Routes/App';
import ChatRoute from './Components/Chat/ChatRoute';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

ReactDOM.render(
  <Router>
      <div>
        <nav className="mainNav">
            <div className="navLink">
              <Link to="/">Home</Link>
            </div>
            <div className="navLink">
              <Link to="/about">About</Link>
            </div>
            <div className="navLink">
              <Link to="/chat">Chat</Link>
            </div>
        </nav>
        <Switch>
          <Route path="/chat">
            <ChatRoute />
          </Route>
          <Route path="/">
            <App />
          </Route>
        </Switch>
      </div>
    </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
