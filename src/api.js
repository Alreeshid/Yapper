import axios from 'axios'
const URL = "http:/localhost:3000"

export async function getUsers(){
    //equal to http:/localhost:3000/Users
    const response = await axios.get(`${URL}/Users`)
    if(response.status === 200){
        return response.data
    }
    else{
        return
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

export async function makeUser(obj){
    
}

export async function updateUserPosts(id, obj){
    
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