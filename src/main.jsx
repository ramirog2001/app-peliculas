import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { MoviesApp } from './MoviesApp'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <MoviesApp />
    </StrictMode>
  </BrowserRouter>
)
