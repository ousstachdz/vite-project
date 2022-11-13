import React from 'react'
import { useState } from 'react'
import NavBar from '../Components/Commun/Navbar/NavBar'
import Features from '../Components/Features/Features'
import FeedBack from '../Components/FeedBack/FeedBack'
import Hero from '../Components/Hero/Hero'
import Store from '../Components/Store/Store'
import Footer from './Commun/Footer/Footer'

export default function Home({ toggleTheme, isDark }) {
  return (
    <>
      <NavBar toggleTheme={toggleTheme} isDark={isDark} />
      <Hero />
      <Store />
      <Features />
      <FeedBack />
      <Footer isDark={isDark} />
    </>
  )
}
