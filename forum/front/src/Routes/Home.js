import React from 'react'

const Home = () => {
    return (
        <div>
            <main>
                <section className=" homeDarkBackground">
                    <div>
                        <p className="catchphrase">N’hesitez pas a nous faire coucou !</p>
                        <p>Wawe est un réseau social spécialisé dans l’échange autour de la Langue des signes</p>
                        <div className="wave">
                            <img src="images/ClothingWave.png" alt="Vague" />
                        </div>
                    </div>
                    <div>
                        <img className="imageTop" src="images/Oui.jpg" alt="Main sur dégradé" />
                    </div>
                </section>
                <section className=" homePurpleBackground">
                    <div>
                        <p>Les derniers cours</p>
                    </div>
                </section>
                <section className=" homeBlueBackground">
                    <div>
                        <p className="eventTitle">Les Events</p>
                    </div>
                    <article className="encart-blancs">
                        <div className="encart">
                            <img src="images/event1.jpg" />
                            <p className="catchphrase">Conference LSF d’intégration</p>
                            <p>Le 09/04</p>
                            <a href="/"> Voir Plus</a>
                        </div>

                        <div className="encart">
                            <img src="images/event2.jpg" />
                            <p className="catchphrase">Conference LSF d’intégration</p>
                            <p>Le 09/04</p>
                            <a href="/"> Voir Plus</a>
                        </div>

                        <div className="encart">
                            <img src="images/event3.jpg" />
                            <p className="catchphrase">Conference LSF d’intégration</p>
                            <p>Le 09/04</p>
                            <a href="/"> Voir Plus</a>
                        </div>
                    </article>
                    <article className="bottomEvent">
                        <div>
                            <img src="images/ClothingWave1.png" alt="Vague" />
                        </div>
                        <div>
                            <a href="toutEvent">Tout les Events</a>
                        </div>
                        <div>
                            <img src="images/ClothingWave.png" alt="Vague" />
                        </div>
                    </article>
                </section>
            </main>
        </div>
    )
}

export default Home

