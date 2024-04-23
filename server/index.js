const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./routes/api');
const port = process.env.PORT || 6000;
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

mongoose 
.connect(process.env.DB, {useNewUrlParser: true})
.then(() => console.log(`Database connected successfully!`))
.catch((err) => console.log(err));

mongoose.Promise = global.Promise;

app.use((req, res, next) => {
    res.header('Access-Control-ALlow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use(bodyParser.json());
app.use('/api', routes);

app.use((err, req, res, next) => {
    console.log(err);
    next();
});

app.listen(port, () => {
    console.log(`Server started on PORT: ${port}`);
});