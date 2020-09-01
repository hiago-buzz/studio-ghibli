import React from 'react'

import Logo from '../../assets/logo.png';

import { CardHome, ImgLogo } from './style';

export default function Home() {
    return (
        <CardHome>
            <ImgLogo src={Logo} />
        </CardHome>
    )
}
