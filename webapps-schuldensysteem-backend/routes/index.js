var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');
let Debt = mongoose.model('Debt');
/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/

router.get('/API/debts/', function(req,res,next){
  Debt.find(function(err,debts){
if(err){return next(err);}
res.json(debts);
  });
});

router.post('/API/debts/', function(req,res,next){
  let debt = new Debt(req.body);
  debt.save(function(err,rec){
    if(err){return next(err);}
    res.json(rec);
  })
})

module.exports = router;
