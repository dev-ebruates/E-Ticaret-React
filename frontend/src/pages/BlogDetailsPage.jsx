import React from 'react'
import Header from '../components/Layout/Header/Header'
import Policy from '../components/Layout/Policy/Policy'
import Footer from '../components/Layout/Footer/Footer'
import BlogDetails from '../components/BlogDetails/BlogDetails'


const BlogDetailsPage = () => {
  return (
    <React.Fragment>
      <Header/>
      <BlogDetails/>
      <Policy/>
      <Footer/>

    </React.Fragment>
  )
}

export default BlogDetailsPage