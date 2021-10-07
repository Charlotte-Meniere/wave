import { Link, Redirect } from 'react-router-dom'


const Navbar = () => {
    return (
        <div className="banner-blue-nav">
            <div>
                    <section className="topBlueNav">
                        <img className="whiteScriptLogo" src="../img/WhiteScriptLogo.png"/>
                        <article className="connexion">
                            <Link to="/" className="inscriptionBtn">Je m'inscris</Link>
                            <Link to="/Login"className="connexionBtn">Je me connecte</Link>
                        </article>
                    </section>
                        <div className="purple-nav">
                            <img className="logoNav" src="../img/LogoWawe.png"/>
                            <article className="link-nav">
                                <Link to="/Event">Evenement</Link>
                                <Link to="/">Gallerie</Link>
                                <Link to="/">Bibliothéque</Link>
                            </article>
                        </div>
            </div>
        </div>
    )
}

export default Navbar