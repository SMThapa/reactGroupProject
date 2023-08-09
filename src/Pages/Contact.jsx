import { useTitle } from "../Hooks/useTitle"
import { NavLink } from "react-router-dom"

import style  from '../Style/ComponentStyle/Contact/Contact.module.css';

export const Contact = () => {

  useTitle('Contact Page')

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log('Yo!')
  }

  return (
    <div className={style.contact}>
        <div className={style.contactPage}>
          <div className={style.contactSlogan}>
            <h1>Get in Touch with us.</h1>
            <p>Send us your queries.</p>
          </div>
          <div className={style.contactBox}>
            <div className={style.userQuery}>
              <form onSubmit={handleSubmit}>
                <h1>Message us,</h1>
                <p>
                  <label htmlFor="name">Name:</label>
                  <input type="text" id="name" name="name" autoComplete="off"/>
                </p>

                <p>
                  <label htmlFor="email">Email:</label>
                  <input type="email" id="email" name="email" autoComplete="off"/>
                </p>

                <p>
                  <label htmlFor="message">Message:</label>
                  <textarea name="message" id="message" cols="" rows="4"></textarea>
                </p>

                <button>Send <i className="bi bi-send-fill"></i></button>
              </form>
            </div>
            <div className={style.contactInfo}>
              <h1>Contact Info</h1>
              <div className={style.contactContacts}>
                <div className={style.contacts}>
                  <p className={style.contactsItem}>
                    <i className="bi bi-geo-alt-fill"></i>
                    <span>7A, Hari Sabha Ln, Naskarpur, Behala, Kolkata, West Bengal 700020</span>
                  </p>
                  <p className={style.contactsItem}>
                    <i className="bi bi-phone"></i>
                    <span>+91 987654321</span>
                  </p>
                  <p className={style.contactsItems}>
                    <i className="bi bi-envelope-paper"></i>
                    <span>codtrees@gmail.com</span>
                  </p>
                </div>
              </div>
              <div className={style.contactSocial}>
                <NavLink to='/'><i className="bi bi-twitter"></i></NavLink>
                <NavLink to='/'><i className="bi bi-facebook"></i></NavLink>
                <NavLink to='/'><i className="bi bi-linkedin"></i></NavLink>
              </div>
            </div>
          </div>
        </div>

        <div className={style.contactMap}>
          <h1>Find Us,</h1>
          <div className={style.theMap}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.9552319683603!2d88.31140147524216!3d22.505862779539385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027bb43da5a8a3%3A0x731a516d559dba3d!2sCOD%20Trees!5e0!3m2!1sen!2sin!4v1691041550444!5m2!1sen!2sin" style={{width:"100%", height:"100%"}} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
  )
}
