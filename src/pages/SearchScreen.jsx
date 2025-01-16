import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const SearchScreen = ({ apiKey, urlBase }) => {

    const [nombrePelicula, setNombrePelicula] = useState('')
    const [movies, setMovies] = useState()

    const navigate = useNavigate();

    const maxOverviewLength = 200

    const fetchMovies = async () => {

        try {
            const response = await fetch(urlBase + '/search/movie?query=' + nombrePelicula + '&api_key=' + apiKey + '&language=es-ES')
            const data = await response.json()
            setMovies(data.results)
            
        } catch (error) {
            console.error(error)
        }
    }


    const handleInputChange = ({ target }) => {
        setNombrePelicula(target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetchMovies()
    }

    const handleMovieClick = (movie) => {
        console.log('clicked')
        navigate(`/movie/${movie.id}`)
    }

    return (
        <div className="container">
            <h1>Buscador de Películas</h1>
            <form onSubmit={handleSubmit}>
                <input
                    id="inputNombrePelicula"
                    type="text"
                    name="nombrePelicula"
                    placeholder='Escribí el nombre de una película'
                    value={nombrePelicula}
                    onChange={handleInputChange}
                />
                <button type="submit">Buscar</button>
            </form>
            <div className="movie-list">
                {
                    movies?.map(movie => (
                        movie.overview &&
                        <div key={movie.id} className='movie-card' onClick={() => handleMovieClick(movie)}>
                            {movie.poster_path && <img src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} alt={movie.title} />}
                            <h2>{movie.title}</h2>
                            <p>{movie.overview.slice(0, maxOverviewLength)}{movie.overview.length > maxOverviewLength && '...'}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )

}