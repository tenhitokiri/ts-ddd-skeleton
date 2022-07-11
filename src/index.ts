import 'reflect-metadata';
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

const port = process.env.PORT || 5000
const app = express()

//middleware
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

//Routes

app.listen(port, ()=> {
    console.log('listening on port ' + port)
});