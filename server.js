const express = require('express')
const { request } = require('https')
const path = require('path')


const httpPort = process.env.PORT || 80

const app = express()

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

app.listen(httpPort, function () {
  console.log(`Listening on port ${httpPort}!`)
})


//const { Client } = require('pg')
//const client = new Client()

//async function main() {
//    await client.connect()
//    const res = await client.query('SELECT $1::text as message', ['Hello world!'])
//    console.log(res.rows[0].message) // Hello world!
//    await client.end()
//}

//const db = require("./src/models");

//db.sequelize.sync();

