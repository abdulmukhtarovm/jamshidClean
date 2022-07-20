import React from 'react'
import { getText } from '../locales'

const Header = () => {
    return (
        <>
            <div className='Header'>
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-md-5 z-index">
                            <div className="info">
                                <h1>{getText("headerT")}</h1>
                                <div className="mybtn">
                                    <a href="/">{getText("request")}</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 z-index">
                            <div className="img">
                                <img className='kotta-rasm' src="../img/header.png" alt="" />


                            </div>
                        </div>
                    </div>
                </div>
                <div className="wave1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#1A73FF" fill-opacity="1" d="M0,192L80,165.3C160,139,320,85,480,85.3C640,85,800,139,960,149.3C1120,160,1280,128,1360,112L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
                </div>
                <div className="wave2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#3785FF" fill-opacity="1" d="M0,192L80,165.3C160,139,320,85,480,85.3C640,85,800,139,960,149.3C1120,160,1280,128,1360,112L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
                </div>
            </div>
        </>
    )
}

export default Header