import React from "react"

const Header = () => {
  return (
    <header className="header" id="home">
      <div className="header__main">
        <a href="#about" className="header__name">
          John Ross
        </a>
        <h3 className="header__description">Hello I am a full stack developer</h3>
        <a href="#about" className="header__arrow">&#8681;</a>
      </div>
    </header>
  )
}

export default Header