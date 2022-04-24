import modalStyles from '../styles/modalStyles/menuModal.module.css'
import classNames from 'classnames'
import { FC } from 'react';

const menuModal: FC<{isShow : any}> = ({isShow})=>{

    const closeModal = (event : any)=>{
        if(event.target === event.currentTarget){
            isShow(false);
        }
    }

    return(
        <div className={modalStyles.menuModal} onClick={closeModal}>
        <div className={modalStyles.modalBox}>
            <div className={classNames([modalStyles.mb_option], [modalStyles.mb_red])}><p>신고</p></div>
            <div className={classNames([modalStyles.mb_option], [modalStyles.mb_red])}><p>팔로우 취소</p></div>
            <div className={modalStyles.mb_option}><p>게시물로 이동</p></div>
            <div className={modalStyles.mb_option}><p>태그된 계정</p></div>
            <div className={modalStyles.mb_option}><p>공유 대상</p></div>
            <div className={modalStyles.mb_option}><p>링크 복사</p></div>
            <div className={modalStyles.mb_option}><p>퍼가기</p></div>
            <div className={modalStyles.mb_option}><p>취소</p></div>
        </div>
    </div>
    )
}

export default menuModal