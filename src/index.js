if (process.env.NODE_ENV !== 'production') require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors')
const routes = require('./routes');

const app = express()

mongoose.connect(process.env.MONGO_URL, {
    useFindAndModify: false,
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Conectado ao banco')
}).catch(err => {
    console.log(err)
});

app.use(cors())
app.use(express.json())
app.use(routes);


app.listen(process.env.PORT || 8888)