import React from "react"
import Hero from "./components/Hero"
import Header from "./components/Header"
import LatestBlog from "./components/LatestBlog"
import Latestcourses from "./components/LatestCourses"
import Footer from "./components/Footer"
import {BrowserRouter as Router, Route} from "react-router-dom";
import SingleBlogPost from './components/SingleBlogPost'


export default function App() {
  return (
   <Router>
    
     <div>
    
      <Header />
      <Hero />
      <LatestBlog />
      <Latestcourses/>
      <Footer/>
    </div>
   </Router>
  )
}