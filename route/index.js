const express = require('express')
const app = express.Router()

app.get("/",(req, res, next) => {
	res.render("index", { title:"Pagina Inicial"})
})

module.exports = app;