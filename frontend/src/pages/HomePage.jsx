import React from 'react'
import Category from '../components/Categories/Category'
import Footer from '../components/Layout/Footer/Footer'
import Headers from '../components/Layout/Header/Header'
import Policy from '../components/Layout/Policy/Policy'
import Sliders from '../components/Slider/Sliders'
import Products from '../components/Products/Products'
import Campaigns from '../components/Campaigns/Campaigns'
import Blogs from '../components/Blogs/Blogs'
import Brands from '../components/Brands/Brands'
import CampaignSingle from '../components/CampaignSingle/CampaignSingle'

export const HomePage = () => {
  return (
    <React.Fragment>
     <Headers/>
    <Sliders/>
    <Category/>
    <Products/>
    <Campaigns/>
    <Products/>
    <Blogs/>
    <Brands/>
    <CampaignSingle/>
    <Policy/>
    <Footer/>
    </React.Fragment>
  )
}
