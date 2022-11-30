import React from 'react'
import './nav.css'
import {AiTwotoneHome} from 'react-icons/ai'
import {IoMdPerson} from 'react-icons/io'
import {RiBookMarkLine} from 'react-icons/ri'
import {RiServiceLine} from 'react-icons/ri'
import {MdOutlineMessage} from 'react-icons/md'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <Nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiTwotoneHome/></a>
      <a href="#about"  onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><IoMdPerson /></a>
      <a href="#experience"  onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><RiBookMarkLine /></a>
      <a href="#services"  onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine /></a>
      <a href="#contact"  onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdOutlineMessage /></a>
    </Nav>
  )
}

export default Nav