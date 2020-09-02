import React, { useEffect, useState } from 'react'
import api from '../../services/api';

export default function Films() {

    const [films, setFilms] = useState([]);


    useEffect(() => {
        api.get('films')
            .then(result => {
                setFilms(result.data)
            });
    }, [])
    return (
        <ul>
            {films.map(film => {
                return <li>{film.title}</li>
            })}
        </ul>
    )
}
