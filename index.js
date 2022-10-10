var express = require('express')
var bodyParser = require('body-parser')
var app = express()

app.use(bodyParser.json());

app.get('/render', function (req, res) {
  const randomNumber = Math.floor(Math.random() * 100);
  res.send(`${randomNumber}`)
})

app.post('/sum', (req, res) => {
  const { first_value, second_value } = req.body;
  const result = first_value + second_value;
  res.send({
    data: { result }
  })
})

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!')
})