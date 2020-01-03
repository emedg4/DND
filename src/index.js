require('dotenv').config()
const app = require('express')()
var http = require('http').createServer(app)
var io = require('socket.io')(http)

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
});

io.on('connection', () => {
    console.log(`User Connected`)
})


http.listen(process.env.SERVER_PORT, () => {
    console.log(`Server initiated at PORT ${process.env.SERVER_PORT}`)
});