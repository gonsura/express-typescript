import dotenv from 'dotenv'
import { logWarning } from './rainbowString'
import { PortCheck } from '@interfaces/utils'
dotenv.config()

const portCheck: PortCheck = (portFromDotenv) => {
  if (!portFromDotenv || isNaN(+portFromDotenv)) {
    logWarning('port')('port set to 3000 coz its unvalid')
    return 3000
  }
  return +portFromDotenv
}

export const port = portCheck(process.env.PORT)

export const mongoUrl = process.env.MONGO_URL