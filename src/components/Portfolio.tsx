import React, { useState } from "react";

const Portfolio = () => {
  const [project, setProject] = useState(1)

  return (
    <section className="portfolio" id="portfolio">
      <span className="portfolio__hide">&#160;</span>

      <h4 className="portfolio__header">My Portfolio</h4>

      <div className="portfolio__projects">
        <div className="portfolio__buttons">
          <button className={project == 1 ? "portfolio__button portfolio__button-active" : "portfolio__button"} onClick={e => setProject(1)}>Radiant Apperal</button>
          <button className={project == 2 ? "portfolio__button portfolio__button-active" : "portfolio__button"} onClick={e => setProject(2)}>Budget Guard</button>
          <button className={project == 3 ? "portfolio__button portfolio__button-active" : "portfolio__button"} onClick={e => setProject(3)}>Poké or Us</button>
        </div>
        <div className="portfolio__project" style={
          project == 1 ? {} : { display: "none" }
        }>
          <h2 className="portfolio__project-header">Radiant Apperal</h2>

          <p className="portfolio__project-text">
            As a Back-End developer with always wanting to make code more efficient. I programmed a Ecommerce website letting users add to a cart and check out. Radiant Apperal is a full-stack Java website that features users to create an account search items, search from categories of items, allow users to add products to a wishlist, users can create reviews for products, let users create and checkout with a cart integrating Stripe API, and an admin user can create and delete products from the website and also on Stripe API.
          </p>

          <h3 className="portfolio__project-header">Technologies Used:</h3>
          <p className="portfolio__project-text">Java - Spring - Spring Boot - Stripe API - JavaScript - CSS - JSP - MySQL - Bycrypt - Json - Gson</p>

          <div className="portfolio__project-container">
            <iframe className="portfolio__project-video" src="https://www.youtube.com/embed/ohPSpBWbea4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen; frameborder;" allowFullScreen></iframe>

            <a className="portfolio__project-btn" href="https://github.com/HJohnRoss/Radiant-Apparel" target="_blank">Veiw Source Code</a>
          </div>
        </div>
        <div className="portfolio__project" style={
          project == 2 ? {} : { display: "none" }
        }>
          <h2 className="portfolio__project-header">Budget Guard</h2>

          <p className="portfolio__project-text">
            As a Full-Stack Developer looking to make my budget life easier in my near future. I wanted to create a place where I can input my own data and show me what I can and I cant do for certain months instead of using a exel sheet for my financing. Budget Guard is a budgeting app that allows a user to make different budgets for each month, including a budget for a month with different categories where they can spend money with budgets for each category. Users also have acess to see what they have bought recently and what they have bought in each category for that month. Budget guard also uses Chart.js to show the users data in a graph for each month.
          </p>

          <h3 className="portfolio__project-header">Technologies Used:</h3>
          <p className="portfolio__project-text"> JavaScript - React - Node.js - Mongodb - Mongoose - Chart.Js - Express</p>

          <div className="portfolio__project-container">
            <iframe className="portfolio__project-video" src="https://www.youtube.com/embed/ohPSpBWbea4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen; frameborder;" allowFullScreen></iframe>

            <a className="portfolio__project-btn" href="https://github.com/HJohnRoss/BudgetApp" target="_blank">Veiw Source Code</a>
          </div>
        </div>
        <div className="portfolio__project" style={
          project == 3 ? {} : { display: "none" }
        }>
          <h2 className="portfolio__project-header">Poké or Us</h2>

          <p className="portfolio__project-text">
            As a Full-Stack Developer I created a Web Application to let users favorite and share their favorite pokémon with other, Also it has a Ecommerce portion of the web application to buy products of the users favorite pokémon. This web application is a place where users can not only share about their favorite pokémon but also buy products of their favorites all in one place!
          </p>

          <h3 className="portfolio__project-header">Technologies Used:</h3>
          <p className="portfolio__project-text">Python - HTML - CSS - Flask - MySQL - Jinja2 - JavaScript - Bcrypt - Ajax - Stripe API</p>

          <div className="portfolio__project-container">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/Iyox5UmuUvc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen;" allowfullscreen></iframe>

            <a className="portfolio__project-btn" href="https://github.com/HJohnRoss/PokeOrUs" target="_blank">Veiw Source Code</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio