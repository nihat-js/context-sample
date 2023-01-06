import { useState } from 'react'
import './App.css'

import IndexPage from './pages/Index'
import MainContext from './context/mainContext'

function App() {


   return (

      <div className="App">
         <MainContext>
            <IndexPage />
         </MainContext>
      </div>
   )
}

export default App
