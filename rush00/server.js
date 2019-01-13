const express = require('express')
const app = express()
const port = 3000
var path = require('path')

//app.set('views', path.join(__dirname, 'public', 'views'));


app.use(express.static(path.join(__dirname, 'public')));
//app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => { res.sendFile(path.join(__dirname + '/public/views/index.html'))} )

app.post('/', function (req, res) {res.send('POST request to the homepage')})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
