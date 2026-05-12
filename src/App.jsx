import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Header4 from './components/Header4'
import Footer from './components/Footer'
import Product from './components/ProductGrid'
import './App.css'

function App() {
  return (
    <>
      <Header4/>
      <Product/>
      <Footer/>

    </>
  )
}

export default App
