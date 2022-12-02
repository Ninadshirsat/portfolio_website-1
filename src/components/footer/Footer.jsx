import React from 'react'
import './footer.css'
import {FaFacebook} from 'react-icons/fa'
import {SiInstagram} from 'react-icons/si'
import {FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#home" className='footer_logo'> Ninad Shirsat </a>

      <ul className='permalinks'>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#conatct">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://fackbook.com"><FaFacebook/></a>
        <a href="https://instagram.com"><SiInstagram/></a>
        <a href="https://twitter.com"><FaTwitter/></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Ninad Shirsat. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer