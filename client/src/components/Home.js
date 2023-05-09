import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <section id="hero" className="d-flex align-items-center">

        <div className="container" data-aos="zoom-out" data-aos-delay="100">
          <div className="row">
            <div className="col-xl-6">
              <h1>Better and Simplest Medicine Buying Experience</h1>
              <h2>We are providing Medicines to your DoorStep with upto 20-70% Discount</h2>
              <NavLink to="/order" className="btn-get-started scrollto">Order Now</NavLink>
            </div>
          </div>
        </div>

      </section>
    </>
  )
}

export default Home
