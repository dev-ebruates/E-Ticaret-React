import React from "react"
import Header from "../components/Layout/Header/Header"
import CampaignSingle from "../components/CampaignSingle/CampaignSingle"
import Policy from "../components/Layout/Policy/Policy"
import Footer from "../components/Layout/Footer/Footer"
import ProductDetails from "../components/ProductDetails/ProductDetails"

const ProductDetailsPage = () => {
  return (
    <React.Fragment>
      <Header/>
      <ProductDetails/> 
      <CampaignSingle/>
      <Policy/>
      <Footer/>
    </React.Fragment>
  )
}

export default ProductDetailsPage