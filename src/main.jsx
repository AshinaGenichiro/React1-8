import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './components/header.jsx'
import DateTime from './components/DateTimeCard.jsx'
import Analiza from './components/Analiza.jsx'
import Code from './components/CodeSnippet.jsx'
import Article from './components/ArticleCard.jsx'
import UserCard from './components/UserCard.jsx'
import viteLogo from './assets/vite.svg'
import ButtonComponent from './components/ButtonComponent.jsx'
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
    <h2>Moduł 5</h2>
    <UserCard name="Jan" role="Scenicowy" avatarUrl={viteLogo}/>
    <UserCard name="Artur" role="Golfowy" avatarUrl={viteLogo} isOnline={true}/>
    <UserCard name="Wiktor" role="Audikowy" avatarUrl={viteLogo}/>
    <ButtonComponent label="dzik"/>
    <ButtonComponent label="dzik" variant='danger' size='sm' disabled='true'/>
    <ButtonComponent label="dzik" variant='secondary' size='lg'/>
    <h2>Moduł 6</h2>



  </StrictMode>,
)
