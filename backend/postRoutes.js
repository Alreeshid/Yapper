const express = require("express")
const database = require("./connect.cjs")
const objectId = require("mongodb").ObjectId

let postRoutes = express.Router();

//1 Retrieve all
//http://localhost:3000/users
postRoutes.route("/Users").get( async(request, response) => {//asynce makes it wait until we get data returned
    let db = database.getDb()
    let data = await db.collection("Users").find({}).toArray()
    if(data.length > 0){
        response.json(data)//parses what's found a json data, for front end
    }
    else{
        throw new Error("Data was not found, or no fields found")
    }
})

//2 Retrieve one
postRoutes.route("/Users/:id").get( async(request, response) => {//asynce makes it wait until we get data returned
    let db = database.getDb()
    let data = await db.collection("Users").findOne({_id: new ObjectId(request.params.id)})
    if(Object.keys(data).length >0){
        response.json(data)//parses what's found a json data, for front end
    }
    else{
        throw new Error("Data was not found, or no fields found")
    }
})

//3 create one
postRoutes.route("/Users").post( async(request, response) => {//asynce makes it wait until we get data returned
    let db = database.getDb()
    let mongoObject = {
        userName: request.body.userName,
        email: request.body.email,
        password: request.body.password,
        dateCreated: /*request.body.timestamp*/ null,
        upvotes: 0,
    }
    let data = await db.collection("Users").insertOne(mongoObject)
    
    response.json(data)
})

//4 update one
postRoutes.route("/Users/:id").put( async(request, response) => {//asynce makes it wait until we get data returned
    let db = database.getDb()
    let mongoObject = {
        $set:{
        userName: request.body.userName,
        email: request.body.email,
        password: request.body.password,
        dateCreated: /*request.body.timestamp*/ null,
        upvotes: 0,
        }
    }
    let data = await db.collection("Users").updateOne({_id: new ObjectId(request.params.id)},mongoObject)
    
    response.json(data)
})

//5 delete one
postRoutes.route("/Users/:id").delete( async(request, response) => {//asynce makes it wait until we get data returned
    let db = database.getDb()
    let data = await db.collection("Users").deleteOne({_id: new ObjectId(request.params.id)})
    response.json(data)
})


module.exports = postRoutes