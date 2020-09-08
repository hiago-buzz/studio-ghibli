import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import covers from '../../utils/covers';
import {
    Container,
    CardFilm,
    TitleFilm,
    DiscriptionArea,
    CoverFilm
} from './style';


export default function Films() {

    const [films, setFilms] = useState([]);

    useEffect(() => {
        api.get('films')
            .then(result => {
                setFilms(result.data)
            });
    }, [])
    return (
        <>
            <TitleFilm>Filmes</TitleFilm>
            <Container>
                {films.map(film => {
                    return <CardFilm key={film.id} cover={covers[film.title]}>
                        <TitleFilm>{film.title}</TitleFilm>
                        <DiscriptionArea>
                            <p style={{ fontSize: "10px", lineHeight: 2 }}>
                                {film.description}
                            </p>
                        </DiscriptionArea>
                        {covers[film.title] &&
                            <CoverFilm src={require(`../../assets/covers/${covers[film.title]}`)} />
                        }
                        <strong style={{ fontSize: "10px", margin: "10px", textAlign: "bottom" }}>
                            Diretor: {film.director}
                        </strong>
                    </CardFilm>
                })}
            </Container>
        </>
    )
}
