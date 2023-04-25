import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App () {
  const formatUserName = (userName) => `@${userName}`

  return (
    <section className='App'>
      <h1>Twitter Follow Card</h1>
      <TwitterFollowCard
        formatUserName={formatUserName}
        isFollowing userName='TrapLover'
      >
        <strong> TrapLover Nombre </strong>
      </TwitterFollowCard>

      <TwitterFollowCard
        formatUserName={formatUserName}
        isFollowing={false} userName='Suki-Chan'
      >
        <strong> Suki-Chan Nombre </strong>
      </TwitterFollowCard>
    </section>
  )
}

export default App
