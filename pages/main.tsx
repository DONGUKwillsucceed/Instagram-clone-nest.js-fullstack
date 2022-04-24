import MainHeader from '../components/main_headbar'
import StoryComponent from '../components/main_story'
import PostingComponent from '../components/main_posting'
import RightComponent from '../components/main_right'
import mainStyles from '../styles/mainStyles/main.module.css'
import PostingModal from '../components/posting_modal'
import MenuModal from '../components/menu_modal'
import { FC, useEffect, useState } from 'react'
import { postingsObj } from '../types/objtypes'


export async function getStaticProps(){
    const res = await fetch('http://localhost:3000/api/posting');
    const postings = await res.json();


    return {
        props: {
            postings,
        }
    }
}

const mainPage : FC<{postings : postingsObj[]}> = ({ postings})=>{

    const [data, setData] = useState<string |null>("");
    const [token, setToken] = useState<string | null>(""); 

    useEffect(() => {
        setData(localStorage.getItem("nickName"));
        setToken(localStorage.getItem("token"));
    }, []);


    postings = postings.filter((posting)=> posting.nickName === data);

    const [show, setShow] = useState<boolean>(false);
    const [show2, setShow2] = useState<boolean>(false);
    const [userPostCnt, setUserPostCnt] = useState<number>(0);
    const [comments, setComments] = useState<any>();
    return (
        <div>
            <header className={mainStyles.headComponent}>
                <MainHeader></MainHeader>
            </header>
            <main className={mainStyles.mainComponent}>
                <div className={mainStyles.leftComponent}>
                    <StoryComponent/>
                    <ul className={mainStyles.postingBoard}>
                        {postings.map((posting)=>(
                            <li key={posting.postID}>
                                <PostingComponent 
                                nickName={posting.nickName} 
                                like={posting.like_cnt}
                                image={posting.image}
                                context={posting.context}
                                postID={posting.postID}
                                userPostCnt={posting.userPostCnt}
                                modalControl={setShow} 
                                modalControl2={setShow2}
                                whichComments={setComments}
                                whichModal={setUserPostCnt}
                                token={token}
                                /></li>
                        ))}
                    </ul>
                </div>
                
                <RightComponent/>
            </main>
            {show && <PostingModal 
                        isShow={setShow} 
                        userNickName={data}
                        nickName={postings[userPostCnt-1].nickName} 
                        image={postings[userPostCnt-1].image}
                        like={postings[userPostCnt-1].like_cnt} 
                        context={postings[userPostCnt-1].context}
                        postID={postings[userPostCnt-1].postID}
                        comments={comments}
                        setComments={setComments}
                        token={token}
                    />}
            {show2 && <MenuModal isShow={setShow2}/>}
        </div>
    )
}

export default mainPage