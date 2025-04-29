import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import JobSearch from '../Components/JobSearch'
import AppDownload from '../Components/AppDownload'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <JobSearch />
      <AppDownload />
    </div>
  )
}

export default Home