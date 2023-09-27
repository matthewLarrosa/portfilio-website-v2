import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/Header/Navbar'
import Hero from './components/Header/Hero'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Navbar />
    <Hero />
  </React.StrictMode>,
)
