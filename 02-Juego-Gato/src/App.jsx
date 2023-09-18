import { useState, useEffect } from "react"
import confetti from 'canvas-confetti'

import { Turns } from "./constants/constans"
import { Square } from './components/Square.jsx'
import { ModalWinner } from "./components/ModalWinner"
import { checkWinner, checkEnd } from "./logic/Board"
import { SaveStorage, RemoveStorage } from "./storage/Storage"

function App() {
  const [Board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
  })
  const [Turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ? JSON.parse(turnFromStorage) : Turns.player1
  })

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

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(Turns.player1)
    setWinner(null)

    RemoveStorage()
  }
  
  useEffect(() => {
    SaveStorage(Board, Turn)
  }, [Board, Turn])

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
          <Square isSelected={Turn === Turns.player1} > {Turns.player1} </Square>
          <Square isSelected={Turn === Turns.player2} > {Turns.player2} </Square>
        </section>
        
        <ModalWinner resetGame={resetGame} Winner={Winner}> </ModalWinner>
        
        <footer className="reset">
          <button className="button" onClick={resetGame}>Reiniciar Juego</button>
        </footer>
      </main>
    </>
  )
}

export default App
