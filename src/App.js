import React from 'react'
import { Blog, Header, Footer, Features, WhatGPT, Possibility} from './containers'
import { Cta, Brand, Navbar } from './components'
const App = () => {
  return (
    <div className='App'>
      <div className="gradient_bg">
        <Navbar />
        <Header />
        </div>
        <Brand />
        <WhatGPT />
        <Features />
        <Possibility />
        <Cta />
        <Blog />
        <Footer />



        
    </div>
  )
}

export default App
