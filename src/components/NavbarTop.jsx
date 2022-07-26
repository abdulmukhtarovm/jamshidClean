import React from 'react'
import { getText } from '../locales'

const NavbarTop = () => {
  return (
    <div className='NavbarTop'>
        <div className="container">
            <div className="row justify-content-between">
                <div className="col-lg-4 col-md-6">
                    <p>{getText("navbartop")}</p>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="tel">
                        <a href="tel:+998997203636">+998 99 720 36 36</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NavbarTop