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
                <img src="img/ClothingWave.png" alt="Vague" />
                </div>
            </div>
            <div>
                <img className="imageTop" src="img/Oui.jpg" alt="Main sur dégradé" />
            </div>
        </section>
        <section className=" homePurpleBackground">
            <div>
                <p className="eventTitle">Les derniers cours</p>
            </div>
            <div class="carousel">
                <a class="carousel-item" href="#one!"><img src="https://lorempixel.com/250/250/nature/1"/></a>
                <a class="carousel-item" href="#two!"><img src="https://lorempixel.com/250/250/nature/2"/></a>
                <a class="carousel-item" href="#three!"><img src="https://lorempixel.com/250/250/nature/3"/></a>
                <a class="carousel-item" href="#four!"><img src="https://lorempixel.com/250/250/nature/4"/></a>
                <a class="carousel-item" href="#five!"><img src="https://lorempixel.com/250/250/nature/5"/></a>
            </div>
        </section>
        <section className=" homeBlueBackground">
            <div>
                <p className="eventTitle">Les Events</p>
            </div>
            <article className="encart-blancs">
                <div className="encart">
                <img src="img/event1.jpg" />
                    <p className="catchphrase">Conference LSF d’intégration</p>
                    <p>Le 09/04</p>
                    <a href="/"> Voir Plus</a>
                </div>

                <div className="encart">
                <img src="img/event2.jpg" />
                    <p className="catchphrase">Conference LSF d’intégration</p>
                    <p>Le 09/04</p>
                    <a href="/"> Voir Plus</a>
                </div>
                
                <div className="encart">
                <img src="img/event3.jpg" />
                    <p className="catchphrase">Conference LSF d’intégration</p>
                    <p>Le 09/04</p>
                    <a href="/"> Voir Plus</a>
                </div>



            </article>
                <article className="bottomEvent">
                    <div>
                        <img src="img/ClothingWave1.png" alt="Vague" />
                    </div>
                    <div>
                        <a href="toutEvent">Tout les Events</a>
                    </div>
                    <div>
                        <img src="img/ClothingWave.png" alt="Vague" />
                    </div>
                </article>
        </section>
    </main>
    </div>
    )
}

export default Home

