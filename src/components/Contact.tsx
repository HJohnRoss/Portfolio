import React from "react";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <span className="contact__hide">&#160;</span>

      <h4 className="contact__header">Contact Me</h4>

      <div className="contact__body">
        <img className="contact__body-img" src="https://i.pinimg.com/originals/cd/e2/1d/cde21d0b343805e0c523140647584cf2.jpg" alt="Thorfin" />

        <form className="contact__form" action="https://formspree.io/f/xzbqrwaz" method="POST">
          <label className="contact__form-label" htmlFor="name">Name</label>
          <input className="contact__form-input" type="text" name="name" />
          <label className="contact__form-label" htmlFor="email">Email</label>
          <input className="contact__form-input" type="email" name="email" />
          <label className="contact__form-label" htmlFor="message">Message</label>
          <textarea className="contact__form-textarea contact__form-input" name="message" id=""></textarea>
          <button className="contact__form-btn" type="submit">Send</button>
        </form>
      </div>

    </section>
  )
}

export default Contact