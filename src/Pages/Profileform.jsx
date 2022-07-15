import React from 'react'
import Slider from '../Components/Slider.jsx'
import Formulario from '../Components/Formulario.jsx'
import Items from '../Components/Items.jsx'
import Links from '../Components/Links.jsx'
import '../Styles/Inicio.scss'
function Profileform() {
  return (
    <div  className='inicio' >
      <div className='component-slider'>
       <Slider />
     </div>
     <div className='component-principal'>
       <Formulario />
       <Items />
       <Links />
     </div>
    </div>
  )
}

export default Profileform
