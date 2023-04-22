import { useState } from "react";
import confetti from "canvas-confetti";

import { Cuadrado } from "./components/Cuadrado.jsx";
import { Turnos } from "./constants/Constantes.jsx";
import { checkEmpate, checkGanador } from './logic/Tablero.jsx';

function App() {

  const [Tablero, setTablero] = useState(() => {
    const TableroGuardado = window.localStorage.getItem('Tablero');
    return TableroGuardado ? JSON.parse(TableroGuardado) : Array(9).fill(null);
  } );
  const [Turno, setTurno] = useState(() => {
    const TurnoGuardado = window.localStorage.getItem('Turno');
    return TurnoGuardado ? JSON.parse(TurnoGuardado) : Turnos.player1;
  })
  const [Ganador, setGanador] = useState(null);

  const resetGame = () => {
    setTablero(Array(9).fill(null));
    setTurno(Turnos.player1);
    setGanador(null);

    window.localStorage.removeItem('Tablero');
    window.localStorage.removeItem('Turno');
  }

  const updateBoard = (index) => {
    if (Tablero[index] || Ganador) return;

    const NuevoTablero = [...Tablero];
    NuevoTablero[index] = Turno;
    setTablero(NuevoTablero);

    const NuevoTurno = Turno === Turnos.player1 ? Turnos.player2 : Turnos.player1;
    setTurno(NuevoTurno);

    window.localStorage.setItem('Tablero', JSON.stringify(NuevoTablero));
    window.localStorage.setItem('Turno', JSON.stringify(NuevoTurno));

    const NuevoGanador = checkGanador(NuevoTablero);
    if (NuevoGanador) {
      console.log('Ganador: ' + NuevoGanador)
      setGanador(NuevoGanador);
      confetti();
    }else if (checkEmpate(NuevoTablero)) {
        setGanador(false);
    }
  }



  return (
    <main className="board">

      <h1> Juego del Gato </h1>
      <button onClick={resetGame}> Reiniciar el Juego </button>
      <section className="game">
        {
          Tablero.map((_, index) => {
            return (
              <Cuadrado
              key={index}
              index={index}
              updateBoard={updateBoard}>
                {Tablero[index]}
              </Cuadrado>
            )
          })
        }
      </section>
      <section className="turn">
        <Cuadrado isSelected={Turno === Turnos.player1} > {Turnos.player1} </Cuadrado>
        <Cuadrado isSelected={Turno === Turnos.player2} > {Turnos.player2} </Cuadrado>
      </section>

      { Ganador !== null && (
        <section className="winner">
          <h2> {Ganador ? `Ganador: ${Ganador}` : 'Empate'} </h2>
          <button onClick={resetGame}> Reiniciar </button>
        </section>
      )}
    </main>
  )
}

export default App
