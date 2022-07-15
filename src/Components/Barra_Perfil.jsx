import React, { useState } from 'react'
import '../Styles/Barra_Perfil.scss'
import '../Styles/Formulario.scss'
import { FaPen } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Formulario from './Formulario'
function Barra_Perfil () {
  const [stateperfil, setstateperfil] = useState(true);
  const [statenombre,setstatenombre]= useState("");

  const estadoperfil = () => {
    setstateperfil(false);

  }
  const eestadoperfil = () => {
    setstateperfil(true);

  }
  return (
    <div className='container_barra_perfil'>
      {stateperfil ? (
        <>
          <div className='container_img'>
            <img src="https://i.pinimg.com/originals/a8/bf/da/a8bfda713231f70e6c39e79f164dfbf2.jpg" alt="avatar" className='img_avatar' />
          </div>

          <div className='conteiner_datos'>
            <h3>{statenombre}</h3>
            <p>alllinks.co/AldoEuan.com</p>
          </div>
          <div className='icon-pencil' onClick={estadoperfil} >
            <FaPen />
          </div>
        </>
      ) :
        <>
          <div className='container_formulario'>
            <div className='container_titulo'>
              <h3>Profile</h3>
              <div className='close' onClick={eestadoperfil}>Save and close    X</div>
            </div>
            <form>
              <div className='container-cont-img'>
                <div className='container_img'>
                  <img src="https://i.pinimg.com/originals/a8/bf/da/a8bfda713231f70e6c39e79f164dfbf2.jpg" alt="avatar" className='img_avatar' />
                  <input className='btn_choseim' type="submit" value="Change image" /><br />
                </div>
              </div>

              <input className='forma' placeholder='Escribe el nombre de usuario' type="text" name="name" onChange={e=> setstatenombre(e.target.value)} /><br />
              <input className='forma' placeholder='Escribe tus habilidades' type="text" name="name" />
            </form>

          </div>
        </>

      }
    </div>
  )
}

export default Barra_Perfil
