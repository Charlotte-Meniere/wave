import { Link, Redirect } from 'react-router-dom'
import bibliotheque from "../pages/bibliotheque";


const Navbar = () => {
    return (
        <div className="banner-blue-nav">
            <div>
                    <section className="topBlueNav">
                        <img className="whiteScriptLogo" src="../img/WhiteScriptLogo.png"/>
                        <article className="connexion">
                            <Link to="/" className="inscriptionBtn">Je m'inscris</Link>
                            <Link to="/"className="connexionBtn">Je me connecte</Link>
                        </article>
                    </section>
                        <div className="purple-nav">
                        <Link to="/">
                            <img className="logoNav" src="../img/LogoWawe.png"/>
                        </Link>
                            <article className="link-nav">
                                <Link to="/">Evenement</Link>
                                <Link to="/">Gallerie</Link>
                                <Link to="/bibliotheque">Bibliothéque</Link>
                            </article>
                        </div>
            </div>
        </div>
    )
}

export default Navbar