import React from "react"

const Navbar1 = () => {
  return (
    <nav className="navbar1">
      <div className="navbar1__background"></div>
      {/* <h1 className="navbar1__name">John Ross</h1> */}

      <ul className="navbar1__list">
        <li>
          <a id="active" className="navbar1__link" href="#home">
            Home
          </a>
        </li>
        <li>
          <a className="navbar1__link" href="#about">
            About
          </a>
        </li>
        <li>
          <a className="navbar1__link" href="#portfolio">
            Portfolio
          </a>
        </li>
        <li>
          <a className="navbar1__link" href="#contact">
            Contact
          </a>
        </li>
        <li>
          <a className="navbar1__link" href="#resume">
            Resume
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar1