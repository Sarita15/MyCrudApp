const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const app = express();

// importing routes
const customerRoutes = require('./routes/customer');

//settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(_dirname, 'views' ));

//middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql,{
	host: 'sql9.freemysqlhosting.net',
	user: 'sql9336441',
	password: '9tW7Au7hPn',
	port: 3306,
	database: 'sql9336441'
}, 'single'));
app.use(express.urlencoded({extended: false}));


// routes
app.use('/', customerRoutes);

// static files
app.use(express.static(path.join(__dirname, 'public')));


// starting the server
app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`)
});