import React, { createRef, useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'

export const MovieScreen = ({ urlBase, apiKey }) => {
    const { id } = useParams()
    const [movie, setMovie] = useState()

    const fetchMovie = async () => {
        try {
            const response = await fetch(`${urlBase}/movie/${id}?api_key=${apiKey}`)
            const data = await response.json()
            setMovie(data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchMovie()
    }, [])

    useEffect(() => {
        if (movie?.poster_path)
            document.body.style.backgroundImage = `url("https://image.tmdb.org/t/p/w500${movie.backdrop_path}")`
            document.body.style.position = 'absolute'
        

        return () => {
            document.body.style.backgroundImage = ''
            document.body.style.position = ''
        }
    }, [movie])


    console.log(movie)

    if (movie) {
        return (
            <div className="container">
                <NavLink to='/'>Volver a Home</NavLink>
                <h1>{movie.title}</h1>
                {movie.poster_path && <img src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} alt={movie.title} />}
                {movie.overview && <p>{movie.overview}</p>}
            </div>
        )

    }

    else return <p>Loading...</p>

}
