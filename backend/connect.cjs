const {MongoClient} = require("mongodb")
require("dotenv").config({path: "config.env"})

//async function main() {
    const Db = process.env.ATLAS_URI
    const client = new MongoClient(Db)

    let database

    module.exports ={
        //below format is for makign a function in an object item:(args)=>{}
        connectToServer:()=>{
            database = client.db("Yapper_App");//grabs the demo page database
        },
        getDb:() =>{
            return database;
        }
    }
    /*
    try {
    await client.connect() //connects to the database

    //const collections = await client.db("Yapper-Storage").collection("Demo_Page_Data")
    //console.log(collections)
    //console.log("Success!")
    }
    catch(error){
        //alert("DB not connected")
        console.error(error)
    }
    finally{
        await client.close()
    }
        */
//}

//main()