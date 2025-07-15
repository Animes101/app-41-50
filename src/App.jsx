import { useState } from 'react'
import './App.css'
import UseEffect from './components/UseEffect'
import DataFetch from './customHooks/DataFetch'


function App() {

  return (
    <>
    <div>
      <UseEffect />
      <DataFetch />
    </div>
    </>
  )
}

export default App
