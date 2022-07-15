import React from 'react'
import '../Styles/Slider.scss'
import {FaHouseUser} from 'react-icons/fa'
import {FaArrowRight} from 'react-icons/fa'
function Slider () {
  return (
    <div className='container_slider'>

      <div className='logoynombre'>
        <img className='logo' src="https://t4.ftcdn.net/jpg/01/00/76/57/360_F_100765796_hVO2AGkofuyqsiiPGd4rdEkjq1FaC11k.jpg" alt="logo" />
        <h3>AllLinks</h3>
      </div>
      <div className='btn_bio'>
        <a href="#"><FaHouseUser />Bio</a>
      </div>

      <div className='container_login'>
        <div className='container_img'>
          <img src="https://i.pinimg.com/originals/a8/bf/da/a8bfda713231f70e6c39e79f164dfbf2.jpg" alt="avatar" className='img_avatar' />
        </div>
        <p>Aldo Euan</p>
        <a href="#">logout <FaArrowRight /> </a>

      </div>

    </div>
  )
}

export default Slider
