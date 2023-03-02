import "dotenv/config"

export const CONFIG = {
  port: process.env.PORT || 3000,
  nodemailer: {
    user: process.env.NODEMAILER_USER,
    pass: process.env.NODEMAILER_PASS,
    sender: process.env.NODEMAILER_SENDER
  }
}