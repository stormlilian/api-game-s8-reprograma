const express = require("express")
const router = express.Router()
const controller = require("../controller/gameController")
const cors = require("cors")


router.get("/jogos", cors(), controller.getGames)
router.get("/jogos/:id", cors(), controller.getGamesById)


module.exports = router