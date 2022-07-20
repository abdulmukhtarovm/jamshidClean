import React from 'react'
import { getText } from '../locales'

const Portfolio = () => {
    return (
        <div className='Portfolio'>
            <div className="main-title text-center">
                <h2>{getText("portfolio")}</h2>
            </div>
            <div className="image-gallary">
                <div className="image-box">
                    <img src="img/portfolio1.png" alt="" />
                </div>
                <div className="image-box">
                    <img src="img/portfolio2.png" alt="" />
                </div>
                <div className="image-box">
                    <img src="img/portfolio3.png" alt="" />
                </div>
                <div className="image-box">
                    <img src="img/portfolio4.png" alt="" />
                </div>
                <div className="image-box">
                    <img src="img/portfolio5.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Portfolio