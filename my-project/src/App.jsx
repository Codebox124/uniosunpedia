import React from "react"
import Hero from "./components/Hero"
import Header from "./components/Header"
import LatestBlog from "./components/LatestBlog"
export default function App() {
  return (
    <div>
      <Header />
      <Hero />
      <LatestBlog />
    </div>
  )
}