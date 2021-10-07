<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <!-- Compiled and minified CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

    <!-- Compiled and minified JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    <title>Document</title>
</head>
<body>
<header>
    <?php
    include("./includes/partials/header.php");
    ?>

</header>

<div class="section_search">
    <nav>
        <div class="nav-wrapper brown lighten-5">
            <form>
                <div class="input-field">
                    <input id="search" type="search" value="" onchange="openPage()" required>
                    <label class="label-icon" for="search"><i class="material-icons">search</i></label>
                </div>
            </form>
        </div>
    </nav>
</div>

<div class="section">
    <div class="row">
        <div class="col s12 m6 l4">
            <div class="card">
                <div class="card-image">
                    <img src="assets/img/bibliotheque/dev/html.jpg">
                    <a href="html_cours.php"><span class="card-title" style="background-color: rgba(0,0,0,.5)">HTML</span></a>
                </div>
            </div>
        </div>
        <div class="col s12 m6 l4">
            <div class="card">
                <div class="card-image">
                    <img src="assets/img/bibliotheque/dev/css.jpg">
                    <a href=""><span class="card-title" style="background-color: rgba(0,0,0,.5)">CSS</span></a>

                </div>
            </div>
        </div>
        <div class="col s12 m6 l4">
            <div class="card">
                <div class="card-image">
                    <img src="assets/img/bibliotheque/dev/JavaScript_logo_2.svg.jpg">
                    <a href=""><span class="card-title" style="background-color: rgba(0,0,0,.5)">JS</span></a>
                </div>
            </div>
        </div>
        <div class="col s12 m6 l4">
            <div class="card">
                <div class="card-image">
                    <img src="assets/img/bibliotheque/dev/nodo_js.jpg">
                    <a href=""><span class="card-title" style="background-color: rgba(0,0,0,.5)">NODO JS</span></a>
                </div>
            </div>
        </div>
        <div class="col s12 m6 l4">
            <div class="card">
                <div class="card-image">
                    <img src="assets/img/bibliotheque/dev/logo-react-js.jpg">
                    <a href=""><span class="card-title" style="background-color: rgba(0,0,0,.5)">React</span></a>
                </div>
            </div>
        </div>
        <div class="col s12 m6 l4">
            <div class="card">
                <div class="card-image">
                    <img src="assets/img/bibliotheque/dev/Logo-Vuejs.jpg">
                    <a href=""><span class="card-title" style="background-color: rgba(0,0,0,.5)">Vue.js</span></a>
                </div>
            </div>
        </div>
        <div class="col s12 m6 l4">
            <div class="card">
                <div class="card-image">
                    <img src="assets/img/bibliotheque/dev/php.jpg">
                    <a href=""><span class="card-title" style="background-color: rgba(0,0,0,.5)">PHP</span></a>
                </div>
            </div>
        </div>
        <div class="col s12 m6 l4">
            <div class="card">
                <div class="card-image">
                    <img src="assets/img/bibliotheque/dev/sass.jpg">
                    <a href=""><span class="card-title" style="background-color: rgba(0,0,0,.5)">SASS</span></a>
                </div>
            </div>
        </div>
        <div class="col s12 m6 l4">
            <div class="card">
                <div class="card-image">
                    <img src="assets/img/bibliotheque/dev/mongodb-logo.jpg">
                    <a href=""><span class="card-title" style="background-color: rgba(0,0,0,.5)">Mongo DB</span></a>
                </div>
            </div>
        </div>
    </div>
</div>

<footer>
</footer>

<script src="./js/nav_slide.js"></script>
<script src="./js/search_bar.js"></script>
</body>
</html>