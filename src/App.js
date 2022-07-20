import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Innumbers from './components/Innumbers'
import Language from './components/Language'
import Navbar from './components/Navbar'
import Portfolio from './components/Portfolio'
import Services from './components/Services'
import Zayavka from './components/Zayavka'
import { LANGUAGE } from './tools/constants'

const App = () => {

  return (
    <>

      {!localStorage.getItem(LANGUAGE) ? <>
        <Language/>
      </> : <>

        <Navbar />
        <Header />
        <Services />
        <Innumbers />
        <Portfolio />
        <Zayavka />
        <Footer />
      </>}
    </>
  )
}

export default App