var express = require('express');
var router = express.Router();

// require controller modules
var auth_controller = require('../controllers/authGoogleController');

/* GET users listing. */
router.get('/', function(req, res){

	console.log('Checking Google Auth');

	// if(req === null)
	// 	res.status(404).send('No id_token Found');

 	//auth_controller.auth_google(req.body, res);
});

module.exports = router;
