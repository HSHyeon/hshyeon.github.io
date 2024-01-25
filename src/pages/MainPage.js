import React from 'react'
import Header from '../component/Header.js'
import AboutPage from './about/AboutPage.js'
import WorksPage from './works/WorksPage.js'
import ContactPage from './contact/ContactPage.js'

function MainPage() {
  return (
    <>
    <Header/>
    <AboutPage/>
    <WorksPage/>
    <ContactPage/>
    </>
  )
}

export default MainPage