import React from "react"

const About = () => {
  return (
    <section className="about" id="about">
      <span className="about__hide">&#160;</span>
      <div className="about__center">
        <h3 className="about__header">About Me</h3>
      </div>

      <div className="about__container">
        <div className="about__description">
          <h5 className="about__header-2">What to know?</h5>

          <p className="about__text">
            Hello, my name is John Ross. I am a full stack developer from Las Vegas. I have a passion for building websites and solving real-world problems. I am striving to produce quality and efficient code so I can make an impact on the world. This results in me coding everyday for countless amounts of hours to become a better version of myself every day. Other than code I am either playing video games or spending time with my family and dogs.
          </p>
          <p className="about__text about--text-2">I am looking for opportunties to grow myself and bring people together with code. Please reach out to me if you are interested doing a collab with me and or job opportunties.
          </p>
        </div>

        <div className="about__skills">
        <h5 className="about__header-2">Technologies I know!</h5>

          <div className="about__box">
            <a className="about__box--link" href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img className="about__box--img" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" /> </a>
            <a className="about__box--link" href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img className="about__box--img" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" /> </a>
            <a className="about__box--link" href="https://sass-lang.com" target="_blank" rel="noreferrer"> <img className="about__box--img" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="sass" /> </a>
            <a className="about__box--link" href="https://www.java.com" target="_blank" rel="noreferrer"> <img className="about__box--img" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="java" /> </a>
            <a className="about__box--link" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img className="about__box--img" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" /> </a>
            <a className="about__box--link" href="https://www.python.org" target="_blank" rel="noreferrer"> <img className="about__box--img" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" /> </a>
            <a className="about__box--link" href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img className="about__box--img" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" /> </a>
            <a className="about__box--link" href="https://spring.io/" target="_blank" rel="noreferrer"> <img className="about__box--img" src="https://www.vectorlogo.zone/logos/springio/springio-icon.svg" alt="spring" /> </a>
            <a className="about__box--link" href="https://nodejs.org" target="_blank" rel="noreferrer"> <img className="about__box--img" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" /> </a>
            <a className="about__box--link" href="https://expressjs.com" target="_blank" rel="noreferrer"> <img className="about__box--img" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" /> </a>
            <a className="about__box--link" href="https://flask.palletsprojects.com/" target="_blank" rel="noreferrer"> <img className="about__box--img" src="https://www.vectorlogo.zone/logos/pocoo_flask/pocoo_flask-icon.svg" alt="flask" /> </a>
            <a className="about__box--link" href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img className="about__box--img" src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" /> </a>
            <a className="about__box--link" href="https://getbootstrap.com" target="_blank" rel="noreferrer"> <img className="about__box--img" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" /> </a>
            <a className="about__box--link" href="https://tailwindcss.com/" target="_blank" rel="noreferrer"> <img className="about__box--img" src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind" /> </a>
            <a className="about__box--link" href="https://www.mongodb.com/" target="_blank" rel="noreferrer"> <img className="about__box--img" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" /> </a>
            <a className="about__box--link" href="https://www.mysql.com/" target="_blank" rel="noreferrer"> <img className="about__box--img" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" /> </a>
            <a className="about__box--link" href="https://postman.com" target="_blank" rel="noreferrer"> <img className="about__box--img" src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" /> </a>
            <a className="about__box--link" href="https://www.nginx.com" target="_blank" rel="noreferrer"> <img className="about__box--img" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nginx/nginx-original.svg" alt="nginx" /> </a>
            <a className="about__box--link" href="https://www.linux.org/" target="_blank" rel="noreferrer"> <img className="about__box--img" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" alt="linux" /> </a>
            <a className="about__box--link" href="https://www.gnu.org/software/bash/" target="_blank" rel="noreferrer"> <img className="about__box--img" src="https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg" alt="bash" /> </a>
            <a className="about__box--link" href="https://aws.amazon.com" target="_blank" rel="noreferrer"> <img className="about__box--img" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="aws" /> </a>
          </div>
        </div>
      </div>
    </section >
  )
}

export default About