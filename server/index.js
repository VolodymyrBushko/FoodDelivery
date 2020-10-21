const express = require('express');
const bodyParser = require('body-parser');
const config = require('config');
const PORT = config.get('port');
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.listen(PORT,
  () => console.log(`server has been started on port: ${PORT}`));
