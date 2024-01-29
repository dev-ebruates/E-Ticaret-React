import React from "react"
import Header from "../components/Layout/Header/Header"
import Category from "../components/Categories/Category"
import Products from "../components/Products/Products"
import CampaignSingle from "../components/CampaignSingle/CampaignSingle"
import Policy from "../components/Layout/Policy/Policy"
import Footer from "../components/Layout/Footer/Footer"

const ShopPage = () => {
  return (
    <React.Fragment>
     <Header/>
     <Category/>
     <Products/>
     <CampaignSingle/>
     <Products/>
     <Policy/>
     <Footer/>
    </React.Fragment>
  )
}

export default ShopPage