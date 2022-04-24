import mainComponent from '../styles/mainStyles/mainLeft.module.css'
import Image from 'next/image';
import profileImg from '../public/peaches.png'
import { FC } from 'react';
const leftPart : FC = () =>{
    return(
        <div className={mainComponent.leftBoard}>
            <div className={mainComponent.storyBoard}>
                <div className={mainComponent.story}>
                    <Image src={profileImg}></Image>
                    <p className={mainComponent.storyName}>Peaches.Uni</p>
                </div>
            </div>
        </div>
    )
}

export default leftPart;