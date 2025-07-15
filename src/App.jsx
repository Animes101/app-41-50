import { useState } from 'react'
import './App.css'
import UseEffect from './components/UseEffect'
import DataFetch from './customHooks/DataFetch'
import RestCountry from './components/RestCountry'


function App() {

  return (
    <>
    <div>
      <UseEffect />
      <DataFetch />

      <div>
        <RestCountry />
      </div>
    </div>
    </>
  )
}

export default App
