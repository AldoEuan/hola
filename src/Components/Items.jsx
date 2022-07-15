import React from 'react'
import '../Styles/Items.scss'
import {FaEye} from 'react-icons/fa'
import {FaRegWindowRestore} from 'react-icons/fa'
import {FaGripVertical} from 'react-icons/fa'
function Items() {
  return (
    <div>
      <div className='container_items'>
        <div className='preview'>
          
          <a href=""><FaEye />Preview</a>
        </div>
        <div className='copy_link'>
          <a href=""><FaRegWindowRestore/> Link</a>
        </div>
        <div className='rearrange'>
          <a href=""><FaGripVertical />Rearrange</a>
        </div>
      </div>
      
    </div>
  )
}

export default Items
