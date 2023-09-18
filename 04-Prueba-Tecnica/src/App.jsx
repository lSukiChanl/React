import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [Fact, setFact] = useState()
  const ApiFact = 'https://catfact.ninja/fact'
  //const ApiCat = 'https://cataas.com/cat/says/hello'
  //const ApiCatJSON = `https://cataas.com/cat/says/${FirstWord}?json=true`

  useEffect(() => {
    fetch(ApiFact)
      .then(response => response.json())
      .then(data => {
        const { NewFact } = data
        setFact(NewFact)
        const FirstWord = NewFact.split(' ').slice(0, 3).join(' ');
        console.log(FirstWord);
      })
  }, [])

  return (
    <main>
      <h4>Prueba Tecnica</h4>
      {Fact && <p>{Fact}</p>}
      <button > Generar Nuevo </button>
    </main>
  )
}

export default App
