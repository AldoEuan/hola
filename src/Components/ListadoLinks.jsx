import React, { useState, useEffect } from 'react'
import '../Styles/ListadoLinks.scss'
import { FcMultipleCameras } from "react-icons/fc"
import { FaPen } from 'react-icons/fa'

const ListadoLinks = () => {
  const [link, setLink] = useState(true);
  const [titulo, setTitulo] = useState("");
  const [direccion, setDireccion]= useState("");
  const [todo, setTodo] = useState([])
  
  const statelinktfalse = () => {
    setLink(false);
  }

  const statelinktrue = () => {
    setLink(true);  
  }

  return (
    <div className='container-listadolinks'>
      {link ? (
      <>
        <h2>{titulo}</h2> 
        <h4>{direccion}</h4>
        <FaPen onClick={statelinktfalse} />
      </>
      ) :
        <>
          <div className='container_close'>
            <div className='close' onClick={statelinktrue} >Save and close    X</div>
          </div>
          <form>
            <input className='forma' placeholder='Title' type="text" name="name" onChange={e=>setTitulo(e.target.value)}/><br />
            <input className='forma' placeholder='https://' type="text" name="name" on onChange={e=>setDireccion(e.target.value)} />
            <div className='container-cont-icon'>
              <FcMultipleCameras className='icon-camera' />
              <input className='btn_choseim' type="submit" value="Change image" /><br />
            </div>
          </form>
        </>
      }
    </div>
  )
}

export default ListadoLinks
