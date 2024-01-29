
import './App.css'
import Category from './components/Layout/Categories/Category'
import Footer from './components/Layout/Footer/Footer'
import Header from './components/Layout/Header/Header'
import Policy from './components/Layout/Policy/Policy'
import Sliders from './components/Layout/Slider/Sliders'
import Products from './components/Products/Products'

function App() {
 
  return (
    <>
    <Header/>
     <Sliders/>
     <Category/>
     <Products/>
     <Policy/>
     <Footer/>
    </>
  )
}

export default App
