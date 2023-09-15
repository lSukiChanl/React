import { useState } from "react"

const Turnos = {
  player1: '✘',
  player2: '◯'
}

const Ganadores = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

// eslint-disable-next-line react/prop-types
const Cuadrado = ({ children, isSelected, updateBoard, index }) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`	

  const handleClick = () => {
    updateBoard(index)
  }

  return (
    <div className={className} onClick={handleClick}>
      {children}
    </div>
  )
}




function App() {
  const [Tablero, setTablero] = useState(Array(9).fill(null))
  const [Turno, setTurno] = useState(Turnos.player1)
  const [Ganador, setGanador] = useState(null)

  const updateBoard = (index) => {

    if (Tablero[index]) return

    const NewTurno = Turno === Turnos.player1 ? Turnos.player2 : Turnos.player1
    setTurno(NewTurno);

    const NewTablero = [...Tablero]
    NewTablero[index] = Turno
    setTablero(NewTablero)
  }

  return (
    <>
      <main className="board">
        <h1 className="title">Juego del Gato</h1>
        <section className="game">
          {
            Tablero.map((_, index) => {
              return (
                <Cuadrado key={index} index={index} updateBoard={updateBoard}> {Tablero[index]} </Cuadrado>
              )
            })
          }
        </section>

        <section className="turn">
          <Cuadrado isSelected={Turno === Turnos.player1} > {Turnos.player1} </Cuadrado>
          <Cuadrado isSelected={Turno === Turnos.player2} > {Turnos.player2} </Cuadrado>
        </section>
        
      </main>

    </>
  )
}

export default App
