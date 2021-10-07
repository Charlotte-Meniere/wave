import React from 'react';
import { Link, Redirect } from 'react-router-dom'

export const Header = () => {
    return (
        <div className="banner-blue-nav">
            <div>
                <section className="topBlueNav">
                    <img className="whiteScriptLogo" src="/images/WhiteScriptLogo.png" />
                    <article className="connexion">
                        <Link to="/inscription" className="inscriptionBtn">Je m&apos;inscris</Link>
                        <Link to="/connexion" className="connexionBtn">Je me connecte</Link>
                    </article>
                </section>
                <div className="purple-nav">
                    <img className="logoNav" src="/images/LogoWawe.png" />
                    <article className="link-nav">
                        <Link to="/">Evenement</Link>
                        <Link to="/">Gallerie</Link>
                        <Link to="/">Bibliothéque</Link>
                        <Link to="/forum">Forum</Link>
                    </article>
                </div>
            </div>
        </div>
    )
}

export const Footer = () => {
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
            <img  src="/images/LogoWawe.png"/>
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