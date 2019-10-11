import express from 'express'
import indexRouter from './routes'

const app = express()

app.use(express.Router()) // body parser

app.use('/api', indexRouter)

export default app