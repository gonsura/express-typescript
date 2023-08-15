import { LogError } from '@interfaces/utils';

export type AnsiColor = (s: string) => string
export type AnsiCustomColor = (colorNumber: number) => (s: string) => string

export type LogError = (err: unknown) => [string, number] | void
export type LogDefault = (message: string) => void
export type Logs<T> = (context: string) => T

export type PortCheck = (portFromDotenv: string | undefined) => number

