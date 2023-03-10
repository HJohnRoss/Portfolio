import React from "react";
import Header from "../components/Header";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Footer from "../components/footer";

const Dashboard = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar__background"></div>
        <a className="navbar__name" href="#home">John Ross</a>

        <ul className="navbar__list">
          <li>
            <a id="active" className="navbar__link" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="navbar__link" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="navbar__link" href="#portfolio">
              Portfolio
            </a>
          </li>
          <li>
            <a className="navbar__link" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <Header />

      <About />

      <Portfolio />

      <Contact />

      <Footer />
    </>
  )
}

export default Dashboard