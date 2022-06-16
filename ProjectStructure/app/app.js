require('dotenv').config('../.env');

const express = require('express')
const app = express();

const{notFoundHandler,errorHandler}=require('./error')
app.use(require('./middleware'))
app.use(require('./routes'))


//console.log(process.env.PORT)


// app.get('/health2', (_req, res) => {
//     throw new Error('Error')
//     res.status(200).json({message: "Success"})
// })

app.use(notFoundHandler)
app.use(errorHandler)
module.exports = app