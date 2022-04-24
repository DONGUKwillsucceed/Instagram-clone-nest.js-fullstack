import instagramPhone from '../public/instagramPhone.png'
import Image from 'next/image'
import { FC } from 'react'
const leftpart : FC = () =>{
    return(
        <div>
            <Image src={instagramPhone}></Image>
        </div>
    )
}

export default leftpart