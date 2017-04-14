const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')

app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static(__dirname + '/public'))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug');

app.post('/play.html', function (req, res) {
    res.locals.data = req.body
  res.render("play")
});

app.get('/index.html', function (req, res) {
  res.render("index")
});

var server = app.listen(80, function () {
	var host = server.address().address
	var port = server.address().port
	console.info(`host:${host}\tport${port}`)
})
