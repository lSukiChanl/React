import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function NavbarT ({ ChangeTheme, Theme }) {
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
    <section>

      <div className=' border-2 border-solid border-neutral-300 bg-neutral-100 dark:border-neutral-900 dark:bg-neutral-800'>
        <div className=' border-width: 8px container mx-auto'>
          <div className='flex justify-between px-1'>

            <div className='flex items-center py-3'>
              <Link className='font-bold text-2xl text-neutral-800 hover:text-neutral-500 dark:text-[#00FFFF] dark:hover:text-[#FFC0CB] focus:hover:text-[#FFC0CB]' to='/Inicio'> ❤ IchiMonogatari ❤ </Link>
            </div>

            <div className='hidden lg:flex items-center space-x-1'>
              <Link className='font-bold text-xl text-neutral-800 hover:text-neutral-500 dark:text-[#FFC0CB] dark:hover:text-[#00FFFF] DarkNavEnlaces px-3' to='/Inicio'>Inicio</Link>
              <Link className='font-bold text-xl text-neutral-800 hover:text-neutral-500 dark:text-[#FFC0CB] dark:hover:text-[#00FFFF] DarkNavEnlaces px-3' to='/Anime'>Animes</Link>
              <Link className='font-bold text-xl text-neutral-800 hover:text-neutral-500 dark:text-[#FFC0CB] dark:hover:text-[#00FFFF] DarkNavEnlaces px-3' to='/Series'>Series</Link>
              <Link className='font-bold text-xl text-neutral-800 hover:text-neutral-500 dark:text-[#FFC0CB] dark:hover:text-[#00FFFF] DarkNavEnlaces px-3' to='/Pelicula'>Peliculas</Link>
              <Link className='font-bold text-xl text-neutral-800 hover:text-neutral-500 dark:text-[#FFC0CB] dark:hover:text-[#00FFFF] DarkNavEnlaces px-3' to='/Hentai'>Hentai</Link>
              <Link className='font-bold text-xl text-neutral-800 hover:text-neutral-500 dark:text-[#FFC0CB] dark:hover:text-[#00FFFF] DarkNavEnlaces px-3' to='/Mangas'>Mangas</Link>
              <Link className='font-bold text-xl text-neutral-800 hover:text-neutral-500 dark:text-[#FFC0CB] dark:hover:text-[#00FFFF] DarkNavEnlaces px-3' to='/Doujinshi'>Doujinshi</Link>
              {
                Theme === 'light'
                  // eslint-disable-next-line operator-linebreak
                  ?
                    <button className='font-bold text-xl text-neutral-800 hover:text-neutral-500 dark:text-[#FFC0CB] dark:hover:text-[#00FFFF] px-3' onClick={ChangeTheme}>
                      <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6'>
                        <path strokeLinecap='round' strokeLinejoin='round' d='M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z' />
                      </svg>
                    </button>
                  // eslint-disable-next-line operator-linebreak
                  :
                    <button className='font-bold text-xl text-neutral-800 hover:text-neutral-500 dark:text-[#FFC0CB] dark:hover:text-[#00FFFF] px-3' onClick={ChangeTheme}>
                      <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6'>
                        <path strokeLinecap='round' strokeLinejoin='round' d='M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z' />
                      </svg>
                    </button>
              }
            </div>

            <div className='hidden lg:flex items-center space-x-1'>
              <label className='relative block'>
                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6'>
                    <path strokeLinecap='round' strokeLinejoin='round' d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z' />
                  </svg>
                </div>

                <input
                  onChange={Busqueda} className='sm:text-sm pl-12 py-2 font-bold border-neutral-500 border-2 text-neutral-800 w-full
                  rounded-md shadow-sm focus:outline-none focus:border-neutral-600 focus:ring-neutral-600 dark:focus:border-[#FFC0CB] dark:focus:ring-[#FFC0CB] focus:ring-1' placeholder='BakeMonogatari ...' type='text' name='Busqueda' id='Busqueda'
                />
              </label>
            </div>

            <div className='hidden lg:hidden items-center space-x-1'>
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

    </section>
  )
}
