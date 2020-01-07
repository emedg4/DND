require('dotenv').config()
const app = require('express')()
var http = require('http').createServer(app)
var io = require('socket.io')(http)
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


/**
 * Validate the credentials of an user.
 * @Endpoint
 *
 */
app.post('/validation', (req, res) => {
    //TODO Validation via JWT 

});

http.listen(process.env.SERVER_PORT, () => {
    console.log(`Server initiated at PORT ${process.env.SERVER_PORT}`)
});





            // io.on('connection', () => {
            //     console.log(`User Connected`)
            // })