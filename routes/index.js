var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');
let jwt = require('express-jwt');

let Debt = mongoose.model('Debt');
let User = mongoose.model('User');


let auth = jwt({secret: process.env.SCHULDEN_BACKEND_SECRET, userProperty: 'payload'});

router.get('/API/debts/', auth, function(req, res, next) {
  let query = Debt.find().sort('dateSpent').populate('debts');
  query.exec(function(err, debts) {
    if (err) return next(err);
    res.json(debts);
  })
});




router.post('/API/debts/', auth, function (req, res, next) {
  let debt = new Debt({title: req.body.title, description: req.body.description, price: req.body.price, dateEntered: req.body.dateEntered, dateSpent: req.body.dateSpent});
  debt.save(function(err, post) {
          if (err){ return next(err); }
          res.json(debt);
      });
  });

  router.param('debt', function(req, res, next, id) {
    let query = Debt.findById(id);
    query.exec(function (err, debt){
      if (err) { return next(err); }
      if (!debt) { return next(new Error('not found ' + id)); }
      req.debt = debt;
      return next();
    });
  });  

  router.param('user', function(req,res,next,username) {
  let query = User.findOne({'username':username});
  query.exec(function(err,user){
  if(err){return next(err);}
  if(!user){return next(new Error('Not found ' + id));}
  req.user = user;
  return next();
});
});

  router.get('/API/debts/:debt',auth, function(req, res) {
    req.debt.populate('debts', function(err, rec) {
      if (err) return next(err);
      res.json(rec);
    });
  });

  router.get('/API/debts/user/:user', auth, function(req, res, next) {
 
    req.user.populate('debts', function(err,rec){
      if(err) return next(err);
      res.json(rec.debts);
    })
  });

  router.post('/API/debts/:user',auth,function(req,res,next){
    let debt = new Debt(req.body);
    console.log(debt);
    debt.save(function (err, debt)
  {
    if(err){return next(err);}

    req.user.debts.push(debt);
    req.user.save(function(err,rec){
      if(err){return next(err);}
      res.json(debt);
    });
  });
  });
module.exports = router;
