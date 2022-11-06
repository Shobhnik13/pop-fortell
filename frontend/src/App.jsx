import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './Pages/Home'
import Playground from './Pages/Playground'
import {
  BrowserRouter as Router,
  Routes,
  Route,
 
} from "react-router-dom";
import Learnmore from './Pages/Learnmore'
import User from './Pages/User'
import Navbar from './Components/Navbar'

function App() {
 

  return (
    <div className="container">
<Router>
       <Navbar/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/playground" element={<Playground/>}/>
     <Route path="/learnmore" element={<Learnmore/>}/>
     <Route path='/user' element={<User/>}/>

</Routes>
</Router>
    </div>
  )
}

export default App
