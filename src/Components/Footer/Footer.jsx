import React from 'react'
import './footer.css';
import { UilGithub } from '@iconscout/react-unicons'

const Footer = () => {

  return (

    <div className='footer__container'>

      <div>
        <span className="overline"></span>
      </div>

      <div className="footer__content">

      <h2 className="footer__title">
          © Ville Varjus
      </h2>

      <a href="https://github.com/varvil" className="social__icon">
        <i class="uil uil-github"></i>
      </a>
      
      </div>

    </div>
  )
}

export default Footer