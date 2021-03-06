//declaration
var express 		= require('express');
var bodyParser 		= require('body-parser');
var ejs 			= require('ejs');
var exSession 		= require('express-session');
// var exValidator		= require('express-validator');
var cookieParser 	= require('cookie-parser');
var login 			= require('./controllers/login');
var logout 			= require('./controllers/logout');
var home 			= require('./controllers/home');
var register		= require('./controllers/register');
var empHome		= require('./controllers/employee/home');

var app = express();

//configuration
app.set('view engine', 'ejs');


//middleware
app.use('/style', express.static('cssFiles'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(exSession({secret: 'my top secret value', saveUninitialized: true, resave: false}));
app.use(cookieParser());
app.use(express.json());
// app.use(exValidator());

app.use('/login', login);
app.use('/logout', logout);
app.use('/register', register);
app.use('/home', home);
app.use('/employee/home', empHome);


//routes
app.get('/', function(req, res){
	res.render('index');
});



//server startup
app.listen(3000, function(){
	console.log('server started at 3000!');
});
