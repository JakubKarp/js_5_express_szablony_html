var express = require('express')
var app = express();


app.set('view engine', 'pug');
app.set('views','./views');

app.use('/sklep', function(req, res, next){
    console.log('Hej, jestem wrotami do sklepu!');
		next();
});

app.get('/', function (req, res) {
    res.send('Wpisz w localhost słowo: sklep. I poczekaj 2 sekundy!');
});

app.get('/sklep', function (req, res) {
   	res.setTimeout(2000, function() {  
		res.send('Witaj w sklepie');
	});
});

app.get('/first-template', function(req, res){
    res.render('first-template');
});

app.get('/login', function(req, res){
    res.render('button', {
		url: 'http://localhost:3000/log',
		name: 'Kot'
		
	});
	
});

app.get('/log', function(req, res){
    res.render('logi');
	
});


app.listen(3000);
app.use(function(req, res, next) {
    res.status(404).send('Nie tego szukałeś!')
});