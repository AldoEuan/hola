import {useState} from 'react'
import Barra_Perfil from '../Components/Barra_Perfil.jsx'
import Items from '../Components/Items.jsx'
import Links from '../Components/Links.jsx'
import Slider from '../Components/Slider.jsx'
import '../Styles/Inicio.scss'
function Inicio () {

  
  return (
    <div className='inicio'>
      <div className='component-slider'>
        <Slider />
      </div>
      <div className='component-principal'>
        <Barra_Perfil />
        <Items />
        <Links />
        
      </div>
    </div>
  )
}

export default Inicio
