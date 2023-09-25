import { useState } from 'react'

import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Banner18 from './components/Banner18'
import Copyright from './components/Copyright'

import Luces from './components/Luces'

import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'
import ListaAnimes from './routes/ListaAnimes'

function App () {
  const [BotonLuces, setBotonLuces] = useState(false)

  const Interruptor = () => {
    setBotonLuces(current => !current)
  }

  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path='/' element={<Banner />} />
          <Route path='/Inicio' element={<Banner />} />
          <Route path='/Anime' element={<Banner />} />
          <Route path='/Hentai' element={<Banner18 />} />
          <Route path='*' element={<Outlet />} />
        </Routes>

        <Luces BotonLuces={BotonLuces} Interruptor={Interruptor} />

        <div className={`pb-5 ${BotonLuces ? 'bg-neutral-200' : 'bg-neutral-800'}`}>
          <Routes>
            <Route path='/' element={<Outlet />} />
            <Route path='/Inicio' element={<Outlet />} />
            <Route path='/Anime' element={<ListaAnimes />} />
            <Route path='*' element={<Outlet />} />
          </Routes>
          <Copyright />

        </div>

      </Router>
    </>
  )
}

export default App
