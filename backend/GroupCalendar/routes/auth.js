var express = require('express');
var router = express.Router();


// require controller modules
var auth_controller = require('../controllers/authGoogleController');

/* GET users listing. */
/**
 * CODE_REVIEW: Error 404 is used when a resource can't be found, not just for anything that you can't find.
 * The response you want to use here is likely 400 Bad Request, although I don't think it's actually possible to
 * receive a post request with a null request.
 */
router.post('/google', function(req, res){

	if(req === null){
		res.status(404).send('No request Found\n');
		return console('Err: no request\n')
	}

	console.log(req.param('id_token'));
	console.log(req.param('user_email'));
	console.log(req.param('user_name'));

	// res.send('auth_post test');

 	auth_controller.auth_google(req, res);

});

module.exports = router;
