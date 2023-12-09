import React, { useState } from 'react'
import '../styles/hamburger.css'

function Hamburger() {

    const [toggled, setToggled] = useState(false)

    const handleClick = () => {
        setToggled(prevState => !prevState)
    }

    return (
        <>
            <div className="hamburger-menu" onClick={handleClick}>
                {!toggled && <img className="hamburger" src="/src/images/icon-menu.svg"/>}
                {toggled && <img className="close" src="/src/images/icon-menu-close.svg"/>}
            </div>
            {toggled && <div className="overlay">
                <div className="mobile-menu">
                    <a>Home</a>
                    <a>New</a>
                    <a>Popular</a>
                    <a>Trending</a>
                    <a>Categories</a>
                </div>
            </div>}
        </>
    )
}

export default Hamburger