import React from 'react'
import { getText } from '../locales'

const Innumbers = () => {
  return (
    <div className='Innumbers'>
     <div className="container">
     <div className="row">
            <div className="col-lg-3 col-sm-6">
                <div className="wrap">
                    <span>15</span>
                    <h6>{getText("opit")}</h6>
                </div>
            </div>
            <div className="col-lg-3 col-sm-6">
                <div className="wrap">
                    <span>70</span>
                    <h6>{getText("sotrudniki")}</h6>
                </div>
            </div>
            <div className="col-lg-3 col-sm-6">
                <div className="wrap">
                    <span>12304</span>
                    <h6>{getText("zakazov")}</h6>
                </div>
            </div>
            <div className="col-lg-3 col-sm-6">
                <div className="wrap borderyo">
                    <span>97</span>
                    <h6>{getText("klent")}</h6>
                </div>
            </div>
        </div>
     </div>
    </div>
  )
}

export default Innumbers