import React, { useState } from 'react'
import '../styles/hamburger.css'
import hamburger from '../images/icon-menu.svg'
import close from '../images/icon-menu-close.svg'

function Hamburger() {

    const [toggled, setToggled] = useState(false)

    const handleClick = () => {
        setToggled(prevState => !prevState)
    }

    return (
        <>
            <div className="hamburger-menu" onClick={handleClick}>
                {!toggled && <img className="hamburger" src={hamburger.src} />}
                {toggled && <img className="close" src={close.src} />}
            </div>
            {toggled && 
                <div className="mobile-menu-container">
                    <div className="overlay" onClick={handleClick}></div>
                    <div className="mobile-menu">
                        <a>Home</a>
                        <a>New</a>
                        <a>Popular</a>
                        <a>Trending</a>
                        <a>Categories</a>
                    </div>
                </div>
            }
        </>
    )
}

export default Hamburger