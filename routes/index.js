var express = require('express');
var models = require('../models')
var router  = express.Router();

router.get('/', function(req, res) {
	res.send('Welcome to my first API REST deployed with Google cloud Platform!');
});

router.get('/api/users', function(req, res) {
	models.User.findAll()
	  .then(function(users) {
		res.json({
		  data: users
		});
	  });
  });

router.get('/api/users/:user_id', function(req, res) {
	models.User.findByPk(req.params.user_id)
	.then(function(response) {
		res.json({data: response});
	});
});
  
router.post('/api/users', function(req, res) {
	models.User.create({
		first_name: req.body.first_name,
		last_name: req.body.last_name,
		email: req.body.email,
		nick_name: req.body.nick_name,
	}).then(function(response) {
		res.json({data: response});
	});
});
  
router.put('/api/users/:user_id', function(req, res) {
	models.User.update({
		first_name: req.body.first_name,
		last_name: req.body.last_name,
		email: req.body.email,
		nick_name: req.body.nick_name,
	}, { where: { id: req.params.user_id } })
	.then(() => models.User.findByPk(req.params.user_id))
	.then(function(response) {
		res.json({data: response});
	});
});
  
router.delete('/api/users/:user_id', function(req, res) {
	models.User.destroy({
		where: { id: req.params.user_id }
	}).then(function(response) {
		res.json({data: response});
	});
});
module.exports = router