import { FC } from 'react'
import footerStyle from '../styles/loginStyles/loginFooter.module.css'
const footer : FC = ()=>{
    return(
        <nav className={footerStyle.list}>
            <ul>
                <li>Meta</li>
                <li>소개</li>
                <li>블로그</li>
                <li>채용정보</li>
                <li>도움말</li>
                <li>API</li>
                <li>개인정보처리방침</li>
                <li>약관</li>
                <li>인기 계정</li>
                <li>해시태그</li>
                <li>위치</li>
            </ul>
            <ul>
                <li>댄스</li>
                <li>식음료</li>
                <li>집 및 정원</li>
                <li>음악</li>
                <li>시각 예술</li>
            </ul>
            <ul>
                <li>한국어</li>
                <li>2022 Instagram from Meta</li>
            </ul>
        </nav>
    )
}

export default footer