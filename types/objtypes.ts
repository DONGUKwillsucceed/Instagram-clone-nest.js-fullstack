export interface postingsObj{
    postID : number;
    nickName : string;
    like_cnt : string;
    context : string;
    image : string;
    userPostCnt :number;
}

export interface CommentObj{
    postID : Number;
    commentID : Number;
    comment: String;
    nickName : String;
}

export interface pcProps{
    nickName : string;
    like : string;
    image : string;
    context : string;
    postID : number;
    userPostCnt : number;
    modalControl : any;
    modalControl2 : any;
    whichComments : any;
    whichModal : any;
    token : string | null;
}

export interface pmProps{
    postID : number; 
    image : string; 
    isShow : any; 
    nickName : string; 
    userNickName : string | null; 
    context :string; 
    setComments :any; 
    comments : any[]; 
    like:string;
    token:string | null;
}

export interface Data {
    comment : String;
    nickName : String | null;
}
