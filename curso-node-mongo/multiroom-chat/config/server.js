/* importar o módulo do framework express */
const express = require('express');

const cookieParser = require('cookie-parser');

/* importar o módulo do framework consign */
const consign = require('consign');

/* importar o middle body-parser */
const bodyParser = require('body-parser');

/* importar o middle express-validator */
const expressValidator = require('express-validator');

/* iniciar o express */
var app = express();

/* setar as variaveis de 'view engine' e 'views' do express */
app.set('view engine', 'ejs');
app.set('views', 'app/views');

/* configurar os middles do app */
app.use(express.static('app/public'));
app.use(bodyParser.urlencoded({extended : true})); 
app.use(expressValidator());
app.use(cookieParser());

/* configurar o consign */
consign().include('app/routes')
         .then('app/models')
         .then('app/controllers')
         .into(app);

/* exportar o express */
module.exports = app;
