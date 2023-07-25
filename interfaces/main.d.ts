import { Request, Response, NextFunction, Express } from 'express'

export type Middleware = (req: Request, res: Response, next: NextFunction) => void
export type ErrorHandler = (err: unknown, req: Request, res: Response, next: NextFunction) => void

export type ConnectDB = (app: Express) => Promise<void>

