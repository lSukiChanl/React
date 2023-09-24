import { Square } from './Square.jsx'

// eslint-disable-next-line react/prop-types
export function ModalWinner ({ resetGame, Winner }) {
  if (Winner === null) return null

  return (
    <section className='winner'>
      <h2 className='text'>
        {
                    Winner === false ? 'Empate' : 'Ganador:'
                }

        <header className='win'>
          {
                        Winner && <Square> {Winner} </Square>
                    }
        </header>

        <footer className='reset'>
          <button className='button' onClick={resetGame}>Reiniciar Juego</button>
        </footer>
      </h2>
    </section>
  )
}
