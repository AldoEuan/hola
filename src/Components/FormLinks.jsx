import '../Styles/ListadoLinks.scss'

export const FormLinks = () => {
  function saveLink (e) {
    e.preventDefault()
    const { title, url } = e.target.elements
    console.log(title.value, url.value)
  }

  return (
    <div className='container-listadolinks'>
      <form onSubmit={saveLink}>
        <button type='submit'> Save </button>
        <input className='forma' placeholder='Title' type='text' name='title' />
        <input className='forma' placeholder='https://' type='url' name='url' />
      </form>
    </div>
  )
}
