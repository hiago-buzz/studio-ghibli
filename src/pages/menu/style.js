import styled from './node_modules/styled-components'
import { globalStyle } from '../../variables';

export const BackgroundMenu = styled.div`
    width: 320px;
    height: 100vh;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    font-family: Arial, Helvetica, sans-serif;

    background-color: ${globalStyle.colorBlue};
  
`;

export const TitleMenu = styled.h1`
    color: #FFF;
    font-size: 2rem;
`;

export const ListMenu = styled.li`
    color: #FFF;
    margin: 10px 0;
    list-style:none;
    
    cursor: pointer;

    &:hover {
        transition: opacity 0.3s;
        opacity: 0.7;
    }
`