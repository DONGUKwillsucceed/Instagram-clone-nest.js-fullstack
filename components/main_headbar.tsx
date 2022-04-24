import Image from 'next/image'
import headerStyles from '../styles/mainStyles/mainHead.module.css'
import instalogo from '../public/instagramlogo.png'
import nav0 from '../public/nav0.png'
import nav1 from '../public/nav1.png'
import nav2 from '../public/nav2.png'
import nav3 from '../public/nav3.png'
import nav4 from '../public/nav4.png'
import userIcon from '../public/UserIcon.png'
import { FC } from 'react'


const HeadBar : FC = () =>{

    const logOut = async()=>{
        location.replace('/');
        window.localStorage.clear();
    }
    return(
        <div className={headerStyles.Header}>
            <div className={headerStyles.headerBar}>
                <div className={headerStyles.Logo}>
                    <Image src={instalogo}></Image>
                </div>

                <div className={headerStyles.Search}>
                    <input type="text" placeholder="검색" />
                </div>

                <nav>
                    <ul className={headerStyles.headerNav}>
                        <li><Image src={nav0}></Image></li>
                        <li><Image src={nav1}></Image></li>
                        <li><Image src={nav2}></Image></li>
                        <li><Image src={nav3}></Image></li>
                        <li><Image src={nav4}></Image></li>
                        <li><Image src={userIcon}
                            onClick={logOut}
                        ></Image></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default HeadBar