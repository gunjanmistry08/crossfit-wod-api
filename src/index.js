const express = require('express')

const apiRouter = require('../src/routes')

const bodyParser = require("body-parser");

const apicache = require("apicache");


const app = express()

const port = process.env.PORT || 3000

const cache = apicache.middleware

// app.get('/',(req,res) => {
//     res.send('<h1>Hello World<h2>')
// })


app.use(bodyParser.json());

app.use(cache("2 minutes"));


app.use("/api", apiRouter);

app.listen(port,() => {
    console.log(`Listening on port of ${port}`);
})