import '../Styles/Links.scss'
import React, { useState } from 'react'
import { FaLink } from 'react-icons/fa'

import { ListItem } from './ListItem'

import '../Styles/ListadoLinks.scss'

export const Links = () => {
  const [newlink, setNewlink] = useState(false)
  const [list, setList] = useState([])

  const addLink = () => {
    setNewlink(!newlink)
  }

  function uuidv4 () {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      const r = Math.random() * 16 | 0; const v = c === 'x' ? r : (r & 0x3 | 0x8)
      return v.toString(16)
    })
  }

  function saveLink (e) {
    e.preventDefault()
    const { title, url } = e.target.elements
    setList([...list, { id: uuidv4(), title: title.value, url: url.value }])
    setNewlink(false)
  }

  return (
    <div className='container_links'>
      <div className='container_section_icon'>
        <div className='circle-icon'>
          <FaLink />
        </div>
        <h2>Links</h2>
      </div>
      <button className='btn_link' onClick={addLink}>
        New link
      </button>
      {newlink &&
        <>
          <form onSubmit={saveLink}>
            <button type='submit'> Save </button>
            <input className='forma' placeholder='Title' type='text' name='title' />
            <input className='forma' placeholder='https://' type='url' name='url' />
          </form>
        </>}
      {
        list.map(data => (
          <ListItem key={data.id} data={data} />
        ))
      }
    </div>
  )
}
