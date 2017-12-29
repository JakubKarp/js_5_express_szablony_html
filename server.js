var express = require('express')
var app = express();


app.set('view engine', 'pug');
app.set('views','./views');




app.get('/', function(req, res){
    res.render('button', {
		url: 'http://localhost:3000/log',
		name: 'Kot'
	});
});

app.get('/log', function(req, res){
    res.render('logi', {
		placeholder: ' wpisz imię',
	});
});

app.use('/afterlog', function(req, res, next){
    console.log('Hej, wpisałeś imię: ' + req.query.login_name + '!');
		next();
	
});

app.get('/afterlog', function(req, res){
    res.render('voila', {
		your_name: req.query.login_name		   
	});
});




app.listen(3000);
app.use(function(req, res, next) {
    res.status(404).send('Nie tego szukałeś!')
});