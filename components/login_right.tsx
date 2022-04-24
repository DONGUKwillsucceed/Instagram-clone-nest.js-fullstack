import Image from 'next/image'
import downloadImage from '../public/앱다운로드.png'
import faceboockIcon from '../public/facebooklogo.png'
import rightStyles from '../styles/loginStyles/loginRight.module.css'
import { FC, useState } from 'react'
import { signIn } from '../service/auth'



const rightpart : FC = () =>{

    const [userID, setUserID]=useState('');
    const [password, setPassword]=useState('');

    const onSubmit = async(event : any)=>{
        event.preventDefault();
        console.log('submitted!');
        const response = await signIn(userID, password);
        if(response.status === 200){
            const {token, user} = await response.json();
            window.localStorage.setItem('token', token);
            window.localStorage.setItem('nickName', user.nickName);
            window.localStorage.setItem('userName', user.userName);
            location.replace('/main');
        }
        else{
            alert('Wrong Input');
        }
    }

    const onUserIDChange = (event : any)=>{
        setUserID(event.currentTarget.value);
    }
    const onPasswordChange = (event : any)=>{
        setPassword(event.currentTarget.value);
    }
    return(
        <div className={rightStyles.mainComponent}>
            <div className={rightStyles.loginComponent}>

                <h1 className={rightStyles.logoFont}>Instagram</h1>

                <div>
                    <form className={rightStyles.loginElement} onSubmit={onSubmit}>
                        <div>
                            <input 
                                className={rightStyles.loginInput}
                                type="text" 
                                placeholder='전화번호,사용자 이름, 또는 이메일'
                                onChange={onUserIDChange}
                            />
                        </div>
                        <div>
                            <input 
                                className={rightStyles.loginInput} 
                                type="password" 
                                placeholder='비밀번호'
                                onChange={onPasswordChange}
                                /> 
                        </div>
                        <div>
                            <button className={rightStyles.loginBtn} type="submit" >로그인</button>
                        </div>
                        <div className={rightStyles.crossBlock}>
                            <div></div>
                            <p>또는</p>
                            <div></div>
                        </div>
                        <div className={rightStyles.facebook}>
                            <Image src={faceboockIcon}></Image>
                            <p><strong>Facebook으로 로그인</strong></p>
                        </div>
                        <div>
                            <p className={rightStyles.isForget}>비밀번호를 잊으셨나요?</p>
                        </div>
                        
                    </form>
                </div>

            
            </div>
            <div className={rightStyles.signupComponent}>
                <p>계정이 없으신가요? </p>
                <p className={rightStyles.anchorSignup}>가입하기</p>
            </div>
            <div className={rightStyles.downloadComponent}>
                <div>앱을 다운로드 하세요.</div>
                <Image src={downloadImage}></Image>
            </div>
        </div>
    )
}

export default rightpart