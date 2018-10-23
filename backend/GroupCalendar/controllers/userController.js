var User = require('../models/user.js');

exports.user_info_get = function(req, res){
	User.info_get(function(err, info){
		if (err)
			res.status(400).send('Invalid id_token');
		else 
			res.json(info);
	});
};

exports.user_info_put = function(req, res){
	res.send('NOT IMPLEMENTED: user info get');
};

exports.user_id_post = function(req, res){
	res.send('NOT IMPLEMENTED: user id post');
};

exports.user_delete = function(req, res){
	res.send('NOT IMPLEMENTED: user delete');
};

