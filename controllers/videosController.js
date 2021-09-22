const express = require("express")
const router = express.Router()
const mysql = require("../config")

router.get("/videos", (req, res) => {
  mysql.getConnection((erro, conn) => {
    const sql = "SELECT * FROM videos"
    conn.query(sql, (erro, result) => {
      conn.release()
      return res.status(200).render("videos", { videos: result })
    })
  })
})

router.get("/video/:id", (req, res) => {
  mysql.getConnection((erro, conn) => {
    const sql = "SELECT * FROM videos where id_video = ?"
    conn.query(sql, req.params.id, (erro, result) => {
      conn.release()
      return res.status(200).render("video", result[0])
      console.log(result)
      res.send(result)
    })
  })
})

router.post("/video/search", (req, res) => {

  let pesquisa = "%" + req.body.video + "%"

  mysql.getConnection((erro, conn) => {
    const sql = "SELECT * FROM videos where titulo like ?" 
    conn.query(sql, pesquisa, (erro, result) => {
      conn.release()
      console.log(result)
      return res.status(200).render("videos", { videos : result})
    })
  })
})

module.exports = router
