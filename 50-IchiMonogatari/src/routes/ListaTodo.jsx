import React from 'react'
import EjemploJson from '../examples/Todo'

export default function ListaTodo ({ BotonLuces }) {
  const ListaJson = EjemploJson.Search
  const Datos = ListaJson?.length > 0

  return (
    <div className='container mx-auto pt-5'>
      {
        Datos
          ? (
            <div className='grid md:grid-cols-2 lg:grid-cols-5 gap-4'>

              {
              ListaJson.map(Lista => (
                <div key={Lista.Url}>
                  <div className='max-w-sm rounded bg-white overflow-hidden BrilloClaro dark:BrilloOscuro '>
                    <img className='w-full h- rounded' src={Lista.ImgGif} alt='ImagenGif' />
                    <div className='px-2 py-2'>
                      <div className='font-bold text-center truncate '>{Lista.Nombre} </div>
                    </div>
                    <div className='px-2 py-0'>
                      <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>{Lista.Generos}</span>
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
