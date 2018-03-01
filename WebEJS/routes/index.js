var express = require('express');
var router = express.Router();

var Web3 = require('web3');

var web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider('http://192.168.1.5:8545'));
var account1 = web3.eth.accounts[1];
var account2 = web3.eth.accounts[2];
console.log(account1);
console.log(account2);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express',
  						account1: account1 
						});
});

module.exports = router;
