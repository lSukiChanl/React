import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'

import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Copyright from './components/Copyright'

import E404 from './routes/E404'
import ListaTodo from './routes/ListaTodo'

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
          <Banner Theme={Theme} />
          <Routes>
            <Route path='/' element={<ListaTodo />} />
            <Route path='/Inicio' element={<ListaTodo />} />
            <Route path='*' element={<E404 />} />
          </Routes>
          <Copyright />
        </Router>

      </div>

    </>
  )
}

export default App
