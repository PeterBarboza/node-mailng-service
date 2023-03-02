import { Router } from "express"

import { Factory } from "./layers/factory"

export const router = Router()

const controller = new Factory().handle()

router.post("/sendMail", controller.sendMail.bind(controller))