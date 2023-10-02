import React from 'react'
import EjemploJson from '../examples/Todo'

export default function ListaTodo ({ BotonLuces }) {
  const ListaJson = EjemploJson.Search
  const Datos = ListaJson?.length > 0

  return (
    <div className='container mx-auto pt-5'>
      Soy Lista Todo

      {
        Datos
          ? (
            <ul>
              {
              ListaJson.map(Lista => (
                <li key={Lista.Url}>
                  <h1> {Lista.Nombre} </h1>
                </li>
              ))
            }
            </ul>
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
