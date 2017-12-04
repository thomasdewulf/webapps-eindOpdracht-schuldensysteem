var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');
let jwt = require('express-jwt');

let Debt = mongoose.model('Debt');


let auth = jwt({secret: process.env.RECIPE_BACKEND_SECRET, userProperty: 'payload'});

router.get('/API/debts/', auth, function(req, res, next) {
  let query = Debt.find().populate('debts');
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

  router.get('/API/recipe/:recipe', function(req, res) {
    req.recipe.populate('debts', function(err, rec) {
      if (err) return next(err);
      res.json(rec);
    });
  });
module.exports = router;
