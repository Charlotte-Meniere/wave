var express = require('express');
var app = express();
var multer = require('multer');
var cors = require('cors');
var fs = require('fs');

app.use(cors()); 

var linkFile = 'public/uploadFile';

var files = fs.readdirSync(linkFile);

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, linkFile)
    },
    filename: function (req, file, cb) {
        cb(null, /*Date.now() + '-' +*/file.originalname )
    }
});

var upload = multer({ storage: storage }).single('file');

app.post('/upload',function(req, res) {

    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err)
        } else if (err) {
            return res.status(500).json(err)
        }
        return res.status(200).send(req.file)
    })
});

app.get('/download', function (req, res) {
    return res.status(200).send(files);
});

app.listen(8000, function() {
    console.log('App running on port 8000');
});
