const express = require("express")
const router = express.Router()
const mysql = require("../config")

router.get("/", (req, res) => {
  res.render("index")
})

router.get("/teste", (req, res) => {
  let jogadores = [
    {
      nome: "Robson",
      gols: 7,
    },
    {
      nome: "Pikachu",
      gols: 5,
    },
    {
      nome: "David",
      gols: 5,
    },
  ]

  res.render("teste", { jogadores: jogadores })
})

module.exports = router
