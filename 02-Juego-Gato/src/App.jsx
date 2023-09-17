import { useState } from "react"
import confetti from 'canvas-confetti'

import { Turns } from "./constants/constans"
import { CombosWinners } from "./constants/constans"

// eslint-disable-next-line react/prop-types
const Square = ({ children, isSelected, updateBoard, index }) => {
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
  const [Board, setBoard] = useState(Array(9).fill(null))
  const [Turn, setTurn] = useState(Turns.player1)
  const [Winner, setWinner] = useState(null)

  const updateBoard = (index) => {

    if (Board[index]) return
    if (Winner) return

    const NewTurn = Turn === Turns.player1 ? Turns.player2 : Turns.player1
    setTurn(NewTurn);

    const NewBoard = [...Board]
    NewBoard[index] = Turn
    setBoard(NewBoard)

    const newWinner = checkWinner(NewBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (checkEnd(NewBoard)) {
      setWinner(false)
    }

  }

  const checkWinner = (NewBoard) => {
    for(const Combinacion of CombosWinners) { 
      const [a, b, c] = Combinacion
      if (NewBoard[a] && NewBoard[a] === NewBoard[b] && NewBoard[a] === NewBoard[c]) {
        return NewBoard[a]
      }
    }
    return null
  }

  const checkEnd = (NewBoard) => {
    return NewBoard.every((Casilla) => Casilla != null)
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(Turns.player1)
    setWinner(null)
  }

  return (
    <>
      <main className="board">
        <h1 className="title">Juego del Gato</h1>
        <section className="game">
          {
            Board.map((_, index) => {
              return (
                <Square key={index} index={index} updateBoard={updateBoard}> {Board[index]} </Square>
              )
            })
          }
        </section>

        <section className="turn">
          <Square isSelected={Turn === Turn.player1} > {Turn.player1} </Square>
          <Square isSelected={Turn === Turn.player2} > {Turn.player2} </Square>
        </section>
        
        {
          Winner != null && (
            <section className="winner">
              <h2 className="text">
                {
                  Winner === false ? 'Empate' : `Ganador:`
                }

                <header className="win">
                  {
                    Winner && <Square> {Winner} </Square>
                  }
                </header>

                <footer className="reset">
                  <button className="button" onClick={resetGame}>Reiniciar Juego</button>
                </footer>
              </h2>
            </section>
          )
        }
        <footer className="reset">
          <button className="button" onClick={resetGame}>Reiniciar Juego</button>
        </footer>
      </main>

    </>
  )
}

export default App
