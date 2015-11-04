// Get all of our friend data
var data = require('../data.json'); // call file data.json

exports.view = function(req, res){
	console.log(data);
	res.render('index',data)
		/*TO ADD ONE CUSTOM FRIEND
		'name': 'marbles',
		'description':'novia',
		'imageURL':'http://lorempixel.com/500/500/people' */



};