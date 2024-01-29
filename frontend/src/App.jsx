import Category from './components/Categories/Category'
import Footer from './components/Layout/Footer/Footer'
import Header from './components/Layout/Header/Header'
import Policy from './components/Layout/Policy/Policy'
import Sliders from './components/Slider/Sliders'
import Products from './components/Products/Products'
import './App.css'
import Campaigns from './components/Campaigns/Campaigns'
import Blogs from './components/Blogs/Blogs'
import Brands from './components/Brands/Brands'

function App() {
 
  return (
    <>
    <Header/>
     <Sliders/>
     <Category/>
     <Products/>
     <Campaigns/>
     <Products/>
     <Blogs/>
     <Brands/>
     <Policy/>
     <Footer/>
    </>
  )
}

export default App
