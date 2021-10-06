import { Link, Redirect } from 'react-router-dom'

const Footer = () => {
    return (
        <div className="footer">
            <article className="account-information">
                <p>Votre compte</p>
                <ul>
                    <li>Informations personnelles</li>
                    <li>Commandes</li>
                    <li>Avoirs</li>
                    <li>Adresses</li>
                    <li>Bons de réduction</li>
                </ul>
            </article>
            <div className="footerLogo">
            <img  src="../img/LogoWawe.png"/>
            </div>
            <article className="website-information">
                <p>Contact</p>
                <ul>
                    <li>XX XX XX XX XX</li>
                    <li>Wave@wave.fr</li>
                    <li>Wave at me</li>
                    <li>Wave_at_me</li>
                </ul>
            </article>
        </div>
    )
}
export default Footer