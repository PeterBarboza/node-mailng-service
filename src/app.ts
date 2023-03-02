import express from "express"
import debug from "debug"
import cors from "cors"

import { router } from "./router"

const apiMainLogger = debug("api:main")

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors({
  origin: "*",
  methods: ["POST"]
}))

app.use(router)

app.use((req, res) => {
  res.send("Node mailing service")
})

export { app, apiMainLogger }