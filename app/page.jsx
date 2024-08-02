import React from 'react'
import Navbar from './Navbar';
import App from './App';
import Footer from './Footer';
const page = () => {
  return (
    <>
      <Navbar />
      <div className="seperation">
            </div>
      <App/>
      <div className="seperation">

            </div>
            <Footer/>
    </>
  )
}

export default page
