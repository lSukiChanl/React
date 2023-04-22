import { useState, useEffect } from 'react'
import './App.css'

const FollowMouse = () => {
  const [Activado, setActivado] = useState(false)
  const [Posicion, setPosicion] = useState({ x: 0, y: 0 })
  useEffect(() => {
    console.log('Efecto', { Activado })

    const handleMove = (event) => {
      const { clientX, clientY } = event
      setPosicion({ x: clientX, y: clientY })
    }

    if (Activado) window.addEventListener('pointermove', handleMove)

    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [Activado])

  return (
    <main>
      <div style={{
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        border: '2px solid #fff',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
        transform: `translate(${Posicion.x}px, ${Posicion.y}px)`
      }}
      />
      <button onClick={() => setActivado(!Activado)}>
        {Activado ? 'Desactivar' : 'Activar'}
      </button>
    </main>
  )
}

function App () {
  const [mount, setMount] = useState(false)
  return (
    <>
      {mount && <FollowMouse />}
      <button onClick={() => setMount(!mount)}>
        {mount ? 'Desmontar' : 'Montar'}
      </button>
    </>
  )
}

export default App
