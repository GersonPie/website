import React from 'react'
import Navbar from './componets/Navbar/Navbar'
import Hero from './componets/HeroSection/Hero'
import { ShowCase } from './componets/ShowCase/ShowCase'
import { Tech } from './componets/Tech/Tech'
import { Footer } from './componets/Footer/Footer'
import { Lwus } from './likeWhatYouSee/likewhatyousee'
import { Cf } from './componets/coding-future/cf'
const App = () => {
  return (
    <>
      <div className='app'>
        <Navbar/>
        <Hero/>
        <ShowCase/>
        <Tech/>
        <Lwus/>
        <Cf/>
        <Footer />  
      </div>
    </>
  )
}

export default App
