var express = require('express');
var path = require('path');
var router = express.Router();

/* GET home page. */
router.get('/hello', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Handles any requests that don't match the ones above
router.get('*', (req,res) =>{
  //res.sendFile(path.join(__dirname+'/client/build/index.html'));
  res.sendFile("../../public/index.html");
});

module.exports = router;
