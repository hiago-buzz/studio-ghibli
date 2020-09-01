import React from 'react';
import { BackgroundMenu, TitleMenu, ListMenu } from './style';

const Menu = () => {

    return (
        <BackgroundMenu>
            <TitleMenu >Studio Ghibli</TitleMenu>
            <ul>
                <ListMenu>
                    Filmes
                </ListMenu>
                <ListMenu>Personagens</ListMenu>
                <ListMenu>Lugares</ListMenu>
                <ListMenu>Veiculos</ListMenu>
            </ul>
        </BackgroundMenu>
    )
}

export default Menu;