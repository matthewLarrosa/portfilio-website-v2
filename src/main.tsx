import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/Header/Navbar'
import Hero from './components/Header/Hero'
import Experience from './components/Experience/Experience'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Navbar />
    <Hero />
    <Experience />
  </React.StrictMode>,
)
