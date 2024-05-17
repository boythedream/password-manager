import React from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Manger from './components/Manger'
import Footer from './components/Footer'

function App() {

  return (
    <>
    
     <Navbar/>
     <div className='min-h-[84.5vh]'>
    

     <Manger/>
     

     </div>
     <Footer/>
     
    </>
  )
}

export default App
