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
    height: ${({ cover }) => {
        return cover ? "640px" : "300px";
    }};
    background-color: var(--color-light);
    border-radius: 10px;
    box-shadow: var(--panel-shadow);
    margin: 10px;

    cursor: pointer;
`;
export const DiscriptionArea = styled.div`
    height: 120px;
    display: inline-block;
    overflow: hidden !important;
    text-overflow: ellipsis;
    margin: 10px 10px 0 10px;
`;

export const TitleFilm = styled.h1`
    font-size: 26px;
    text-align: center;
    margin: 10px 10px 0 10px;

    color: var(--color-brown);
`;

export const CoverFilm = styled.img`
    width: 100%;
    padding: 10px;
`
