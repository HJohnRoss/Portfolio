import React from "react";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <span className="footer__hide">&#160;</span>


      <div className="footer__container">
        <h2 className="footer__name">John Ross</h2>
        <div className="footer__icons">
          <a href="mailto:rossjohn936@gmail.com" target="_blank" className="footer__icon">
            <MailOutlineIcon fontSize="large" />
          </a>
          <a href="https://www.linkedin.com/in/hjohnross/" target="_blank" className="footer__icon">
            <LinkedInIcon fontSize="large" />
          </a>
          <a href="https://github.com/HJohnRoss" target="_blank" className="footer__icon">
            <GitHubIcon fontSize="large" />
          </a>
          <a href="https://www.youtube.com/channel/UCFqUG5tWJZENMR2xybdNeYg" target="_blank" className="footer__icon">
            <YouTubeIcon fontSize="large" />
          </a>
        </div>

      </div>

        <p className="footer__copyright">© Copyright 2023. Made by John Ross</p>
    </footer>
  )
}

export default Footer