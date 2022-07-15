import { useState } from 'react'
import './App.scss'
import {BrowserRouter} from 'react-router-dom'
import Inicio from './Pages/Inicio'

function App () {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
<Inicio />
    
    </div>
  )
}

export default App
