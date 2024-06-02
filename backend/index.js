const express = require("express")
const cors = require("cors")
const http = require("http")
const mysql = require("mysql")
const { Server } = require("socket.io")
const { join } = require('path')
const app = express()
require('dotenv').config()

app.use(express.json())
app.use(express.static(join(__dirname, '../frontend/dist')))

//Creamos servidor Web
app.use(cors())
const server = http.createServer(app)

//Conexion a la base de datos
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD || '',
    port: process.env.DB_PORT
})
//Verificamos conexion
db.connect((err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("Conectado a la Base de datos")
    }
})

//Configuracion de rutas

//Regitro
app.post('/sign', (req, res) => {
    const { nombre, ap_paterno, ap_materno, usuario, pass } = req.body

    db.query('SELECT * FROM usuario WHERE usuario = ?', [usuario], (err, data) => {
        if (err) {
            console.log(err)
        } else if (data.length > 0) {
            res.send('El usuario ya existe')
        } else {
            db.query('INSERT INTO usuario (nombre, ap_paterno, ap_materno, usuario, password) VALUES(?,?,?,?,?)', [nombre, ap_paterno, ap_materno, usuario, pass], (err) => {
                if (err) {
                    console.log(err)
                } else {
                    res.send('Usuario guardado exitosamente')
                }
            })
        }
    })
})

//Login
app.post('/login', (req, res) => {
    const { usuario } = req.body

    db.query('SELECT * FROM usuario WHERE usuario = ?', [usuario,], (err, data) => {
        if (err) {
            console.log('Error al obtener usuario')
        } else {
            res.send(data)
        }
    })
})

//Usuario
app.get('/user', (req, res) => {
    const { user } = req.body

    db.query('SELECT * FROM usuario WHERE usuario = ?', [user], (err, data) => {
        if (err) {
            console.log(err)
        } else {
            res.send(data)
        }
    })
})

//Creamos servidor Socket
const io = new Server(server, {
    cors: {
    }
})

//Administramos operaciones del socket
io.on("connection", (socket) => {
    console.log(`Usuario conectado: ${socket.id}`)

    socket.on("join_room", (data) => {
        socket.join(data)
        console.log(`Usuario: ${socket.id} se unio a la sala: ${data}`)
    })

    socket.on("send_message", (data) => {
        socket.to(data.room).emit("receive_message", data)
    })

    socket.on("disconnect", () => {
        console.log(`Usuario desconectado: ${socket.id}`)
    })
})


//Iniciamos servidor Web
server.listen(process.env.PORT || 3001, () => {
    console.log("RUNNING SERVER")
    console.log(__dirname)
})