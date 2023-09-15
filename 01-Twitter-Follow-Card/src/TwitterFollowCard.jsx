import { useState } from 'react'

// eslint-disable-next-line react/prop-types
export function TwitterFollowCard ({ children, formatUserName, userName, isFollowing, avatar }) {
  const [isFollow, setIsFollow] = useState(isFollowing)

  const text = isFollow ? 'Siguiendo' : 'Seguir'
  const classNameFollow = isFollow ? 'tw-followCard-button--following' : 'tw-followCard-button--follow'

  const handleFollow = () => {
    setIsFollow(!isFollow)
    console.log('Cambiando estado de isFollow a ' + !isFollow)
  }

  return (
    <main>
      <article className='tw-followCard'>
        <header className='tw-followCard-header'>
          <img
            className='tw-followCard-avatar'
            src={avatar}
            alt='Avatar del Usuario'
          />
          <div className='tw-followCard-info'>
            <strong> {children} </strong>
            <span className='tw-followCard-infoUserName'> {formatUserName(userName)} </span>
          </div>
        </header>

        <aside>
          <button className='tw-followCard-button'>
            <span className={classNameFollow} onClick={handleFollow}> {text} </span>
          </button>
        </aside>
      </article>
    </main>
  )
}