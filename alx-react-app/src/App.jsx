import { useState } from 'react'
import WelcomeMessage from './components/WelcomeMessage'
import Header from './components/Footer'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import UserProfile from './components/UserProfile'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <WelcomeMessage />
     <Header name="Alice" age="25" bio="Loves hiking and photography"/>
     <MainContent />
     <Footer />
    <UserProfile /> 
    </>
  )
}

export default App
