const httpURL = 'http://localhost:3000/api'

export async function getPostings(token : String){
    const response = await fetch(`${httpURL}/posting/`,{
        method: 'GET',
        headers : {
            "Authorization" : `Bearer ${token}`,
        },
    })
    return response.json();
}