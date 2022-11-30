import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import  {BsGithub} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/ninad-shirsat-177656201/" ><BsLinkedin /></a>
        <a href="https://github.com/Ninadshirsat" ><BsGithub /></a>
        <a href="https://twitter.com/ninad_rajan" ><BsTwitter /></a>
    </div>
  )
}

export default HeaderSocials