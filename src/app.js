const express = require("express")
const app = express()
const router = require("./routes/gameRouter")

app.use("/", router)

module.exports = app