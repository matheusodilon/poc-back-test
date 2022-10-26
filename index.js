var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var app = express()

app.use(bodyParser.json())
app.use(cors())

const cars = require('./cars.json');
const exampleData = require('./example.json');

app.get('/photos', async function (req, res) {
  res.json(cars)
})

app.get('/info', async function (req, res) {
  res.json(exampleData)
})

app.get('/random', async function (req, res) {
  const randomNumber = Math.floor(Math.random() * 100);
  const data = randomNumber;
  console.log('random', randomNumber);
  res.json({ value: randomNumber })
})

app.post('/sum', (req, res) => {
  const { first_value, second_value } = req.body;
  const result = first_value + second_value;
  console.log('sum result', result);
  res.send({
    data: { result }
  })
})

app.post('/inspection-photo', (req, res) => {
  const result = req.body;
  console.log('payload', result);
  res.send({
    data: { result }
  })
})

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!')
})