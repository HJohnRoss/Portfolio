import React from "react";
import { Link } from "react-router-dom";
import JohnResume from "../pdf/resume.pdf";
import Footer from "../components/footer";

const Resume = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar__background"></div>
        <Link className="navbar__name" to="/">John Ross</Link>

        <ul className="navbar__list">
          <li>
            <Link id="active" className="navbar__link" to="/">
              Home
            </Link>
          </li>
        </ul>
      </nav>

      <div className="resume">
        <h2 className="resume__header">Resume</h2>

        <p className="resume__text">Reach out to my by linkedIn. View or download the resume.</p>
        
        <iframe className="resume__pdf" src={JohnResume}></iframe>
      </div>

      <Footer />
    </>
  )
}

export default Resume