import { Middleware } from '@interfaces/main'
import { logInfo } from '../utils/rainbowString'

const logger: Middleware = (req, _res, next) => {
  logInfo('express')(`method: ${req.method}, path: ${req.url}`)
  next()
}

export default logger
