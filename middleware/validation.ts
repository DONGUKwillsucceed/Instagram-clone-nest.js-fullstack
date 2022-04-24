import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { checkOut } from '../DB/repository';


export default function tokenValidation(req: Request, res : Response) {

    return new Promise((resolve, reject) => {
        let token : any = req.headers['x-access-token'] || req.headers['authorization']; // Express headers are auto converted to lowercase
        if (token.startsWith('Bearer ')) {
            // Remove Bearer from string
            token = token.slice(7, token.length);
        }

        if (token) {
            jwt.verify(token, 'mySecretKey', async(err : any | null, decoded : any) => {
                if (err) {
                    return reject('Token is not valid')
                } else {
                    console.log(decoded);
                    const result = await checkOut(decoded);
                    if(result){
                        return resolve(decoded)
                    }
                    else{
                        return reject("Token is not present");
                    }
                }
            });
        } else {
            return reject("Token is not present")
        }
    })
}