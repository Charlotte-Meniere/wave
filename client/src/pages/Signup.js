import React from 'react'

const Signup = () => {
    return (
        <div>
    <main>
    <div className="Allsectionconnexion">
  <div className="Allsectionconnexion1" >
    <div className="form-style-2">
        <h1 className="titreH1connexion">Inscription</h1>
        <form action="" method="post">
        <label for="field2"><span>Email </span><input type="text" className="input-field" name="field2" value="" /></label>
        <label for="field2"><span>mot de passe </span><input type="password" className="input-field" name="field2" value="" /></label>
        <label for="field2"><span>Retapez le mot de passe </span><input type="password" className="input-field" name="field2" value="" /></label>
        </form>
    <div>
            
     <label for="field2" id="uploadBtn"/><span>Choisir une photo </span>
     <input type="text" className="input"/>
     <div className="parent-div" id="parent-div">
        <button className="btn-uploadconnexion">parcourir</button>
        <input type="file" name="upfile" id="file" />
      </div>
     <div className="imagecontconnexion"> <div className="roundimageconnexion"><img src="images/avatar.jfif" id="photo"/></div></div>
     <div className="btn1inscrip"><button id="button1inscrip">connexion</button></div>
        
   </div>
  </div>
  </div>
  </div>
    </main>
    </div>
    )
}

export default Signup

