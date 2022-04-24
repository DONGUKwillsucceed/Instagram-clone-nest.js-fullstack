import Image from 'next/image'
import userIcon from '../public/peaches.png'
import noneIcon from '../public/noneicon.png'
import rightStyles from '../styles/mainStyles/mainRight.module.css'
import { FC, useEffect, useState } from 'react'


const rightPart : FC = () =>{
    const [nickName, setNickName] = useState<string | null>('none');
    const [userName, setUserName] = useState<string | null>('none');

    useEffect(()=>{
        setNickName(window.localStorage.getItem('nickName'));
        setUserName(window.localStorage.getItem('userName'));
    })


    return(
        <div>
            <div className={rightStyles.mainComponent}>
                <div className={rightStyles.accountCompo}>
                    <div className={rightStyles.accountInfo}>
                        <Image src={userIcon}></Image>
                        <div className={rightStyles.spaceNI}>
                            <p>{nickName}</p>
                            <p className={rightStyles.coment}>{userName}</p>
                        </div>
                    </div>
                    <p className={rightStyles.buttonP}>전환</p>
                </div>
                <div >
                    <div className={rightStyles.recommendationForMe}>
                        <p>회원님을 위한 추천</p>
                        <p>모두 보기</p>
                    </div>
                    <div className={rightStyles.recommendedPeople}>
                        <div className={rightStyles.peopleInfo}>
                            <Image src={noneIcon}></Image>
                            <div className={rightStyles.spaceNI}>
                                <p>Peaches</p>
                                <p className={rightStyles.rcoment}>Dowon님이 팔로우합니다.</p>
                            </div>
                        </div>
                        <p className={rightStyles.buttonP}>팔로우</p>
                    </div>
                </div>
                <div className={rightStyles.licenseCompo}>
                    <nav>
                        <ul>
                            <li>소개</li>
                            <li>도움말</li>
                            <li>홍보센터</li>
                            <li>API</li>
                            <li>채용 정보</li>
                            <li>개인정보처리방침</li>
                            <li>약관</li>
                            <li>위치</li>
                            <li>인기계정</li>
                            <li>해쉬태그</li>
                            <li>언어</li>
                        </ul>
                    </nav>
                    <p>&copy 2022 INSTAGRAM FROM META</p>
                </div>
            </div>
        </div>
    )
}

export default rightPart;