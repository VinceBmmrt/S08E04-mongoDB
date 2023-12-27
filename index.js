require('dotenv').config();
const express=require('express');
const router = require('./app/router.js');

const app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/app/views');

app.use(router);

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`App running at http://localhost:${port}`)
})