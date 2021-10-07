import React from 'react'
const Login = () => {
    return (
        <div>
    <main>
    <div className="Allsectionconnexion">
  <div className="Allsectionconnexion1" >
    <div className="form-style-2">
        <h1 className="titreh1connexion">Connexion</h1>
        <form action="" method="post">
        <label for="field2"><span>Email </span><input type="text" className="input-field" name="field2" value="" /></label>
        <label for="field2"><span>mot de passe </span><input type="password" className="input-field" name="field2" value="" /></label>
        </form>
        <div className="btn11conxion"><button id="button1connexion">connexion</button></div>
        <div className="linkconexion"><a href="#"><p className="par1connexion">mot de passe oublié?</p></a></div>
  </div>
  </div>
 </div>
    </main>
    </div>
    )
}

export default Login

