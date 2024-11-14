//uses functions from connect.cjs to make a LOCAL server instance
//remember CRUD methodology, paths for Create,Read,Update,Delete
const connect = require("./connect.cjs")

const express = require("express")
const cors = require("cors")

const routes = require("./postRoutes")
// const demoData = require("./demoDataRoutes")

const app = express()
const PORT = 3000

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