import React from 'react'
import '../Styles/Formulario.scss'
import {Link} from 'react-router-dom'
import Barra_Perfil from './Barra_Perfil'
function Formulario() {
  return (
    <div className='container_formulario'>
      <div className='container_titulo'>
        <h3>Profile</h3>
        <Link className='close' to="/">Save and close    X</Link>
      </div>
      <form>
        <div className='container-cont-img'>
          <div  className='container_img'>
          <img src="https://i.pinimg.com/originals/a8/bf/da/a8bfda713231f70e6c39e79f164dfbf2.jpg" alt="avatar"  className='img_avatar'/> 
          <input className='btn_choseim' type="submit" value="Change image" /><br/>
          </div>
        </div>
        
        <input  className='forma' placeholder='Escribe el nombre de usuario' type="text" name="name"  /><br/>
        <input className='forma' placeholder='Escribe tus habilidades' type="text" name="name"  />
      </form>
      
    </div>
  )
}

export default Formulario
