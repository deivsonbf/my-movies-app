const express = require("express")
const router = express.Router()
const mysql = require("../config")

router.get("/produtoras", (req, res) => {
  mysql.getConnection((erro, conn) => {
    const sql = "SELECT * FROM produtoras"
    conn.query(sql, (erro, result) => {
      conn.release()
      return res.status(200).render("produtoras", { produtoras: result })
    })
  })
})

router.get("/produtora/:id", (req, res) => {
  mysql.getConnection((erro, conn) => {
    const sql = "SELECT * FROM produtoras p inner join videos v on p.id_produtora = v.produtoraId where	p.id_produtora = ?;"
    conn.query(sql, req.params.id , (erro, result) => {
      conn.release()
      return res.status(200).render("produtora", { produtoras: result })
    })
  })
})

module.exports = router
