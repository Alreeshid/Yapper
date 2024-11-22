import axios from 'axios'
const URL = "https://mongodb+srv://vercel-admin-user:3cLQ2Kw5Prdj39hv@yapper-storage.0jflx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

export async function getUsers(){
    //equal to http:/localhost:3000/Users
    const response = await axios.get(`${URL}/Users`)
    if(response.status === 200){
        return response.data
    }
    else{
        //response = "Nope"
        return response
    }
}

export async function getUser(id){
    const response = await axios.get(`${URL}/Users/${id}`)
    if(response.status === 200){
        return response.data
    }
    else{
        return
    }
}

export async function createUser(obj){
    const response = await axios.post(`${URL}/Users`, obj)
    if(response.status === 200){
        return response.data
    }
    else{
        return response.statusText
    }
    
}

export async function CreateQuest(obj){
    const response = await axios.post(`${URL}/AddQuest`, obj)
    if(response.status === 200){
        return response.data
    }
    else{
        return response.statusText
    }
}

export async function updateUser(id, obj){
    const response = await axios.put(`${URL}/Users${id}`, obj)
    if(response.status === 200){
        return response.data
    }
    else{
        return response
    }
    
}

export async function deleteUser(id){
    const response = await axios.delete(`${URL}/Users/${id}`)
    if(response.status === 200){
        return response.data
    }
    else{
        return response
    }
}

export async function verifyUser(user){
    const response = await axios.post(`${URL}/Users/login`, user)
    if(response.data.success){
        return response.data.token
    }
    else{
        throw new Error(response.status.text)
    }

 
}

export async function getAllCreations(){

}   

export async function getAllBlogs(){
    //equal to http:/localhost:3000/Blogs
    const response = await axios.get(`${URL}/Blogs`)
    if(response.status === 200){
        return response.data
    }
    else{
        //response = "Nope"
        return response
    }
}

export async function getBlogs(id){
    const response = await axios.get(`${URL}/Blogs/${id}`)
    if(response.status === 200){
        return response.data
    }
    else{
        return
    }
}