import { Request, Response } from 'express';
import { getPosting } from '../../DB/repository';
import tokenValidation from '../../middleware/validation';

export default async (req : Request, res : Response)=>{
    const result = tokenValidation(req, res);
    if(!result){
        res.sendStatus(403);
    }
    const postings = await getPosting();
    console.log(postings);
    res.status(200).json(postings);
}