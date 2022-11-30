import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>My Skills</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experince_frontend">
          <h3>Forntend Development</h3>
          <div className="experience_content">
            <article className='experience_details'>
            <BsPatchCheckFill className = 'experience_details-icon'/>
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience_details'>
            <BsPatchCheckFill className = 'experience_details-icon'/>
              <div>
              <h4>CSS</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            
            <article className='experience_details'>
            <BsPatchCheckFill className = 'experience_details-icon'/>
              <div>
              <h4>JavaScript</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience_details'>
            <BsPatchCheckFill className = 'experience_details-icon'/>
              <div>
              <h4>React</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience_details'>
            <BsPatchCheckFill className = 'experience_details-icon'/>
              <div>
              <h4>Tailwind</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience_details'>
            <BsPatchCheckFill className = 'experience_details-icon'/>
              <div>
              <h4>Web3.js</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
          <div className="experince_backend">
          <h3>Backend Development</h3>
          <div className="experience_content">
            <article className='experience_details'>
            <  BsPatchCheckFill className = 'experience_details-icon'/>
              <div>
              <h4>MongoDB</h4>
              <small className='text-light'>Basic</small>
              </div>
            </article>

            <artictle className='experience_details'>
            <  BsPatchCheckFill className = 'experience_details-icon'/>
              <div>
              <h4>NodeJs</h4>
              <small className='text-light'>Basic</small>
              </div>
            </artictle>
            
            <article className='experience_details'>
            <  BsPatchCheckFill className = 'experience_details-icon'/>
              <div>
              <h4>PHP</h4>
              <small className='text-light'>Basic</small>
              </div>
            </article>

            <article className='experience_details'>
            <  BsPatchCheckFill className = 'experience_details-icon'/>
              <div>
              <h4>Python</h4>
              <small className='text-light'>Basic</small>
              </div>
            </article>

            <article className='experience_details'>
            <  BsPatchCheckFill className = 'experience_details-icon'/>
              <div>
              <h4>MySQL</h4>
              <small className='text-light'>Basic</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience