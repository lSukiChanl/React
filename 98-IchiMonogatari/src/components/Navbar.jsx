import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import '../styles/Navbar.css'

export default function Banner () {
  const [Lista, setLista] = useState(false)
  const navigate = useNavigate()

  function Busqueda () {
    const Direcccion = document.getElementById('Busqueda').value
    navigate('/Buscar/' + Direcccion, { replace: true })
  }

  function BusquedaCelular () {
    const Direcccion = document.getElementById('BusquedaMin').value
    navigate('/Buscar/' + Direcccion, { replace: true })
  }

  const MostrarLista = () => {
    setLista(current => !current)
  }

  return (
    <div className='bg-neutral-800'>
      <div className='container mx-auto px-8'>
        <div className='flex justify-between'>

          <div className='flex items-center py-3 px-3'>
            <Link className='TituloNav' to='/Inicio'> ❤ IchiMonogatari ❤ </Link>
          </div>
          <div className='hidden lg:flex items-center space-x-1'>
            <Link className='EnlacesNav px-3' to='/Inicio'>Inicio</Link>
            <Link className='EnlacesNav px-3' to='/Anime'>Animes</Link>
            <Link className='EnlacesNav px-3' to='/Pelicula'>Peliculas</Link>
            <Link className='EnlacesNav px-3' to='/Hentai'>Hentai</Link>
            <Link className='EnlacesNav px-3' to='/Discord&Bot'>Discord&Bots</Link>
            <Link className='EnlacesNav px-3' to='/Comando'>Comandos </Link>
          </div>
          <div className='hidden lg:flex items-center space-x-1'>
            <label className='relative block'>
              <span className='sr-only'>Search</span>
              <span className='absolute inset-y-0 left-0 flex items-center pl-2'>
                <i className='fas fa-search ColorPink' />
              </span>
              <input onChange={Busqueda} className='placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm' placeholder='Buscar...' type='text' name='Busqueda' id='Busqueda' />
            </label>
          </div>

          <div className=' lg:hidden items-center space-x-1'>
            <button onClick={MostrarLista} className='mt-4' type='button' aria-expanded='false' aria-label='Toggle navigation'>
              <i className='fas fa-bars ColorPink' />
            </button>
          </div>

        </div>

        <div className='' style={{ display: Lista ? '' : 'none' }}>
          <Link className='EnlacesNav block px-3 py-2 hover:bg-neutral-700' to='/Inicio'>Inicio</Link>
          <Link className='EnlacesNav block px-3 py-2 hover:bg-neutral-700' to='/Animes'>Animes</Link>
          <Link className='EnlacesNav block px-3 py-2 hover:bg-neutral-700' to='/Peliculas'>Peliculas</Link>
          <Link className='EnlacesNav block px-3 py-2 hover:bg-neutral-700' to='/Hentais'>Hentai</Link>
          <Link className='EnlacesNav block px-3 py-2 hover:bg-neutral-700' to='/Discord&Bots'>Discord&Bots</Link>
          <Link className='EnlacesNav block px-3 py-2 hover:bg-neutral-700' to='/Comandos'>Comandos </Link>
          <input onChange={BusquedaCelular} className='placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm' placeholder='Buscar...' type='text' name='BusquedaMin' id='BusquedaMin' />
          <br />
        </div>

      </div>
    </div>
  )
}
