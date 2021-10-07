import React from 'react';
import { Link } from 'react-router-dom';
import './Connexion.css';

function Connexion() {
  return (
    <div className="Allsectionconnexion">
      <div className="Allsectionconnexion1">
        <div className="form-style-2">
          <h1 className="titreh1connexion">Connexion</h1>
          <form action="" method="post">
            <label htmlFor="field2">
              <span>Email </span>
              <input type="text" className="input-field" name="field2" />
            </label>
            <label htmlFor="field2">
              <span>Mot de passe </span>
              <input type="password" className="input-field" name="field2" />
            </label>
          </form>
          <div className="btn11conxion">
            <button id="button1connexion">connexion</button>
          </div>
          <div className="linkconexion">
            <a href="#">
              <p className="par1connexion">mot de passe oublié?</p>
            </a>
          </div>
          <div className="linkconexion">
            <Link to="/inscription">Inscription</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Connexion;
