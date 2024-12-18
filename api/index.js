const connect = require("../backend/connect.cjs")

const express = require("express")
const cors = require("cors")

const routes = require("../backend/postRoutes")
// const demoData = require("./demoDataRoutes")

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors()) //app,use mounts middleware
app.use(express.json())//parses requests in a json format
app.use(routes)
// app.use(demoData)

//uses arrow notation for the second field
app.listen(PORT, () =>{
    //callback function
    connect.connectToServer()
    console.log(`Server is running on port ${PORT}`)//tilde key no shift 
})

module.exports = app;