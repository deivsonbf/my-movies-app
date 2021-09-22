const express = require("express")
const morgan = require('morgan')

const app = express()

const port = process.env.PORT || 3001

const rotaProdutoras = require("./controllers/produtorasController")
const rotaCategorias = require("./controllers/categoriasController")
const rotaVideos = require('./controllers/videosController')
const rotaDashboard = require('./controllers/dashboardController')

app.set("view engine", "ejs")

app.use(express.static("assets"))
app.use(express.static("../XXX/"))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(morgan('tiny'))

app.use("/", rotaCategorias)
app.use("/", rotaProdutoras)
app.use("/", rotaVideos)
app.use("/", rotaDashboard)

app.listen(port)
