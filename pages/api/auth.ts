import {Request, Response} from 'express'
import jwt from 'jsonwebtoken'
import { checkOut } from '../../DB/repository';

interface userObj{
    ID : Number,
    userID : String,
    password : String,
    nickName : String,
    userName : String
}

export async function tokenGenerater(user : userObj){
    return jwt.sign({
        userID : user.userID,
        password : user.password,
        isAdmin : false,
    },
    'mySecretKey',
    {
        expiresIn: '1h',
    }
    )

}

export default async (req :Request, res : Response)=>{
    const body = req.body;
    const [user] = await checkOut(body);
    
    if(user){
        let token = await tokenGenerater(user);
        res.status(200).json({token , user});
    }
    else{
        res.sendStatus(401);
    }
}