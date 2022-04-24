import { Request, Response } from 'express';
import { getComments, postComments } from '../../../DB/repository';
import tokenValidation from '../../../middleware/validation';
import {CommentObj} from '../../../types/objtypes'


export default async (req : Request, res : Response)=>{
    const result = tokenValidation(req, res);
    if(!result){
        res.sendStatus(403);
    }
    if(req.method === 'GET'){    
        const ID : any = req.query.id;
        console.log(ID[0]);
        const postID = parseInt(ID[0]);
        const pcomments : CommentObj[] = await getComments(postID); 
        console.log(pcomments);
        res.status(200).json(pcomments);
    }
    else if(req.method === 'POST'){
        const ID : any = req.query.id;
        const postID = parseInt(ID);
        const {comment, nickName} = req.body;
        const ncomment = {postID, commentID : 4, comment, nickName};
        await postComments(ncomment);
        const pcomments : CommentObj[] = await getComments(postID);
        console.log(pcomments);
        res.status(200).json(pcomments);
    }
    else{
        res.status(500).json({"status":"500"});
    }
}