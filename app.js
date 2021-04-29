const express = require('express');
const app = express();

app.locals.aggregate = require('./db.json');


findAllAggregatedByAuthor();

app.listen(3000);