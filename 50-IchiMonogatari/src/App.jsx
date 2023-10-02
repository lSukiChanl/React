import { useEffect, useState } from 'react'

import Navbar from './components/Navbar'
import Banner from './components/Banner'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

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
          </Routes>

        </Router>
      </div>
    </>
  )
}

export default App
