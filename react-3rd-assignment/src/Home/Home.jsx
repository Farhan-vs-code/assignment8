import React from 'react'
import Navbar from './Navbar'
import Carousel from './Carousel'
import Card1 from './Card1'
import Hero from './Hero'
import Review from './Review'

const Home = () => {
  return (
    <main>
        <Navbar />
        <Carousel />
        <Card1 />
        <Hero />
        <Review />
    </main>
  )
}

export default Home