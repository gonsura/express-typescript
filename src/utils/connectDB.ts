import { connect as connectMongoDB } from 'mongoose'
import { ConnectDB } from '@interfaces/main'
import { logError, logInfo, logStatus } from './rainbowString'
import { mongoUrl, port } from './enValid'

const connectDB: ConnectDB = async (app) => {
  try {
    await connectMongoDB(`${mongoUrl}`)
    logStatus('mongoose')('connect to MongoDB Atlas')
    app.listen(port, () => logInfo('express')(`http://localhost:${port}`))
  } catch (err: unknown) {
    logError('mongoose')(err)
  }
}

export default connectDB
