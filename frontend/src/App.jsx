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

function App() {
 

  return (
    <div className="container">
<Router>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/playground" element={<Playground/>}/>
     <Route path="/learnmore" element={<Learnmore/>}/>

</Routes>
</Router>
    </div>
  )
}

export default App
