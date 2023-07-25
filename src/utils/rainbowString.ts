import {
  AnsiColor,
  AnsiCustomColor,
  Logs,
  LogError,
  LogDefault,
} from '@interfaces/utils'
import HttpError from './httpError'

const colorString: AnsiCustomColor = (colorNumber) => (s) =>
  `\x1b[${colorNumber}m${s}\x1b[0m`

const redString: AnsiColor = colorString(31)
const greenString: AnsiColor = colorString(32)
const yellowString: AnsiColor = colorString(33)
const blueString: AnsiColor = colorString(34)

export const logStatus: Logs<LogDefault> = (context) => (message) =>
  console.info(greenString(`[${context}] ${message}`))

export const logInfo: Logs<LogDefault> = (context) => (message: string) =>
  console.info(blueString(`[${context}] ${message}`))

export const logError: Logs<LogError> = (context) => (err) => {
  const errorMessage = err instanceof Error ? err.message : 'unknown error'
  const contextError = err instanceof HttpError ? err.statusCode : context
  console.error(redString(`[${contextError}] ${errorMessage}`))
  if (contextError === 'mongodb') return
  const statuscode = typeof contextError === 'number' ? contextError : 500
  return [errorMessage, statuscode]
}

export const logWarning: Logs<LogDefault> = (context) => (message) =>
  console.warn(yellowString(`[${context}] ${message}`))
