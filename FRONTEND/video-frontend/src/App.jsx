import './App.css'
import { Navbar } from './component/Navbar'
import { Register } from './auth/Register'
import { Card } from './component/Card'
import { Home } from './screens/Home'
function App() {
 

  return (
    <>
     <Navbar/>
     <Register/>
    <Home/>
    </>
  )
}

export default App
