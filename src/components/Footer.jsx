import { faFacebookF, faInstagram, faTelegramPlane } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { getText } from '../locales'

const Footer = () => {
    return (
        <div className='Footer' id='contacts'>
            <div className="container">
                <div className="main-title text-center">
                    <h2>{getText("contacts")}</h2>
                </div>
                <div className="row align-items-center">
                    <div className="col-md-6 z-index">
                        <div className="info">
                            <div className="blok">
                                <h5>{getText("phone")}</h5>
                                <a href="tel:+998997203636">+998 99 720 36 36</a>
                            </div>
                            <div className="blok">
                                <h5>{getText("address")}</h5>
                                <a href="https://goo.gl/maps/XoELTYnmmpyxN1ALA">{getText("adress")}</a>
                            </div>
                            {/* <div className="blok">
                                <h5>{getText("pochta")}</h5>
                                <a href="malto:example">mail@mail.com</a>
                            </div> */}
                            <div className="socials">
                                <a href=""><FontAwesomeIcon icon={faTelegramPlane}/></a>
                                <a href=""><FontAwesomeIcon icon={faInstagram}/></a>
                                <a href=""><FontAwesomeIcon icon={faFacebookF}/></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 z-index">
                        <div className="map">
                        <iframe className='w-100 h-100' title='Location' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.4848338967313!2d69.35694891351942!3d41.3635499669914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcf2fe5ddb1481e1e!2zNDHCsDIxJzQ4LjIiTiA2OcKwMjEnMzUuMCJF!5e0!3m2!1sru!2s!4v1658225324577!5m2!1sru!2s" loading="lazy"></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wave1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#1A73FF" fill-opacity="1" d="M0,32L60,26.7C120,21,240,11,360,58.7C480,107,600,213,720,224C840,235,960,149,1080,133.3C1200,117,1320,171,1380,197.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
            </div>
            <div className="wave2">

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#3785FF" fill-opacity="1" d="M0,32L60,26.7C120,21,240,11,360,58.7C480,107,600,213,720,224C840,235,960,149,1080,133.3C1200,117,1320,171,1380,197.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
            </div>
        </div>
    )
}

export default Footer