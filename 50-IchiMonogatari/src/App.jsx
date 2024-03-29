import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'
import { useEffect, useState } from 'react'

import Navbar from './components/Navbar'
import Copyright from './components/Copyright'

import ListaTodos from './routes/ListaTodo'
import ListaAnimes from './routes/ListaAnimes'
import InfoAnime from './routes/InfoAnime'
import ListaSeries from './routes/ListaSeries'
import ListaHentai from './routes/ListaHentai'
import InfoHentai from './routes/InfoHentai'
import ListaPeliculas from './routes/ListaPeliculas'
import E404 from './routes/E404'

function App () {
  const [Theme, setTheme] = useState(() => {
    const Theme = window.localStorage.getItem('theme')
    console.log('El Tema Cargado es: ' + Theme)
    return Theme ? JSON.parse(Theme) : 'dark'
  })

  useEffect(() => {
    if (Theme === 'dark') {
      console.log('Modo Oscuro')
      document.body.classList.add('dark')
    } else {
      console.log('Modo Claro')
      document.body.classList.remove('dark')
    }
  }, [Theme])

  const saveTheme = (NewTheme) => {
    console.log('Guardando Tema: ' + NewTheme)
    window.localStorage.setItem('theme', JSON.stringify(NewTheme))
  }

  const ChangeTheme = () => {
    const NewTheme = Theme === 'dark' ? 'light' : 'dark'
    setTheme(NewTheme)
    saveTheme(NewTheme)
  }

  return (
    <>
      <div className='bg-neutral-100 dark:bg-neutral-800'>
        <Router>
          <Navbar ChangeTheme={ChangeTheme} Theme={Theme} />

          <Routes>
            <Route path='/' element={<ListaTodos />} />
            <Route path='/Inicio' element={<ListaTodos />} />
            <Route path='/Animes' element={<ListaAnimes />} />
            <Route path='/InfoAnime/:id' element={<InfoAnime />} />
            <Route path='/Series' element={<ListaSeries />} />
            <Route path='/Hentai' element={<ListaHentai />} />
            <Route path='/InfoHentai/:id' element={<InfoHentai />} />
            <Route path='/Peliculas' element={<ListaPeliculas />} />
            <Route path='*' element={<E404 />} />
          </Routes>
          <Copyright />
        </Router>
      </div>

    </>
  )
}

export default App
