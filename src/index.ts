import express from 'express'

import logger from './middleware/logger'
import errorHandler from './middleware/errorHandler'
import connectDB from './utils/connectDB'
import notes from './app/notes/route'
import HttpError from './utils/httpError'

const app = express()

connectDB(app)

app.use(express.json())

app.use(logger)

app.use('/api/v1/notes', notes)

app.use((_req, _res) => {
  throw new HttpError('router not found', 404)
})

app.use(errorHandler)


