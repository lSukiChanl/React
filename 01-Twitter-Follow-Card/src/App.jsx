import './App.css'
import { TwitterFollowCard } from "./assets/TwitterFollowCard.jsx";
 

function App() {

  return (
    <>
      <div>
        <TwitterFollowCard userName='@SukiChan' isFollowing={false} formatUserName={userName => userName.toUpperCase()} avatar={'https://avatars.githubusercontent.com/u/56332696'}> Cristian Mendez  Galicia </TwitterFollowCard>
        <br></br>
        <TwitterFollowCard userName='@FP' isFollowing={true} formatUserName={userName => userName.toUpperCase()} avatar={'https://avatars.githubusercontent.com/u/15771072'}> Suki-Chan </TwitterFollowCard>
      </div>
    </>
  )
}

export default App
