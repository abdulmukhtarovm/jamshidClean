import React from 'react'
import { getText } from '../locales'

const Services = () => {
    return (
        <div className='Services'>
                <div className="main-title text-center">
                    <h2>{getText("typeofservices")}</h2>
                </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-3 svoy">
                        <div className="wrap">
                            <div className="img">
                                <img className='w-100' src="img/stirkakovrov.png" alt="" />
                            </div>
                            <div className="text">
                                <h3>{getText("stirkaKovrov")}</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 svoy">
                        <div className="wrap">
                            <div className="img">
                                <img className='w-100' src="img/stirkaodeyal.png" alt="" />
                            </div>
                            <div className="text">
                                <h3>{getText("stirkaOdeyalov")}</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 svoy">
                        <div className="wrap">
                            <div className="img">
                                <img className='w-100' src="img/stirkamebel.png" alt="" />
                            </div>
                            <div className="text">
                                <h3>{getText("stirkaMebeli")}</h3>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="row justify-content-center">
                    <div className="col-md-3 svoy">
                        <div className="wrap">
                            <div className="img">
                                <img className='w-100' src="img/stirkabruchatka.png" alt="" />
                            </div>
                            <div className="text">
                                <h3>{getText("stirkaBruschatki")}</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 svoy">
                        <div className="wrap">
                            <div className="img">
                                <img className='w-100' src="img/stirkamatras.png" alt="" />
                            </div>
                            <div className="text">
                                <h3>{getText("stirkaMatrasov")}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services