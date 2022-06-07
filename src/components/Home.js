import React from 'react'
import Nav from "./Nav";

import Hero from "./Hero"
import LiveData from "./LiveData"
import Platform from "./Platform"
import Upload from "./Upload"

function Home() {
   return (

    <>
  <Nav />
  <div className="bg-white py-[90px]">
    
    <Hero/>
    <Platform/>
    <LiveData/>
    <Upload/>
    
  </div>
    </>
  )
}

export default Home