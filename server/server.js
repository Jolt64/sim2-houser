require('dotenv').config()
const express = require('express')
const massive = require('massive')
const CT = require('./controller')

const app = express()
const { SERVER_PORT, CONNECTION_STRING } = process.env

app.use(express.json())

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('Spells are ready');
})

app.get('/api/houses', CT.getAllHouses)
app.post('/api/houses', CT.createNewHouse)
app.delete('/api/house/:id', CT.deleteHouse)

app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} Wizards a wizzing`))