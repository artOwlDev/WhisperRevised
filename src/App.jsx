import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Nav } from './components/Nav'
import { Home } from './pages/Home'
import { TvItem } from './components/TvItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Details from './pages/Details'
import Login from './pages/auth/Login'
import ScrollToTop from './components/ScrollTopTop'

function App() {

  return (
    <BrowserRouter>
      <ScrollToTop/>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tv/details/:id" element={<Details />} />
          <Route path="/movie/details/:id" element={<Details />} />
          <Route path="/auth/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
    
  )
}

export default App
