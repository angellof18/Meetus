const express = require("express")
const cors = require("cors")
const http = require("http")
const { Server } = require("socket.io")
const { join } = require('path')
const app = express()

app.use(express.json())
app.use(express.static(join(__dirname, '../frontend/dist')))

//Creamos servidor Web
app.use(cors())
const server = http.createServer(app)

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