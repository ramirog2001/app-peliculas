import { Navigate, Route, Routes } from 'react-router-dom'
import { SearchScreen } from './pages/SearchScreen'
import { MovieScreen } from './pages/MovieScreen'
import './MoviesApp.css'

export const MoviesApp = () => {
    const urlBase = 'https://api.themoviedb.org/3'
    const apiKey = ''

    return (

        <Routes>
            <Route path='/' element={<SearchScreen apiKey={apiKey} urlBase={urlBase} />}></Route>
            <Route path='/movie/:id' element={<MovieScreen apiKey={apiKey} urlBase={urlBase} />}></Route>
        </Routes >
    )

}
