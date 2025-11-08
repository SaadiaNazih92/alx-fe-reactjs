
import React from 'react';

import Header from './components/Header';

import UserProfile from './components/UserProfile';

import MainContent from './components/MainContent';

import Footer from './components/Footer';

import Counter from './components/Counter';

function App() {

  return (

    <div className="App">

      <Header />

      <UserProfile name="Utente React" age={25} bio="Imparando gli hooks!" />

      <MainContent />

      <Counter />

      <Footer />

    </div>

  );

}



export default App;
