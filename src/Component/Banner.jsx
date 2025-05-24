import React from 'react'
import '../ComponentStyle/Banner.css'
import Dogimg from '/assets/img/dog-1.jpg'
import DogBannerOne from '/assets/img/BannerOne.jpg'
import DogBannerTwo from '/assets/img/BannerTwo.jpg'
import DogBannerThree from '/assets/img/BannerThree.jpg'
import DogBannerFour from '/assets/img/BannerFour.jpg'

const Banner = () => {
  return (
    <>
      <section className='overflow-hidden'>
        <div className='container  px-2 position-relative'>
          <div className="row my-100">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div>
                <h2 className='banner-font-size mb-3'> Gentle Hands, Healthy Paws Exceptional <span className='banner-custom-color'> Pet Care.</span></h2>
                <p className='mt-sm-5 my-4'>Woofie Do offers expert, gentle care for your beloved pet. Our comprehensive services, from routine check-ups to advanced treatments, mean your furry family member always receives the best possible veterinary attention.</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className='custom-imges-height d-flex position-relative'> 
                <div className='banner-inner-warper mt-100'>
                  <div className=' bg-custom-one border-banner-one custom-height mb-sm-3 mb-2 position-relative'>
                    <div className='imges-banner-warpper item-banner-one'>
                      <img className='img-fluid border-banner-one' src={DogBannerOne} alt="" />
                    </div>
                  </div>
                  <div className=' bg-custom-two border-banner-two custom-height mb-sm-3  position-relative '>
                    <div className='imges-banner-warpper item-banner-one'>
                      <img className='img-fluid border-banner-two' src={DogBannerTwo} alt="" />
                    </div>
                  </div>
                </div>
                <div className='banner-inner-warper ps-lg-5  ps-md-3 ps-3'>
                  <div className=' bg-custom-three border-banner-one custom-height mb-sm-3 mb-2  position-relative '>
                    <div className='imges-banner-warpper item-banner-one '>
                      <img className='img-fluid border-banner-one' src={DogBannerThree} alt="" />
                    </div>
                  </div>
                  <div className=' bg-custom-four border-banner-two custom-height mb-sm-3  position-relative '>
                    <div className='imges-banner-warpper item-banner-one '>
                      <img className='img-fluid border-banner-two' src={DogBannerFour} alt="" />
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
          {/* <div className='cusstom-postion-bootom '>
            <button className='p-1 custom-dot-banner zoom-out-always'></button>
            <div className='d-sm-flex d-block justify-content-between align-items-center'>
              <p className='text-capitalize'>pick the pet service that's right for your pet.</p>
              <button className='main-btn'>view pricings</button>
            </div>
          </div> */}
        </div>
      </section>
    </>
  )
}

export default Banner