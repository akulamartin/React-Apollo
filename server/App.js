const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

//Allow cross origin requests
app.use(cors())

mongoose.connect('mongodb://localhost:27017/react', {useNewUrlParser: true})
mongoose.connection.once('open',()=>{
    console.log('opened the connection')
})
app.use('/graphql',graphqlHTTP({
    schema:schema,
    graphiql:true
}))

app.listen(4000,()=>{
    console.log("listening on port 4000")
})