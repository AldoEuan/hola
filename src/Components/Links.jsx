import React from 'react'
import '../Styles/Links.scss'
import {FaLink} from 'react-icons/fa'
import { useState } from 'react'
import ListadoLinks from './ListadoLinks'
function Links() {
  const  [newlink,setNewlink]= useState(false);
  const [objeto,setobjeto]= useState([]);

  const agregalink =()=> {
    setNewlink(!newlink);
  }

  const guardargasto=()=>{

  }

  return (
    <div className='container_links'>

      <div className='container_section_icon'>
        <div className='circle-icon'>
          <FaLink />
        </div>
        <h2>Links</h2>
      </div>
        {/* botton azul de nuevo link */}
        
      <div className='btn_link' onClick={agregalink}>
        <p>+ New link</p>
      </div>
      {newlink && (<ListadoLinks />)}
    </div>
  )
}

export default Links
