import React from 'react'
import { LANGUAGE } from '../tools/constants'

const Language = () => {
    const changeLanguage = (e) => {
        localStorage.setItem(LANGUAGE, e)
        document.location.reload(true)
    }
    return (
        <>

            <div className="fixed-lang">
                <div className="buttons">
                    <div className="uz">
                        <button onClick={(e) => changeLanguage("uz")}>O'zbek tili</button>
                    </div>
                    <div className="ru">
                        <button onClick={(e) => changeLanguage("ru")}>Русский язык</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Language