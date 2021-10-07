import React from 'react'
import FileUpload from "../components/FileUpload";
import FileDownload from "../components/FileDownload";

const bibliotheque = () => {
    function openPage(){
        var a = document.getElementById('search').value;

        if (a === "html"){
            window.open("cours_dev.php")
        }
        if (a === "dev"){
            window.open("cours_dev.php")
        }
    }
    return (
        <div>
            <div className="title">Bibliothéque</div>
            <div className="upload">
            <FileUpload/>
            <FileDownload/>
            </div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"/>
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
            <main>
                <div className="section_search">
                    <nav>
                        <div className="nav-wrapper brown lighten-5">
                            <form>
                                <div className="input-field">
                                    <input id="search" type="search" value="" onChange="openPage()" required/>
                                        <label className="label-icon" htmlFor="search"><i
                                            className="material-icons">search</i></label>
                                </div>
                            </form>
                        </div>
                    </nav>
                </div>

                <div className="section">
                    <div className="row">
                        <div className="col s12 m6 l4">
                            <div className="card">
                                <div className="card-image">
                                    <img src="img/bibliotheque/pexels-ivan-samkov-7213438.jpg"/>
                                    <a href=""><span className="card-title">Dev</span></a>
                                </div>
                            </div>
                        </div>
                        <div className="col s12 m6 l4">
                            <div className="card">
                                <div className="card-image">
                                    <img src="img/bibliotheque/pexels-kaique-rocha-598917_2.jpg"/>
                                    <a href=""><span className="card-title">Animation</span></a>
                                </div>
                            </div>
                        </div>
                        <div className="col s12 m6 l4">
                            <div className="card">
                                <div className="card-image">
                                    <img src="img/bibliotheque/pexels-pixabay-276452_2.jpg"/>
                                    <a href=""><span className="card-title">Photo</span></a>
                                </div>
                            </div>
                        </div>
                        <div className="col s12 m6 l4">
                            <div className="card">
                                <div className="card-image">
                                    <img src="img/bibliotheque/pexels-thisisengineering-3862372_2.jpg"/>
                                    <a href=""><span className="card-title">Espace</span></a>
                                </div>
                            </div>
                        </div>
                        <div className="col s12 m6 l4">
                            <div className="card">
                                <div className="card-image">
                                    <img src="img/bibliotheque/pexels-tirachard-kumtanom-733853_2.jpg"/>
                                    <a href=""><span className="card-title">Template</span></a>
                                </div>
                            </div>
                        </div>
                        <div className="col s12 m6 l4">
                            <div className="card">
                                <div className="card-image">
                                    <img src="img/bibliotheque/pexels-tranmautritam-326502_2.jpg"/>
                                    <a href=""><span className="card-title">Design</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default bibliotheque

