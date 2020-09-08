import styled from 'styled-components'


export const Container = styled.main`
    width: 100vw;
    overflow-y: auto;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap:wrap;
`
export const CardFilm = styled.div`
    width: 300px;
    height: 230px;;
    border-radius: 10px;
    box-shadow: var(--panel-shadow);
    margin: 10px;
`;