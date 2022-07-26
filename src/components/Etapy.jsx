import React from 'react'
import { getText } from '../locales'

const Etapy = () => {
  return (
    <div className='Etapy'>
        <div className="container">
            <div className="row">
                <div className="col-md-4 col-sm-6 mb-4">
                    <div className="card">
                        <div className="d-flex justify-content-between align-items-center">
                            <h5>1. {getText("etapyCardT1")}</h5>
                            <img src="img/ic1.png" alt="" />
                        </div>
                        <p>{getText("etapyCardP1")}</p>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 mb-4">
                    <div className="card">
                        <div className="d-flex justify-content-between align-items-center">
                            <h5>2. {getText("etapyCardT2")}</h5>
                            <img src="img/ic2.png" alt="" />
                        </div>
                        <p>{getText("etapyCardP2")}</p>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 mb-4">
                    <div className="card">
                        <div className="d-flex justify-content-between align-items-center">
                            <h5>3. {getText("etapyCardT3")}</h5>
                            <img src="img/ic3.png" alt="" />
                        </div>
                        <p>{getText("etapyCardP3")}</p>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 mb-4">
                    <div className="card">
                        <div className="d-flex justify-content-between align-items-center">
                            <h5>4. {getText("etapyCardT4")}</h5>
                            <img src="img/ic4.png" alt="" />
                        </div>
                        <p>{getText("etapyCardP4")}</p>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 mb-4">
                    <div className="card">
                        <div className="d-flex justify-content-between align-items-center">
                            <h5>5. {getText("etapyCardT5")}</h5>
                            <img src="img/ic5.png" alt="" />
                        </div>
                        <p>{getText("etapyCardP5")}</p>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 mb-4">
                    <div className="card">
                        <div className="d-flex justify-content-between align-items-center">
                            <h5>6. {getText("etapyCardT6")}</h5>
                            <img src="img/ic6.png" alt="" />
                        </div>
                        <p>{getText("etapyCardP6")}</p>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 mb-4">
                    <div className="card">
                        <div className="d-flex justify-content-between align-items-center">
                            <h5>7. {getText("etapyCardT7")}</h5>
                            <img src="img/ic7.png" alt="" />
                        </div>
                        <p>{getText("etapyCardP7")}</p>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 mb-4">
                    <div className="card">
                        <div className="d-flex justify-content-between align-items-center">
                            <h5>8. {getText("etapyCardT8")}</h5>
                            <img src="img/ic8.png" alt="" />
                        </div>
                        <p>{getText("etapyCardP8")}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Etapy