import { useEffect, useState } from 'react'

import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Copyright from './components/Copyright'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

/// Rutas
import ListaTodo from './routes/ListaTodo'
import ListaAnimes from './routes/ListaAnimes'
import ListaHentais from './routes/ListaHentais'
import ListaPeliculas from './routes/ListaPeliculas'
import E404 from './routes/E404'

function App () {
  const [BotonLuces, setBotonLuces] = useState(false)
  const [DarkMode, setDarkMode] = useState(true)

  const Interruptor = () => {
    setBotonLuces(current => !current)
  }

  const handleClick = () => {
    console.log('DarkMode: ' + !DarkMode)
    setDarkMode(!DarkMode)
    if (!DarkMode) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }

  useEffect(() => {
    if (DarkMode) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }, [DarkMode])

  return (
    <>
      <div className='text-s'>  </div>
      <div className='bg-neutral-100 dark:bg-neutral-800'>
        <Router>
          <Navbar BotonLuces={BotonLuces} Interruptor={Interruptor} handleClick={handleClick} />

          <Routes>
            <Route path='/' element={<Banner />} />
            <Route path='/Inicio' element={<Banner />} />
            <Route path='/Anime' element={<Banner />} />
            <Route path='/Pelicula' element={<Banner />} />
            <Route path='/Hentai' element={<Banner />} />
            <Route path='*' element={<Banner />} />
          </Routes>

          <div className={`pb-5 ${BotonLuces ? 'bg-neutral-200' : 'bg-neutral-800'}`}>
            <Routes>
              <Route path='/' element={<ListaTodo />} />
              <Route path='/Inicio' element={<ListaTodo />} />
              <Route path='/Anime' element={<ListaAnimes />} />
              <Route path='/Pelicula' element={<ListaPeliculas />} />
              <Route path='/Hentai' element={<ListaHentais />} />
              <Route path='*' element={<E404 />} />
            </Routes>
            <Copyright />
          </div>

        </Router>
      </div>
    </>
  )
}

export default App
