import React from 'react'
import '../ComponentStyle/Banner.css'
import Dogimg from '/assets/img/dog-1.jpg'

const Banner = () => {
  return ( 
    <>
      <section className='overflow-hidden'>
          <div className='container  px-2 position-relative'>
              <div className="row my-50">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                       <div>
                          <h2 className='banner-font-size mb-3'> loocking for anyone to walk your friend ? <br /> book on <span className='banner-custom-color'>EpicPaws.</span></h2>
                           <p className='mt-sm-5 my-4'>We'll help your dog grow through soclisation and learn how to explore their world. Play, love and exercise for your dog while you're out. Our dog walking service runs throughout the day.</p>
                       </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                     <div className='custom-imges-height'>
                       <img className='img-fluid' src={Dogimg} alt="" />
                     </div>
                  </div>
              </div>
              <div className='cusstom-postion-bootom '>
                  <button className='p-1 custom-dot-banner zoom-out-always'></button>
                 <div className='d-sm-flex d-block justify-content-between align-items-center'>
                   <p className='text-capitalize'>pick the pet service that's right for your pet.</p>
                   <button className='main-btn'>view pricings</button>
                 </div>
              </div>
          </div>
      </section>
    </>
  )
}

export default Banner