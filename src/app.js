const express = require('express')
const app     = express()
const PORT    = 3000
const path    = require('path')

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.send('Estoy en home')
})

app.get('/detalle-producto', (req, res) => {
    res.send('Estoy en Detalle-producto')
})

app.get('/inicio-sesion', (req, res) => {
    res.send("Estoy en inicio sesion")
})

app.get('/registrarme', (req, res) => {
    res.send('carrito')
})

app.get('/', (req, res) => {
    res.send("Estoy en carrito")
})

                        

app.listen(PORT, () => console.log('escuchando puerto', PORT))