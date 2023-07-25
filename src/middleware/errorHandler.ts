import { ErrorHandler } from '@interfaces/main'
import { logError } from '../utils/rainbowString'

const errorHandler: ErrorHandler = (err, _req, res, _next) => {
  const [errorMessage, statuscode] = logError('server')(err) as [string, number]
  res.status(statuscode).json({ status: 'error', errorMessage })
}

export default errorHandler
