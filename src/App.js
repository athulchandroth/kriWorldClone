import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import { Navbar,Home } from './components'

import './App.scss'
const App = () => {
  return (
    <Router>
    <div className="app">
    <Navbar/>
      <div className="app__navigation">
        
      </div> 
      <div className="app__container">
      <Routes>
        <Route path='/' element={<Home/>}/>
        
        <Route path='/Home' element={<Home/>}/>
      </Routes>
      </div>
    </div>
    </Router>
  )
}

export default App