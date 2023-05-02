import './App.css'

const Button = ({ text }) => {
  return (
    <button>
      {text}
    </button>
  )
}

function App () {
  return (
    <>
      <h1>Twitter Follow Card</h1>
      <article className='tw-followCard'>
        <header className='tw-followCard-header'>
          <img
            className='tw-followCard-avatar'
            src='https://pbs.twimg.com/media/FM4ltg5XIAIrzYy.jpg'
            alt='Avatar del Usuario'
          />
          <div className='tw-followCard-info'>
            <strong> Trapito Lover</strong>
            <span className='tw-followCard-infoUserName'> @TrapLover</span>
          </div>
        </header>

        <aside>
          <button className='tw-followCard-button'>
            <span className='tw-followCard-text'> Seguir </span>
            <span className='tw-followCard-stopFollow'>Dejar de seguir xdaa</span>
          </button>
        </aside>
      </article>
    </>
  )
}

export default App
