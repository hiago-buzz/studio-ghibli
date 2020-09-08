import styled from 'styled-components'

export const Container = styled.div`
    width: 320px;
    height: 100vh;
    
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: var(--color-primary);

    transition: display 0.3s;
    transition-delay: 0.5s;
    
`;

export const TitleMenu = styled.h1`
    color: var(--color-light);
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