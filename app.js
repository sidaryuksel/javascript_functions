const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const usersRoutes = require('./routes/datas.js');
const app = express();
require('dotenv/config');

const PORT = process.env.port || 3000;

app.use(bodyParser.json());
app.use('/datas', usersRoutes);


app.get('/', (req, res) => {
    console.log('Home page');
    res.send('Hello from Home Page');
})

//app.locals.aggregate = require('./db.json');

//connect mongo db
mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true},() => 
    console.log('connected mongo db')
)


app.listen(PORT, err => {
    if (err){
        console.log("ERROR: ", err);
        return;
    }
    console.log(`Listening on port ${PORT}`);
});