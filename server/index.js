const express = require('express');
const morgan = require('morgan');

let app = express();
let port = process.env.PORT || 3000;


app.use(express.static(__dirname + '/../public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
