import { Data } from '../types/objtypes';
const httpURL = 'http://localhost:3000/api'

export async function getComments(postID : Number, token : String | null){
    const response = await fetch(`${httpURL}/comment/${postID}`,{
        method: 'GET',
        headers : {
            "Authorization" : `Bearer ${token}`,
        },
    })
    return response.json();
}


export async function postComments(postID : Number, data : Data, token : String | null){
    const response = await fetch(`${httpURL}/comment/${postID}`,{
        method: 'POST',
        headers : {
            "Authorization" : `Bearer ${token}`,
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(data)
    })
    return response.json();
}