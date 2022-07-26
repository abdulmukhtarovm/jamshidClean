import React, { useState } from 'react'

import { getText } from '../locales'

const Navbar = () => {
    const [navbar, setNavbar] = useState(false)
    const [burger, setBurger] = useState(false)
    const changeNavbar = () => {


        if (window.scrollY >= 0) {
            setNavbar(true);
        } else {
            setNavbar(false)
        }
    }
    window.addEventListener('scroll', changeNavbar);

    return (
<>
<div className={`navBar ${navbar ? 'active' : ''}`}>
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    <div className="col-lg-2 col-4">
                        <div className="logo">
                            <a href="/"><img className='w-100' src="img/logo.png" alt="" /></a>
                        </div>
                    </div>
                    <div className={`col-8 mobileWrap ${burger ? '' : 'burgered'}`}>
                        <ul className="nav-menu">
                            <li><a onClick={() => setBurger(!burger)} href="#home">{getText("home")}</a></li>
                            <li><a onClick={() => setBurger(!burger)} href="#services">{getText("services")}</a></li>
                            <li><a onClick={() => setBurger(!burger)} href="#portfolio">{getText("portfolio")}</a></li>
                            <li><a onClick={() => setBurger(!burger)} href="#zayavka">{getText("request")}</a></li>
                            <li><a onClick={() => setBurger(!burger)} href="#contacts">{getText("contacts")}</a></li>
                        </ul>
                    </div>
                    <div onClick={() => setBurger(!burger)} className={`burger pr-4 ml-auto d-flex d-lg-none ${burger ? 'burgered' : ''}`}>
                        <div className="burger1"></div>
                        <div className="burger2"></div>
                        <div className="burger3"></div>
                    </div>
                </div>
            </div>
        </div>
        {/* <div className="navbarLine"></div> */}
</>
    )
}

export default Navbar