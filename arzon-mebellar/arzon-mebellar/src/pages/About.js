import React from 'react'
import HomeAbout from '../components/HomeAbout'
import TgLink from '../components/TgLink'
import HeaderNav from '../components/HeaderNav'
import Otziv from '../components/Otziv'

export default function About() {
  return (
    <div className='About'>
      <HeaderNav/>
      <HomeAbout/>
      <TgLink/>
      <Otziv/>
    </div>
  )
}
