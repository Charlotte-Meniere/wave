var express = require('express');
const { check } = require('express-validator');
var router = express.Router();

var User = require('../models/User');
var Message = require('../models/Message');
var Category = require('../models/Category');
var dbconn = require('../db');

router.get('/', function(req, res, next) {
  res.render('api', { title: 'Api' });
});

router.get('/messages', async (req, res, next) => {
  if(!req.query.cat){res.status(400).json({msg:"Missing cat parameter",err: 'Missing cat parameter'});return}
  const category = await Category.findOne({title:req.query.cat});
  if(!category){res.status(404).json({msg:"No category",err: 'No category'});return}
  const msgs = await Message.find({ category: category }).populate({path:"author",select:"-_id firstname email creationDate"}).select("-_id -author._id").exec();
  res.json(msgs);
});

router.get('/navigation', async (req, res, next) => {
    const cat = await Category.find({ parent: { $eq: null } }).select('-_id title description').exec();
    res.json(cat);
});

// for testing
//http://localhost:3100/api/createMessage?user=si.mo@email.com&cat=Group&msg=My_first_message4
router.get('/createMessage', async function(req, res, next) {
  let cat = req.query.cat;
  let user = req.query.user;
  let messageBody = req.query.msg;
  User.findOne({email:user}).then((user)=>{
    if (!user) {
      return res.status(401).json({
        msg:'User not found',
        error: 'User not found!'
      });
    }
    console.log(cat);
    Category.findOne({title:cat}).then((category)=>{
      console.log(category);
      if (!category) {
        return res.status(401).json({
          msg:'Category not found',
          error: 'Category not found!'
        });
      }
      if (!messageBody) {
        return res.status(401).json({
          msg:'Message not set',
          error: 'Message not set!'
        });
      }
      const message = new Message();
      message.category = category;
      message.author = user;
      message.content = messageBody;
      message.save(function (err) {
        if (err) {res.status(500).json({msg:"Error while saving message",error:err});return}
        console.log("success");
        res.send('successfuly inserted data !');
      });
    }).catch((error)=>{
      res.status(500).json({
        msg: "Category not found",
        error:error
      })
    })
  }).catch((error)=>{
    res.status(500).json({
      msg: "User not found",
      error:error
    })
  })
});
router.post('/createMessage', async function(req, res, next) {
  let cat = req.body.cat;
  let user = req.body.user;
  let messageBody = req.body.msg;
  User.findOne({email:user}).then((user)=>{
    if (!user) {
      return res.status(401).json({
        msg:'User not found',
        error: 'User not found!'
      });
    }
    console.log(cat);
    Category.findOne({title:cat}).then((category)=>{
      console.log(category);
      if (!category) {
        return res.status(401).json({
          msg:'Category not found',
          error: 'Category not found!'
        });
      }
      if (!messageBody) {
        return res.status(401).json({
          msg:'Message not set',
          error: 'Message not set!'
        });
      }
      const message = new Message();
      message.category = category;
      message.author = user;
      message.content = messageBody;
      message.save(function (err) {
        if (err) {res.status(500).json({msg:"Error while saving message",error:err});return}
        console.log("success");
        res.send('successfuly inserted data !');
      });
    }).catch((error)=>{
      res.status(500).json({
        msg: "Category not found",
        error:error
      })
    })
  }).catch((error)=>{
    res.status(500).json({
      msg: "User not found",
      error:error
    })
  })
});

// Initial setup cat
router.get('/initCat', async function(req, res, next) {
  dbconn.dropCollection(
    "Categories",
    function(err, result) {
      console.log("cleared");
    }
  );
  const forum = new Category();
  forum.title = "Forum";
  forum.description = "Catégorie parente de tous les forums";
  forum.save(function (err) {
    if (err) {res.status(500).send('err on 1');return}
    console.log("insert1");
    const group = new Category();
    group.title = "Group";
    group.description = "Catégorie parente de tous les groupes";
    group.save(function (err) {
      if (err) {res.status(500).send('err on 2');return}
      console.log("insert2");
      console.log("success");
      res.send('successfuly inserted data !');
    });
  });
});
// Initial setup user
router.get('/initUser',async (req,res,next)=>{
  dbconn.dropCollection(
    "Users",
    function(err, result) {
      console.log("cleared");
    }
  );
  const user1 = new User();
  user1.firstname = "yo";
  user1.lastname = "an";
  user1.email = "yo.an@email.com";
  user1.save(function (err) {
    if (err) {res.status(500).send('err on 1');return}
    console.log("insert1");
    const user2 = new User();
    user2.firstname = "Si";
    user2.lastname = "Mo";
    user2.email = "si.mo@email.com";
    user2.save(function (err) {
      if (err) {res.status(500).send('err on 2');return}
      console.log("insert2");
      console.log("success");
      res.send('successfuly inserted data !');
    });
  });
})

module.exports = router;
