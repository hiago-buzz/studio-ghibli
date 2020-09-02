import React from 'react';
import { Link } from 'react-router-dom';
import { BackgroundMenu, TitleMenu, ListMenu } from './style';

const Menu = () => {

    return (
        <BackgroundMenu>
            <Link to="/" style={{textDecorationLine: "none"}}>
                <TitleMenu>Studio Ghibli</TitleMenu>
            </Link>
            <ul>
                <ListMenu>
                    <Link to="/films">
                        Filmes
                    </Link>
                </ListMenu>
                <ListMenu>Personagens</ListMenu>
                <ListMenu>Lugares</ListMenu>
                <ListMenu>Veiculos</ListMenu>
            </ul>
        </BackgroundMenu>
    )
}

export default Menu;