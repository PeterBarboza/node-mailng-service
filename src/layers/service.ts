import nodemailer, { Transporter } from "nodemailer"

import { apiMainLogger } from "../app"
import { CONFIG } from "../config"

export interface ISendMailParams {
  to: string,
  subject: string,
  text: string,
  html: string,
}

type nodemailerSendMailReturn = {
  accepted: string[]
  rejected: string[]
}

export class Service {
  private INSTANCE: Transporter | null = null

  private getTransporter() {
    if(!this.INSTANCE) {
      this.INSTANCE = nodemailer.createTransport({
        host: "smtp.office365.com",
        port: 587,
        secure: false,
        auth: {
          user: CONFIG.nodemailer.user,
          pass: CONFIG.nodemailer.pass,
        }
      });
    }

    return this.INSTANCE
  }

  async sendMail({ to, subject, text, html }: ISendMailParams) {
    try {
      const transporter = this.getTransporter()
      const result: nodemailerSendMailReturn = await transporter.sendMail({
        from: CONFIG.nodemailer.sender,
        to: to,
        subject: subject,
        text: text,
        html: html
      });
      
      return {
        accepted: result.accepted,
        rejected: result.rejected
      }
    } catch (error) {
      apiMainLogger("Error on sendMail Service")
      apiMainLogger(error)

      return { message: "Unknown error" }
    }
  }
}