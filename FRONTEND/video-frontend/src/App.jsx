import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
 
} from "react-router-dom";
// import Navbar from "./component/Navbar"
import { Register } from './auth/Register'
import { Card } from './component/Card'
import { Home } from './screens/Home'
import { CardTweet } from './component/CardTweet'
import { Tweet } from './screens/Tweet'
import { Profile } from './screens/Profile'
import { VideoPlay } from './screens/VideoPlay'

function App() {
 

  return (
  
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/tweet' element={<Tweet/>}></Route>
        <Route exact path='/video' element={<VideoPlay/>}></Route>
        <Route exact path ='/profile' element={<Profile/>}></Route>
        <Route exact path ='/register' element={<Register/>}></Route>


    </Routes>
  
  )
}

export default App
