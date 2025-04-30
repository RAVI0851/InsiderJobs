import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import JobSearch from '../Components/JobSearch'
import AppDownload from '../Components/AppDownload'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <JobSearch />
      <AppDownload />
      <Footer/>
    </div>
  )
}

export default Home