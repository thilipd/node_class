const express = require('express');

const employeeRouter = require('./router/employee');

const mongo = require('./shared/connect');

const dotenv = require('dotenv');

const app = express();
dotenv.config();

mongo.connect();

app.use(express.json());

app.use('/', (req, res, next) => {
    console.log("Hello");

    next();
})

app.use('/employee', employeeRouter)



app.listen(process.env.PORT || 3000);