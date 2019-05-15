'use strict';
// Proxima pagina 38 da Apostila 'Curso Node JS para Iniciantes'

const express = require('express')
const path = require('path')
const bodyParse = require('body-parser')
const app = express()

const index = require('./route/index')
const abaut = require('./route/abaut')
const form = require('./route/form')

const port = process.env.PORT || 3000

app.use("/",index)
app.use("/abaut", abaut)
app.use("/form", form)

app.set('view engine','ejs')
app.use(express.static(path.join(__dirname + '/public')))
app.use(bodyParse.json())
app.use(bodyParse.urlencoded({ extended: false }))

app.listen(port,(error) => {
	const open = error?`Erro ao conectar a porta ${port}`:
	`Servidor rodando em http://localhost:${port}`

	console.log(open)
})
