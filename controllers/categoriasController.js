const express = require("express")
const router = express.Router()
const mysql = require("../config")

router.get("/categorias", (req, res) => {
  mysql.getConnection((erro, conn) => {
    const sql = "SELECT * FROM categorias"
    conn.query(sql, (erro, result) => {
      conn.release()
      return res.status(200).render("categorias", { categorias: result })
      // return res.status(200).json(result)
    })
  })
})

module.exports = router
