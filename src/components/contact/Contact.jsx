import React from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {ImWhatsapp} from 'react-icons/im'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
    
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_xkzoqjp', 'template_8nuk5xv', form.current, 'H-w5BFUoqT4da3_aJ')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset()
    };

  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineMail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>dummymail@gamil.com</h5>
            <a href="mailto:dummymail@gmail.com"> Send the Message </a>
          </article>

          <article className="contact_option">
            <RiMessengerLine className='contact_option-icon'/>
            <h4>Messanger</h4>
            <h5>dummyFBprofile</h5>
            <a href="htpps://m.me/fbname"> Send the Message </a>
          </article>

          <article className="contact_option">
            <ImWhatsapp className='contact_option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+34-8282884373</h5>
            <a href="htpps://api.whatsapp.com/send?phone+34-564727272"/* add actual phone Number here */> Send the Message </a>
          </article>
        </div>

        {/*End of Contact Options */}

        <form ref= {form} onSubmit= {sendEmail} >
          <input type="text" name='name' placeholder='Your Name' required />
          <input type="text" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'> Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact