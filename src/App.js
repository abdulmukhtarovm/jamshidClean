import React from 'react'
import Etapy from './components/Etapy'
import Footer from './components/Footer'
import Header from './components/Header'
import Innumbers from './components/Innumbers'
import Language from './components/Language'
import Navbar from './components/Navbar'
import NavbarTop from './components/NavbarTop'
import Portfolio from './components/Portfolio'
import Services from './components/Services'
import Zayavka from './components/Zayavka'
import { LANGUAGE } from './tools/constants'

const App = () => {

  return (
    <>

      {!localStorage.getItem(LANGUAGE) ? <>
        <Language />
      </> : <>
        {/* <NavbarTop /> */}
        <Navbar />
        <Header />
        <Services />
        <Innumbers />
        <Etapy />
        <Portfolio />
        <Zayavka />
        <Footer />
      </>}
    </>
  )
}

export default App