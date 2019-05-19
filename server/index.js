require('dotenv').config();
const express = require ('express');
const massive = require ('massive');
const {SERVER_PORT,CONNECTION_STRING} = process.env
const ctrl = require('./controller')

const app = express()
massive(CONNECTION_STRING).then(db=>{
    app.set('db',db)
    console.log('Keep it running, db!')
    app.listen(SERVER_PORT,()=>console.log(`Ready for fun on ${SERVER_PORT}?`))
})
//ENDPOINTS
app.get('/api/getAllEvents',ctrl.getAllEvents)