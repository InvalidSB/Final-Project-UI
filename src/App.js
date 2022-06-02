import React from "react"
import Hero from "./components/Hero"
import Nav from "./components/Nav"

export default function App() {
  return (

    <>
    <Nav/>
  <div className="bg-white py-[90px]">
    <Hero/>
  </div>
    </>
  )
}