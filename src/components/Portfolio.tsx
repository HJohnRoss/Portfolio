import React, { useState } from "react";

const Portfolio = () => {
  const [project, setProject] = useState(1)

  return (
    <section className="portfolio" id="portfolio">
      <span className="portfolio__hide">&#160;</span>

      <h4 className="portfolio__header">My Portfolio</h4>

      <div className="portfolio__projects">
        <div className="portfolio__project portfolio__project-1" style={
          project == 1 ? {} : { display: "none" }
        }>
          <h2>Radiant Apperal</h2>

          <p>
            As a Back-End developer with always wanting to make code more efficient. I programmed a Ecommerce website letting users add to a cart and check out. Radiant Apperal is a full-stack Java website that features users to create an account search items, search from categories of items, allow users to add products to a wishlist, users can create reviews for products, let users create and checkout with a cart integrating Stripe API, and an admin user can create and delete products from the website and also on Stripe API.
          </p>

          <h3>Technologies Used:</h3>
          <p>Java - Spring - Spring Boot - Stripe API - JavaScript - CSS - JSP - MySQL - Bycrypt - Json - Gson</p>

          <a href="https://github.com/HJohnRoss/Radiant-Apparel" target="_blank">Veiw Source Code</a>
        </div>
        <div className="portfolio__project portfolio__project-2" style={
          project == 2 ? {} : { display: "none" }
        }>
          <h2>Budget Guard</h2>

          <p>
            As a Full-Stack Developer looking to make my budget life easier in my near future. I wanted to create a place where I can input my own data and show me what I can and I cant do for certain months instead of using a exel sheet for my financing. Budget Guard is a budgeting app that allows a user to make different budgets for each month, including a budget for a month with different categories where they can spend money with budgets for each category. Users also have acess to see what they have bought recently and what they have bought in each category for that month. Budget guard also uses Chart.js to show the users data in a graph for each month.
          </p>

          <h3>Technologies Used:</h3>
          <p> JavaScript - React - Node.js - Mongodb - Mongoose - Chart.Js - Express</p>

          <a href="https://github.com/HJohnRoss/BudgetApp" target="_blank">Veiw Source Code</a>
        </div>
        <div className="portfolio__project portfolio__project-3" style={
          project == 3 ? {} : { display: "none" }
        }>
          <h2>Poké or Us</h2>

          <p>
            As a Full-Stack developer with always wanting to make code more efficient. I programmed a Ecommerce website letting users add to a cart and check out. Radiant Apperal is a full-stack Java website that features users to create an account search items, search from categories of items, allow users to add products to a wishlist, users can create reviews for products, let users create and checkout with a cart integrating Stripe API, and an admin user can create and delete products from the website and also on Stripe API.
          </p>

          <h3>Technologies Used:</h3>
          <p>Java - Spring - Spring Boot - Stripe API - JavaScript - CSS - JSP - MySQL - Bycrypt - Json - Gson</p>

          <a href="https://github.com/HJohnRoss/PokeOrUs" target="_blank">Veiw Source Code</a>
        </div>
      </div>
      <div>
        <button onClick={e => setProject(1)}>Radiant Apperal</button>
        <button onClick={e => setProject(2)}>Budget Guard</button>
        <button onClick={e => setProject(3)}>Poké or Us</button>
      </div>
    </section>
  )
}

export default Portfolio