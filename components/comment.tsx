import Image from 'next/image'
import { FC } from 'react'
import profileImg from '../public/peaches.png'
import commentStyles from '../styles/modalStyles/comment.module.css'

const comment: FC<{nickName : string; comment : string}> = ({nickName, comment})=>{
    return(
        <div>
            <div className={commentStyles.comment}>
                <div className={commentStyles.userInfo}>
                    <Image src={profileImg} width='42px' height='42px'/>
                    <p className={commentStyles.userName}><strong>{nickName}</strong></p>
                </div>
                <div className={commentStyles.co_context}><p>{comment}</p></div>
            </div>
        </div>
    )
}

export default comment;