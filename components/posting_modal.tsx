import Image from 'next/image';
import mainImage from '../public/peachesJacket.png';
import userIcon from '../public/peaches.png'
import menuIcon from '../public/menu.png'
import nav0 from '../public/pb0.png'
import main11 from '../public/main11.png'
import nav1 from '../public/pb1.png'
import main2 from '../public/main2.png'
import nav2 from '../public/pb2.png'
import main3 from '../public/main3.png'
import nav3 from '../public/pb3.png'
import main4 from '../public/main4.png'
import cancel from '../public/cancel.png'
import noneicon from '../public/noneicon.png'
import modalStyles from '../styles/modalStyles/postModal.module.css'
import CmtTemplate from './comment'
import { FC, useState } from 'react';
import { postComments } from '../service/comments';
import { pmProps } from '../types/objtypes'



const posting_modal :FC<pmProps> = ({postID, image, isShow, nickName, userNickName, context, setComments, comments, like})=>{
    const [isHover_nav0, setIsHover_nav0] = useState(false);
    const [isHover_nav1, setIsHover_nav1] = useState(false);
    const [isHover_nav2, setIsHover_nav2] = useState(false);
    const [isHover_nav3, setIsHover_nav3] = useState(false);
    const [comment, setComment] = useState('');
    const onMouseOver_nav0 = async()=>{
        setIsHover_nav0(true);
    }
    const onClick_nav0 = async()=>{
        console.log('heart');
    }
    const onMouseOut_nav0 = async()=>{
        setIsHover_nav0(false);
    }
    const onMouseOver_nav1 = async()=>{
        setIsHover_nav1(true);
    }
    const onMouseOut_nav1 = async()=>{
        setIsHover_nav1(false);
    }
    const onMouseOver_nav2 = async()=>{
        setIsHover_nav2(true);
    }
    const onMouseOut_nav2 = async()=>{
        setIsHover_nav2(false);
    }

    const onClick_nav3 = async()=>{
        console.log('bookmark');
    }
    const onMouseOver_nav3 = async()=>{
        setIsHover_nav3(true);
    }
    const onMouseOut_nav3 = async()=>{
        setIsHover_nav3(false);
    }

    const closeModal = (event : any)=>{
        if(event.target === event.currentTarget){
            isShow(false);
        }
    }

    const onCommentChange = async(event : any)=>{
        setComment(event.currentTarget.value);
    }
    const cmtSubmit = async()=>{
        const token :string | null = window.localStorage.getItem('token');
        const nickName = userNickName;
        const Data = { nickName , comment}
        const comments = await postComments(postID, Data, token);
        setComments(comments); //props
    }

    return(
        
        <div className={modalStyles.commentModal} onClick={closeModal}>
            <div className={modalStyles.postingView}>
                <div className={modalStyles.pv_Photo}>
                    <Image src={image} width='700px' height='540'/>
                </div>
                <div className={modalStyles.pv_Describe}>
                    <div className={modalStyles.pv_userCompo}>
                        <div className={modalStyles.userInfo}>
                            <Image src={userIcon} width='42px' height='42px'/>
                            <p><strong>{nickName}</strong></p>
                        </div>
                        <Image src={menuIcon}/>
                    </div>

                    <div className={modalStyles.pv_textCompo}>
                        <div className={modalStyles.userInfo}>
                            <Image src={userIcon} width='42px' height='42px'/>
                            <p><strong>{nickName}</strong></p>
                        </div>
                        <div className={modalStyles.pv_context}>
                            {context}
                        </div>
                    </div>

                <ul className={modalStyles.commentLocation}>
                    {
                        comments.map(comment=>(
                            <li key={comment.comment}>
                                <CmtTemplate
                                comment={comment.comment}
                                nickName={comment.nickName}
                                />
                                </li>
                        ))
                    }
                </ul>

                <div className={modalStyles.pv_footer}>
                    <div className={modalStyles.pb_f_header}>
                        <ul>
                            <li>
                                <Image
                                src={isHover_nav0 ? main11:nav0}
                                onMouseOver={onMouseOver_nav0}
                                onClick={onClick_nav0}
                                onMouseOut={onMouseOut_nav0}
                                />
                            </li>
                            <li>
                                <Image 
                                src={isHover_nav1 ? main2:nav1}
                                onMouseOver={onMouseOver_nav1}
                                onMouseOut={onMouseOut_nav1}
                                />
                            </li>
                            <li>
                                <Image 
                                src={isHover_nav2 ? main3 : nav2}
                                onMouseOver={onMouseOver_nav2}
                                onMouseOut={onMouseOut_nav2}
                                />
                            </li>
                        </ul>
                        <Image 
                        src={isHover_nav3 ? main4 : nav3}
                        onMouseOver={onMouseOver_nav3}
                        onClick={onClick_nav3}
                        onMouseOut={onMouseOut_nav3}
                        />
                    </div>
                    <div>좋아요 {like}개</div>

                        <div className={modalStyles.pv_w_Comment}>
                            <Image src={noneicon}/>
                            <input 
                            className={modalStyles.commentInput} 
                            placeholder="댓글 달기..." 
                            onChange={onCommentChange}
                            />
                            <p onClick={cmtSubmit}>게시</p>
                        </div>
                    </div>
                </div>
                <div className={modalStyles.cancelBtn}>
                    <Image src={cancel}/>
                </div>
            </div>
        </div>
    
    )
}

export default posting_modal;