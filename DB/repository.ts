import db from './database';


export async function getPosting() : Promise<any>{
    return db.query('SELECT postID, userPostCnt, nickName, image, context, like_cnt FROM postings');
}

interface inputObj{
    userID:String,
    password:String
}


export async function checkOut(who : inputObj) : Promise<any>{
    console.log(who);
    return db.query('SELECT * FROM users WHERE userID = ? and password = ?', [who.userID, who.password]);
}

export async function getComments(postID : Number) : Promise<any>{
    return db.query('SELECT * FROM comments WHERE postID = ?', [postID]);
}

interface commentObj{
    postID : Number;
    comment : String;
    nickName : String;
}

export async function postComments(comment : commentObj){
    await db.query('INSERT INTO comments (postID, comment, nickName) VALUE (?,?,?)', [comment.postID, comment.comment, comment.nickName]);
}