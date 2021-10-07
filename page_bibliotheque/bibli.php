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
                    <img src="assets/img/bibliotheque/pexels-tirachard-kumtanom-733853_2.jpg">
                    <a href="cours_dev.php"><span class="card-title" style="background-color: rgba(0,0,0,.5)">Dev</span></a>
                </div>
            </div>
        </div>
        <div class="col s12 m6 l4">
            <div class="card">
                <div class="card-image">
                    <img src="assets/img/bibliotheque/pexels-ivan-samkov-7213438.jpg">
                    <a href=""><span class="card-title" style="background-color: rgba(0,0,0,.5)">Animation</span></a>

                </div>
            </div>
        </div>
        <div class="col s12 m6 l4">
            <div class="card">
                <div class="card-image">
                    <img src="assets/img/bibliotheque/pexels-kaique-rocha-598917_2.jpg">
                    <a href=""><span class="card-title" style="background-color: rgba(0,0,0,.5)">Photo</span></a>
                </div>
            </div>
        </div>
        <div class="col s12 m6 l4">
            <div class="card">
                <div class="card-image">
                    <img src="assets/img/bibliotheque/pexels-pixabay-276452_2.jpg">
                    <a href=""><span class="card-title" style="background-color: rgba(0,0,0,.5)">Espace</span></a>
                </div>
            </div>
        </div>
        <div class="col s12 m6 l4">
            <div class="card">
                <div class="card-image">
                    <img src="assets/img/bibliotheque/pexels-thisisengineering-3862372_2.jpg">
                    <a href=""><span class="card-title" style="background-color: rgba(0,0,0,.5)">Template</span></a>
                </div>
            </div>
        </div>
        <div class="col s12 m6 l4">
            <div class="card">
                <div class="card-image">
                    <img src="assets/img/bibliotheque/pexels-tranmautritam-326502_2.jpg">
                    <a href=""><span class="card-title" style="background-color: rgba(0,0,0,.5)">Design</span></a>
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