import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './components/header.jsx'
import DateTime from './components/DateTimeCard.jsx'
import Analiza from './components/Analiza.jsx'
import Code from './components/CodeSnippet.jsx'
import Article from './components/ArticleCard.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h2>Moduł 2</h2>
    <App />
    <Header/> 
    <h2>Moduł 3</h2>
    <Analiza/>
    <DateTime/> 
    <Code title='Witaj' language='JS' code='const element = ( <> <h1>Tytuł</h1> <p>Opis</p> </> );'/>
    <h2>Modul 4</h2>
    <Article/>
    <Article/>
    <Article/>

  </StrictMode>,
)
