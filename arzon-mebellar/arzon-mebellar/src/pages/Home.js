import React from 'react'
import HomeAbout from '../components/HomeAbout'
import HomeHeader from '../components/HomeHeader'
import Form from '../components/Form'
import TgLink from '../components/TgLink'
import ProductsCard from '../components/ProductsCard'
import Otziv from '../components/Otziv'
import FAQ from '../components/FAQ'
import ContactBody from '../components/ContactBody'

export default function Home() {
  return (
    <div className='Home'>
      <HomeHeader/>
      <ProductsCard/>
      <TgLink/>
      <HomeAbout/>
      <Form/>
      <Otziv/>
      <FAQ/>
      <ContactBody/>
    </div>
  )
}
