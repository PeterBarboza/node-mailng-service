import { Request, Response } from "express";
import { plainToInstance } from "class-transformer"
import { validateSync } from "class-validator"

import { Service } from "../service";
import { apiMainLogger } from "../../app";
import { SendMailDTO } from "./dto";

export class Controller {
  service: Service

  constructor(service: Service) {
    this.service = service
  }

  async sendMail(req: Request, res: Response): Promise<Response> {
    try {
      const sendMailData = plainToInstance(SendMailDTO, req.body)
      const errors = validateSync(sendMailData)
  
      if (errors.length > 0) {
        return res.status(400).json({ errors })
      }
  
      const result = await this.service.sendMail(sendMailData)
  
      return res.json(result)
    } catch (error) {
      apiMainLogger("Error on sendMail Controller")
      apiMainLogger(error)

      return res.status(500).json({ mesage: "Internal server error" })      
    }
  }
}