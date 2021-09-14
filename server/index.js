const express = require('express');
const morgan = require('morgan');
const router = require('./routes.js');

let app = express();
let port = process.env.PORT || 3000;


app.use(express.static(__dirname + '/../public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));

app.use('/qa/questions', router);

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
