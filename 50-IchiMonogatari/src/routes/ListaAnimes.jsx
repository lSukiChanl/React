import { Link } from 'react-router-dom'
import React from 'react'
import EjemploJson from '../examples/Todo'

export default function ListaAnimes ({ BotonLuces }) {
  const ListaJson = EjemploJson.Search
  const Datos = ListaJson?.length > 0

  return (
    <div className='container mx-auto pt-16 pb-16'>
      {
        Datos
          ? (
            <div className='grid md:grid-cols-2 lg:grid-cols-5 gap-4'>

              {
              ListaJson.map(Lista => (
                <div key={Lista.Url}>
                  <div className='max-w-sm rounded bg-white overflow-hidden BrilloClaro dark:BrilloOscuro'>
                    <Link to='/Buscar/1'>
                      <img className='w-full rounded aspect-video' src={Lista.ImgGif} alt='ImagenGif' />
                    </Link>
                    <div className='pt-1 pb-2'>
                      <div className='text-center px-2'>
                        <Link to='/Buscar/1' className='text-sm font-bold truncate underline decoration-[pink] decoration-dotted decoration-2'>{Lista.Nombre}</Link>
                      </div>
                      <div className=' px-4 grid grid-cols-2'>
                        <p className=' text-start text-xs truncate'> {Lista.Categorias} </p>
                        <p className=' text-end text-xs truncate'> {Lista.Capitulos} Capitulos </p>
                      </div>
                      <div className=' px-4 grid grid-cols-2'>
                        <p className=' text-start text-xs truncate'> {Lista.Resolucion} </p>
                        <p className=' text-end text-xs truncate'> {Lista.Extension} </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
            </div>
            )
          : (
            <div>
              <h1> No hay datos </h1>
              <p> {ListaJson} </p>
            </div>
            )
      }

    </div>
  )
}
