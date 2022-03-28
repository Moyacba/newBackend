const express = require('express');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const passport = require('passport');
const cors = require('cors');
const app = express();
const fileupload = require('express-fileupload')
const path = require('path');


require('./api/database');
  
  //Middlewares
app.use(passport.initialize());
app.use(passport.session());
app.use(morgan('dev'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
app.use(cors());

//settings
app.set('port', process.env.PORT || 5000);
app.use(express.static('/public'));

//inizialitations
app.listen(app.get('port'), () => {
    console.log(`Server started on port ${app.get('port')}`);
});

app.get('/', (req, res) => {
    res.send('Funciona!!!!!!!!!!!!')
})

//routes
app.use(require('./api'));