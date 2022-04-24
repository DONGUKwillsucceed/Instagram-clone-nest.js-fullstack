import Image from 'next/image'
import profileImg from '../public/peaches.png'
import menuImg from '../public/menu.png'
import postingImg from '../public/peachesJacket.png'
import nav0 from '../public/pb0.png'
import main11 from '../public/main11.png'
import nav1 from '../public/pb1.png'
import main2 from '../public/main2.png'
import nav2 from '../public/pb2.png'
import main3 from '../public/main3.png'
import nav3 from '../public/pb3.png'
import main4 from '../public/main4.png'
import noneicon from '../public/noneicon.png'
import postingStyles from '../styles/mainStyles/mainPB.module.css'
import { FC, useState } from 'react'
import { getComments } from '../service/comments'
import { pcProps } from '../types/objtypes'


const postingComponent : FC<pcProps> = ({nickName, like, image, context, postID, userPostCnt, modalControl, modalControl2, whichComments, whichModal,token}) =>{
    const [isHover_nav0, setIsHover_nav0] = useState(false);
    const [isHover_nav1, setIsHover_nav1] = useState(false);
    const [isHover_nav2, setIsHover_nav2] = useState(false);
    const [isHover_nav3, setIsHover_nav3] = useState(false);
    
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
    const onClick_nav1 = async()=>{
        whichModal(userPostCnt);
        const comments = await getComments(postID, token);
        whichComments(comments);
        modalControl(true);
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

    const openMenu = async()=>{
        modalControl2(true);
    }


    return(
        <div>
            <div className={postingStyles.postingBoard}>
                <div className={postingStyles.pb_header}>
                    <div className={postingStyles.userInfo}>
                        <Image src={profileImg} width='42px' height='42px'></Image>
                        <p><strong>{nickName}</strong></p>
                    </div>
                    <Image src={menuImg} onClick={openMenu}></Image>
                </div>

                <div className={postingStyles.imgContainer}>
                    <Image src= {image} width='614px' height='500px'/>
                </div>

                <div className={postingStyles.pb_footer}>
                    <div className={postingStyles.pb_f_header}>
                        <ul>
                            <li><Image
                                src={isHover_nav0 ? main11:nav0}
                                onMouseOver={onMouseOver_nav0}
                                onClick={onClick_nav0}
                                onMouseOut={onMouseOut_nav0}
                                />
                            </li>
                            <li><Image 
                                src={isHover_nav1 ? main2:nav1}
                                onMouseOver={onMouseOver_nav1}
                                onClick={onClick_nav1}
                                onMouseOut={onMouseOut_nav1}
                                />
                            </li>
                            <li><Image 
                                src={isHover_nav2 ? main3 : nav2}
                                onMouseOver={onMouseOver_nav2}
                                onMouseOut={onMouseOut_nav2}
                                />
                            </li>
                        </ul>
                        <Image src={isHover_nav3 ? main4 : nav3}
                                onMouseOver={onMouseOver_nav3}
                                onClick={onClick_nav3}
                                onMouseOut={onMouseOut_nav3}
                                />
                    </div>
                    <div> 좋아요 {like}개</div>
                    <div className={postingStyles.pb_f_main}>
                        <p><strong>{nickName}</strong></p>
                        <p>{context}</p>
                    </div>

                    <div className={postingStyles.pb_f_footer}>
                        <div className={postingStyles.commentZone}>
                            <Image src={noneicon}></Image>
                            <input className={postingStyles.comment} placeholder="댓글 달기..."/>
                        </div>
                        <button className={postingStyles.commentSubmit}>게시</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default postingComponent;