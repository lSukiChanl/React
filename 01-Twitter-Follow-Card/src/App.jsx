import './App.css'
import { TwitterFollowCard } from "./TwitterFollowCard.jsx";
 

function App() {

  return (
    <>
      <div>
        <TwitterFollowCard userName='@SukiChan' isFollowing={false} formatUserName={userName => userName.toUpperCase()} avatar={'https://avatars.githubusercontent.com/u/56332696'}> Cristian Mendez  Galicia </TwitterFollowCard>
        <br></br>
        <TwitterFollowCard userName='@FrancescaP' isFollowing={true} formatUserName={userName => userName.toUpperCase()} avatar={'https://avatars.githubusercontent.com/u/15771072'}> Francesca Prelati </TwitterFollowCard>
      </div>
    </>
  )
}

export default App
