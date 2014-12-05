var express = require('express');
var bodyParser = require('body-parser')
var app = express();

app.set('view engine', 'ejs');


var thing = {
	name: req.params.name,
	greeting: 'Hello'
}

app.post('/process', function(req, res) {
	res.send(req.params);
})


app.get('/:name', function(req, res) {
	res.render('taco', {name: req.params.name});
	// res.send('this is our first express app');
});

// app.get('/butts', function(req, res) {
// 	res.send('this page is for butts only, thank you')
// })

// app.get('/add/:x/:y', function(req, res) {
// 	console.log('butts')
// 	var math = (parseInt(req.params.x) + parseInt(req.params.y))
// 	res.send(' ' + math);
// })

// app.get('/multiply/:x/:y', function(req, res) {
// 	res.send(' ' + (parseInt(req.params.x) * parseInt(req.params.y)))
// })

app.listen(3000);