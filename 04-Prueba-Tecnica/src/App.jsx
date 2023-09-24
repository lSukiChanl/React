import { useState, useEffect } from 'react'
import './App.css'
import { ApiCat } from './services/EndPoints'

// eslint-disable-next-line no-unused-vars
import { GenerarFactFetch, GenerarFactPromise,  GenerarFactAxios } from './services/GenerarFact'
// eslint-disable-next-line no-unused-vars
import { GenerarIMGAFetch, GenerarIMGPromise, GenerarIMGAxios } from './services/GenerarIMG'

function App() {

  const [Fact, setFact] = useState()
  const [Image, setImage] = useState()


  useEffect(() => {
    GenerarFactAxios().then(setFact)
  }, [])

  useEffect(() => {
    if(!Fact) return
    GenerarIMGAxios(Fact.split(' ').slice(0,3).join(' ')).then(setImage)
  }, [Fact])


  const handleClick = async ()  => {
    GenerarFactAxios().then(setFact)
  }

  return (
    <main>
      <h4>Prueba Tecnica</h4>
      {Fact && <p>{Fact}</p>}
      {Image && <img src={ApiCat + Image} alt="Cat" height='200px'/>}
      <br/>
      <button onClick={() => {handleClick()}} > Generar Nuevo </button>

    </main>
  )
}

export default App
