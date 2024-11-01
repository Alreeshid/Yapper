require("dotenv").config({path: "config.env"}) //process.env.VAR_NAME

const express = require("express")
const database = require("./connect.cjs")
const objectId = require("mongodb").ObjectId
const SALT_ROUNDS = 6

const jwt = require("jsonwebtoken")
//this is for storing encrypted session variables for logins

let postRoutes = express.Router();

const bcrypt = require("bcrypt") //for encrypting user passwords

//1 Retrieve all
//http://localhost:3000/users
postRoutes.route("/Users").get(verifyToken, async(request, response) => {//asynce makes it wait until we get data returned
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
postRoutes.route("/Users/:id").get(verifyToken, async(request, response) => {//asynce makes it wait until we get data returned
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
postRoutes.route("/Users").post(verifyToken, async(request, response) => {//asynce makes it wait until we get data returned
    let db = database.getDb()

    const hash = await bcrypt.hash(request.body.password, SALT_ROUNDS)
    //add a check to make sure a user account is not being duplicated, using their Email

    const takenEmail = await db.collection("Users").findOne({email: request.body.email})

    if(takenEmail){
        response.json({message: "This email is already taken"})
    }

    else{
    let mongoObject = {
        email: request.body.email,
        userName: request.body.userName,
        password: hash,
        joindate: new Date(),
        creations: [],
        upvotes: 0,
    }
    let data = await db.collection("Users").insertOne(mongoObject)
    
    response.json(data)
}
})

//4 update one
postRoutes.route("/Users/:id").put(verifyToken, async(request, response) => {//asynce makes it wait until we get data returned
    let db = database.getDb()
    let mongoObject = {
        $set:{
        userName: request.body.userName,
        email: request.body.email,
        password: request.body.password,
        dateCreated: request.body.joinDate,
        creations: request.body.creations,
        upvotes: request.body.upvotes,
        }
    }
    let data = await db.collection("Users").updateOne({_id: new ObjectId(request.params.id)},mongoObject)
    
    response.json(data)
})

//5 delete one
postRoutes.route("/Users/:id").delete(verifyToken, async(request, response) => {//asynce makes it wait until we get data returned
    let db = database.getDb()
    let data = await db.collection("Users").deleteOne({_id: new ObjectId(request.params.id)})
    response.json(data)
})

//6: Login Verification Route:
postRoutes.route("/Users/login").post(verifyToken, async(request, response) => {//asynce makes it wait until we get data returned
    let db = database.getDb()

    const hash = await bcrypt.hash(request.body.password, SALT_ROUNDS)
    //add a check to make sure a user account is not being duplicated, using their Email

    const user = await db.collection("Users").findOne({email: request.body.email})

    //we need to first see if an account is open with this email.

    //then, we need to check if the account's password matches the one entered by the frontend user
    //if it doesn't, then we do not grant access to a login.

    if(user){
        //user account was foudn with the entered email:
        let confirmation = await bcrypt.compare(request.body.password, user.password)
        if(confirmation){
            /* returns a successful login as well as the user account as an object   response.json({success: true, user})
            this works, but we'll use a session-based web auth token to verify instead
            this json string is encrypted, and saved in session state. This also allows for different types of Login
            such as admin accounts - and prevents a user from altering their login info in their session states
            (done through the Application tab in the inspector)
            */
            const token = jwt.sign(user, process.env.SECRET_KEY, {expiresIn: "8h"})
            response.json({success: true, token})
        }
        else{
            response.json({success: false, response: "Incorrect email or password"})
        }
    }
    else{
        //no user account found 
        response.json({success: false, message: "Incorrect Account Credentials"})

    }
})

//here's a function that's designed to authenticate user tokens - and prevent them access to certain pages/fields
//if they return a bad token.
function verifyToken(request, response, next){
    //next=what needs to next be done, literally
    const authHeaders = request.headers["authorization"]
    const token = authHeaders && authHeaders.split(' ')[1]//takes away the 'Bearers 'part of the string
    if(!token){
        return response.status(401).json("Authentication invalid")
    }
    jwt.verify(token, process.env.SECRET_KEY, (error, user)=>{
        //if verify failed, it will return an error);
        if(error){
            return response.status(401).json("Authentication token invalid")
        }
        //if the token was valid:
        request.body.user = user
        next()
    })
}

module.exports = postRoutes