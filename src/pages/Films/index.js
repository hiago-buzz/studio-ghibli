import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { Container, CardFilm } from './style';


export default function Films() {

    const [films, setFilms] = useState([]);


    useEffect(() => {
        api.get('films')
            .then(result => {
                setFilms(result.data)
            });
    }, [])
    return (
        <Container>
            {films.map(film => {
                return <CardFilm key={film.id}>{film.title}</CardFilm>
            })}

            <ul>

            </ul>
        </Container>
    )
}
