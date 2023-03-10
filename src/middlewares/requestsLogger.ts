import { NextFunction, Request, Response } from "express"

import { apiMainLogger } from "../app"

export function requestsLogger(req: Request, res: Response, next: NextFunction): void {
  const {
    method,
    protocol,
    hostname,
    originalUrl,
  } = req

  const startedAt = Date.now()

  res.on("finish", () => {
    const finishedAt = Date.now()
    const duration = finishedAt - startedAt
    const statusCode = res.statusCode

    const formatedStartedAt = new Date(startedAt).toLocaleString()

    apiMainLogger(`Method [${method}] - Status [${statusCode}] - Requested path [${protocol}://${hostname}${originalUrl}] - At [${formatedStartedAt}] - Duration ${duration}ms`)
  })
  res.on("error", () => {
    const finishedAt = Date.now()
    const duration = finishedAt - startedAt
    const statusCode = res.statusCode

    apiMainLogger(`ERROR | Method [${method}] - Status [${statusCode}] - Requested path: ${protocol}://${hostname}${originalUrl} - Duration ${duration}ms`)
  })

  next()
}