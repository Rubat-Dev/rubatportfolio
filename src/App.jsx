import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Resume from './Components/Resume'
import Services from './Components/Services'
import Counter from './Components/Counter'
import Portfolio from './Components/Portfolio'
import Faqs from './Components/Faqs'
import Review from './Components/Review'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import LightBox from './Components/LightBox'
const App = () => {

  return (
   <>
   <LightBox/>
   <Navbar/>
   <Home/>
   <About/>
   <Resume/>
   <Services/>
   <Counter/>
   <Portfolio/>
   <Faqs/>
   <Review/>
   <Contact/>
   <Footer/>
   </>
  )
}

export default App
