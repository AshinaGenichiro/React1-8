import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './components/header.jsx'
import DateTime from './components/DateTimeCard.jsx'
import Analiza from './components/Analiza.jsx'
import Code from './components/CodeSnippet.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/> 
    <DateTime/> 
    <Analiza/>
    <Code title='Witaj' language='JS' code='const element = ( <> <h1>Tytuł</h1> <p>Opis</p> </> );'/>
    <App />
  </StrictMode>,
)
