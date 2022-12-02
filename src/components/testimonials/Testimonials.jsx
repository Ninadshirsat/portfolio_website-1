import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/Avatar1.jpg'
import AVTR2 from '../../assets/Avatar2.jpg'
import AVTR3 from '../../assets/Avatar3.jpg'
import AVTR4 from '../../assets/Avatar4.jpg'

  // core version + pagination modules:
  import { Pagination } from 'swiper';

  import { Swiper , SwiperSlide } from 'swiper/react'

  // import Swiper and modules styles
  import 'swiper/css';
  import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'Person 1',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, harum!'
  },
  {
    avatar: AVTR2,
    name: 'Person 2',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, harum!'
  },
  {
    avatar: AVTR3,
    name: 'Person 3',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, harum!'
  },
  {
    avatar: AVTR4,
    name: 'Person 4',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, harum!'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials_container" 
      //install swiper modules
      moduels={[Pagination]} 
      spaceBetween = {40}
      slidesPerView = {1}
      pagination= {{clickable : true}}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
              <div className="client_avatar">
                <img src= {avatar} alt="Avatar One"/>
              </div>
              <h5 className='client_name'> {name} </h5>
              <small className='client_review'> {review} </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  ) 
}

export default Testimonials