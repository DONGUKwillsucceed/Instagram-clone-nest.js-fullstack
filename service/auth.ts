const httpURL = 'http://localhost:3000/api'

export async function signIn(userID : String, password : String){
    const data = {userID, password};
    const response = await fetch(`${httpURL}/auth`,{
        method: 'POST',
        headers: {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(data)
    })
    return response;
}