import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {

  const [Fact, setFact] = useState()
  const [Image, setImage] = useState()
  const [Generar, setGenerar] = useState(true)

  const ApiFact = 'https://catfact.ninja/fact'
  const ApiCat = 'https://cataas.com'

  /// Usando Fetch
  /*useEffect(() => {
    fetch(ApiFact)
      .then(response => response.json())
      .then(data => {
        const { fact } = data
        setFact(fact)
        console.log(fact)
      })
  }, [Generar])

  useEffect(() => {
    if(!Fact) return

    const ThreeWord = Fact.split(' ').slice(0, 3).join(' ')
    console.log(ThreeWord);
    fetch(`https://cataas.com/cat/says/${ThreeWord}?json=true`)
      .then(response => response.json())
      .then(data => {
        const {url} = data
        setImage(url)
    })
  }, [Fact])*/

  /// Usando Async Await
  /*useEffect(() => {
    const getFact = async () => {
      const response = await fetch(ApiFact)
      const data = await response.json()
      const { fact } = data
      setFact(fact)
    }
    getFact()
  }, [Generar])

  useEffect(() => {
    if(!Fact) return

    const ThreeWord = Fact.split(' ').slice(0, 3).join(' ')
    console.log(ThreeWord);
    const getCat = async () => {
      const response = await fetch(`https://cataas.com/cat/says/${ThreeWord}?json=true`)
      const data = await response.json()
      const {url} = data
      setImage(url)
    }
    getCat()    
  }, [Fact])*/

  /// Usando Async Axios
  /*useEffect(() => {
    axios.get(ApiFact).then(response => {
      const { fact } = response.data
      console.log(fact);
      setFact(fact)
    }).catch(error => {
      console.log(error);
    })
  }, [Generar])

  useEffect(() => {
    if(!Fact) return

    const ThreeWord = Fact.split(' ').slice(0, 3).join(' ')
    console.log(ThreeWord);
    axios.get(`https://cataas.com/cat/says/${ThreeWord}?json=true`).then(response => {
      const {url} = response.data
      setImage(url)
    }).catch(error => {
      console.log(error);
    })
  }, [Fact])*/

  return (
    <main>
      <h4>Prueba Tecnica</h4>
      {Fact && <p>{Fact}</p>}
      {Image && <img src={ApiCat + Image} alt="Cat" height='200px'/>}
      <br/>
      <button onClick={() => {setGenerar(!Generar)}} > Generar Nuevo </button>

    </main>
  )
}

export default App
