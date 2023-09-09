const express = require('express')

const apiRouter = require('../src/routes')

const bodyParser = require("body-parser");

const apicache = require("apicache");

const { swaggerDocs: V1SwaggerDocs } = require("./swagger/v1/swagger");


const app = express()

const port = process.env.PORT || 3000

const cache = apicache.middleware


app.use(bodyParser.json());

app.use(cache("2 minutes"));


app.use("/api", apiRouter);

app.listen(port,() => {
    console.log(`Listening on port of ${port}`);
    V1SwaggerDocs(app, port);
})