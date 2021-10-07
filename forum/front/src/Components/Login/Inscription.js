import React from 'react';
import './Inscription.css';

function Inscription() {
  //let bt = () => { return btn('mytest') };
  function imgSelect(event){
    const img = document.querySelector('#photo');
    const chosenFile = event.target.files[0];
    if (chosenFile) {
        const reader = new FileReader();
        reader.addEventListener('load', function(){
            img.setAttribute('src', reader.result);
        });
        reader.readAsDataURL(chosenFile);
    }
  }
  console.log("online");
  return (
    <div className="Allsectionconnexion">
    <div className="Allsectionconnexion1">
      <div className="form-style-2">
        <h1 className="titreH1connexion">Inscription</h1>
        <form action="" method="post">
          <label htmlFor="email"><span>Email </span><input type="text" className="input-field" name="email" /></label>
          <label htmlFor="password"><span>Mot de passe </span><input type="password" className="input-field" name="password"/></label>
          <label htmlFor="password-match"><span>Retapez le mot de passe </span><input type="password" className="input-field"name="password-match" /></label>
          <div>
            <label htmlFor="field2" id="uploadBtn"><span>Choisir une photo </span>
              <input type="file" name="upfile" id="file" onChange={imgSelect}/>
            </label>
            <div className="imagecontconnexion">
              <div className="roundimageconnexion"><img src="/images/avatar.jfif" id="photo" /></div>
            </div>
            <div className="btn1inscrip"><button id="button1inscrip">connexion</button></div>
          </div>
        </form>
      </div>
    </div>
  </div>
  );
}

export default Inscription;
