import React from 'react'
import '../styles/Footer.css'

const Footer = () => {
  return (
    <div className='footer mt-5'>
      <div className='Fabout'>
        <h4>ABOUT</h4>
        <p>
          Welcome to EncrypticSecurity Private Limited, your premier destination for comprehensive education and training in the dynamic domains of Ethical Hacking, Cyber Security, Data Science, AI, ML, and DL. Established in the vibrant city of Mumbai in 2016, we have been at the forefront of nurturing talent, fostering innovation, and equipping professionals with cutting-edge skills to navigate the ever-evolving digital landscape.
        </p>
      </div>

      <div className="fpages">
        <h4>PAGES</h4>
        <p><span>{">"}</span> BlOG</p>
        <hr />
        <p><span>{">"}</span> SHORTCODES</p>
        <hr />
        <p><span>{">"}</span> TYPOGRAPHY</p>
        <hr />
        <p><span>{">"}</span> MEMBERSHIP PLAN</p>

      </div>

      <div className="fcontact">
        <h4>CONTACT</h4>
        <p><i className="bi bi-geo-alt-fill"></i>Thane | Andheri | Ghatkopar</p>
        <p><i className="bi bi-telephone-fill"></i>Tel.: +917071777789</p>
        <p><i className="bi bi-printer-fill"></i>Fax: +918828282594</p>
        <p><i className="bi bi-envelope-at-fill"></i>enroll@encrypticsecurity.com</p>
      </div>

      <div className="fsocialMedia">
        <h4>SOCIAL</h4>
        <i className="bi bi-instagram"></i>
        <i className="bi bi-linkedin"></i>
        <i className="bi bi-facebook"></i>
        <i className="bi bi-twitter"></i>
      </div>
    </div>
  )
}

export default Footer