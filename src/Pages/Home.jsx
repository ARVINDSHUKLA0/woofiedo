import React, { useState } from 'react'
import '../PagesStyle/Home.css'
import Navbar from '../Component/Navbar'
import ServiceOneimg from '/assets/img/SerivesLeftOne.png'
import ServiceTwoimg from '/assets/img/SerivesLeftTwo.png'
import ServiceScrollSlider from '../Component/ServiceScrollSlider'
import AwardsOne from '/assets/img/AwardsOne.jpg'
import AwardTwo from '/assets/img/AwardsTwo.jpg'
import AwardThree from '/assets/img/AwardsThree.jpg'
import Awardfour from '/assets/img/AwardsFour.jpg'
import AwardFive from '/assets/img/AwardsFive.jpg'
import ReviewSlider from '../Component/ReviewSlider'
import BlogImgOne from '/assets/img/blogImg-One.png'
import Footer from '../Component/Footer'
import SvgOne from '/assets/img/svg-1.svg'
import SvgTwo from '/assets/img/svg-2.svg'
import SvgThree from '/assets/img/svg-3.svg'
import HomeImgeOne from '/assets/img/Home1.png'
import FindDogImg from '/assets/img/findDogImg.png'
import HomeImgesTwo from '/assets/img/Epic-arrow2.png'
import HomeImgesThree from '/assets/img/epicpaws-ball-toy.png'
import dogsvgOne from '/assets/img/dogsvg-1.png'
import Pricingimg from '/assets/img/priceing-img-1.png'
import Walk from '/assets/img/walk.svg'
import InputSvgOne from '/assets/img/input-svg-1.svg'
import InputSvgTwo from '/assets/img/input-svg-2.svg'
import InputSvgThree from '/assets/img/input-svg-3.svg'
import InputSvgFour from '/assets/img/input-svg-4.svg'
import Banner from '../Component/Banner'
const Home = () => {

  const [imegshover, setImgesHover] = useState(AwardsOne)
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };


  const Imgesfunc = (image) => {
    setImgesHover(image)
  }




  const MainArr = [
    {
      name: "Brand Identity:", brandDescription: "What I do : I craft the visual foundation of your brand. This includes designing a unique logo that captures your essence, developing comprehensive brand guidelines (color palettes, typography, imagery style), and establishing a cohesive visual identity that resonates with your target audience.", brandInnercontent: "Why it matters : A strong brand identity builds trust, creates recognition, and sets you apart from competitors. It provides consistency across all communication channels, ensuring a unified and professional brand image.", year: "2024", SerivesHedding: "digital infinity awards", titel: 'best animation', image: AwardsOne,
    },
    {
      name: "Web Design", brandDescription: "What I do: I design user-friendly and visually appealing websites that are tailored to your business goals. This involves creating intuitive website layouts, designing engaging user interfaces (UI), and ensuring responsive design for optimal viewing on all devices.", brandInnercontent: "Why it matters: Your website is your online storefront. A well-designed website enhances user experience, drives conversions, and establishes your online credibility.", year: "2023", SerivesHedding: "best website of the year", titel: 'interactive design', image: AwardTwo,
    },
    {
      name: "Print Design", brandDescription: "What I do: I create tangible marketing materials that leave a lasting impression. This includes designing brochures, flyers, business cards, stationery, and packaging that effectively communicate your message and reflect your brand's personality", brandInnercontent: "Why it matters: Print materials provide a physical connection with your audience. High-quality print design reinforces your brand and creates a professional and memorable experience.", year: "2022", SerivesHedding: "festival of digital culture", titel: 'photo contest', image: AwardThree,
    },
    {
      name: "Digital Graphics", brandDescription: "What I do: I design compelling visuals for digital platforms. This includes creating engaging social media graphics, impactful digital advertisements, and informative infographics that capture attention and drive engagement.", brandInnercontent: "Why it matters: In today's digital landscape, strong visuals are essential for online presence. Effective digital graphics increase brand visibility, enhance social media engagement, and drive online traffic.", year: "2021", SerivesHedding: "crown digital agency site", titel: 'css design awards', image: Awardfour,
    },
    {
      name: "Image Editing and Manipulation", brandDescription: "What I do: I enhance and manipulate images to meet your specific needs. This includes photo retouching, color correction, background removal, image composition, and file preparation for both print and web.", brandInnercontent: "Why it matters: High-quality images are crucial for all design projects. Professional image editing ensures that your visuals are polished, consistent, and optimized for their intended use.", year: "2020", SerivesHedding: "the journey of one project", titel: 'portfolio design', image: AwardFive,
    },
  ]




  return (
    <>
      <Navbar />
      <Banner />

      <section className='container py-50'>
        <div className="row m-0 text-center">
          <div className="col-lg-4 col-md-4 col-sm-4 col-12 mb-2">
            <div className='social-conatiner social-content'>
              <img className='img-fluid mb-2' src={SvgOne} width={40} alt="" />
              <h2 className='text-capitalize mb-2'>safe</h2>
              <p className='px-lg-4'>your dog will be walked in safe, open space & will retun happy and tired.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-12 mb-2">
            <div className='social-conatiner social-content'>
              <img className='img-fluid mb-2' src={SvgTwo} width={40} alt="" />
              <h2 className='text-capitalize mb-2'>safe</h2>
              <p className='px-lg-4'>your dog will be walked in safe, open space & will retun happy and tired.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-12 mb-2">
            <div className='social-conatiner social-content'>
              <img className='img-fluid mb-2' src={SvgThree} width={40} alt="" />
              <h2 className='text-capitalize mb-2'>safe</h2>
              <p className='px-lg-4'>your dog will be walked in safe, open space & will retun happy and tired.</p>
            </div>
          </div>
        </div>
      </section>

      <section className='container py-5 overflow-hidden'>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div>
              <img className='img-fluid' src={HomeImgeOne} alt="" />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12 find-dog-img-bg">
            <div className='d-flex'>
              <div className='d-lg-block d-none'>
                <img src={FindDogImg} width={120} alt="" />
              </div>
              <div className='my-md-5'>
                <div className='d-flex align-items-center'>
                  <button className='border-rounded-50 border-0 main-bg '>
                    <i className="fa-solid fa-user-nurse text-white"></i>
                  </button>
                  <span className='ps-2 '>Trusted Dog Walker</span>
                </div>
                <h2>Search & Find Dog Walking Services In Your Area </h2>
                <p>We provide group and individual daily dogs walking that are tailored to fit you and your dog's needs. During the dog walking booking, your sitter will walk and engage with your dog on a safe route.</p>

                <div className='d-md-flex d-block py-md-4'>
                  <div>
                    <p className='m-0'>
                      <span className='pe-2'><i className="fa-solid fa-user-tie main-color"></i></span>
                      <span>Professional Service </span>
                    </p>
                    <p className='m-0'>
                      <span className='pe-2'><i className="fa-solid fa-user-tie main-color"></i></span>
                      <span>GPS Tracking</span>
                    </p>
                    <p className='m-0'>
                      <span className='pe-1'><i className="fa-solid fa-desktop main-color"></i></span>
                      <span>Online Booking</span>
                    </p>
                  </div>
                  <div className='ps-md-5'>
                    <p className='m-0'>
                      <span className='pe-1'><i className="fa-solid fa-award main-color"></i></span>
                      <span>30 Award Winner</span>
                    </p>
                    <p className='m-0'>
                      <span className=''><i className="fa-solid fa-globe main-color"></i></span>
                      <span> Top Worldwide</span>
                    </p>
                    <p className='m-0'>
                      <span className='pe-1'><i className="fa-regular fa-star main-color"></i></span>
                      <span>500+ 5 Star Reviews</span>
                    </p>
                  </div>
                </div>
                <button className='main-btn'>about us</button>
                <div className='d-flex align-items-center justify-content-end position-relative mt-50'>
                  <div className='custom-postion-imges'>
                    <img className='img-fluid custom-width-imge-one' src={HomeImgesTwo} alt="" />
                  </div>
                  <div>
                    <img className='img-fluid rotate-img custom-width-rotate-img' src={HomeImgesThree} alt="" />
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
        <div className='text-center'>
          <h2>How does it work?</h2>
          <p>Booking a dog walker with EpicPaws is easy and safe in three easy steps.</p>
        </div>
      </section>

      <section className="container py-md-5">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-4 col-12 text-center item-hover mb-3">
            <div className="woofiedo-dog-search">
              <img className="img-fluid dog-image" src={dogsvgOne} width={100} alt="" />
              <h4>search for a dog walker</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-12 text-center item-hover mb-3">
            <div className="woofiedo-dog-search">
              <img className="img-fluid dog-image" src={dogsvgOne} width={100} alt="" />
              <h4>search for a dog walker</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-12 text-center item-hover mb-3">
            <div className="woofiedo-dog-search">
              <img className="img-fluid dog-image" src={dogsvgOne} width={100} alt="" />
              <h4>search for a dog walker</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni.</p>
            </div>
          </div>

        </div>
      </section>

      <section className='container'>
        <div className="row m-0">
          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            <div >
              <div className='text-end'>
                <img className='img-fluid' src={Pricingimg} width={300} alt="" />
              </div>
              <div className='d-flex align-items-center'>
                <button className='border-rounded-50 border-0 main-bg '>
                  <i className="fa-solid fa-user-nurse text-white"></i>
                </button>
                <span className='px-2'> Service Packages</span>
              </div>
              <h2 className='ps-md-2 py-3'>Flexible and predictable pricing planes for your extended family</h2>
              <p className='ps-md-2 mb-5'>We provide group and individual daily dogs walking that are tailored to fit you and your dog's needs. During the dog walking booking, your sitter will walk and engage with your dog on a safe.</p>
              <button className='main-btn ps-md-3'>register now </button>

            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-12 mt-50">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 col-12 mt-5 mb-3">
                <div className='custom-pricing-card'>
                  <div className='text-center'>
                    <p className='py-4 custom-bg-pricing'>TRENDING PLAN</p>
                    <img className='img-fluid my-2 ' src={Walk} width={40} alt="" />
                    <h5 className='text-capitalize'>solo walks</h5>
                  </div>

                  <div className='d-flex justify-content-between align-items-center px-2 py-3 mb-3'>
                    <ul className='m-0 p-0'>
                      <li className='list-style-none'>1hour</li>
                      <li className='list-style-none'>45min</li>
                      <li className='list-style-none'>30min</li>
                      <li className='list-style-none'>20min</li>
                    </ul>
                    <ul className='m-0'>
                      <li className='list-style-none fw-bold'>$20 per walk</li>
                      <li className='list-style-none fw-bold'>$18 per walk</li>
                      <li className='list-style-none fw-bold'>$15 per walk</li>
                      <li className='list-style-none fw-bold'>$10 per walk</li>
                    </ul>
                  </div>
                  <div className='text-center mt-4 pt-4 pb-5'>
                    <button className='main-btn'>book kow!</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-12 mt-2">
                <div className='custom-pricing-card'>
                  <div className='text-center'>
                    <p className='py-4 custom-bg-pricing-orange-color'>TRENDING PLAN</p>
                    <img className='img-fluid my-2 ' src={Walk} width={40} alt="" />
                    <h5 className='text-capitalize'>solo walks</h5>
                  </div>

                  <div className='d-flex justify-content-between align-items-center px-2 py-4'>
                    <ul className='m-0 p-0'>
                      <li className='list-style-none'>1hour</li>
                      <li className='list-style-none'>45min</li>
                      <li className='list-style-none'>30min</li>
                      <li className='list-style-none'>20min</li>
                    </ul>
                    <ul className='m-0'>
                      <li className='list-style-none fw-bold'>$20 per walk</li>
                      <li className='list-style-none fw-bold'>$18 per walk</li>
                      <li className='list-style-none fw-bold'>$15 per walk</li>
                      <li className='list-style-none fw-bold'>$10 per walk</li>
                    </ul>
                  </div>
                  <div className='text-center mt-50 pt-4 pb-5'>
                    <button className='main-btn'>book kow!</button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section className='appointment-bg my-50'>
        <div className='d-md-flex d-block justify-content-between align-items-center '>
          <div className='left-side-bg-width'></div>
          <div className='right-side-bg-width pe-lg-5'>
            <div className='d-flex align-items-center pt-4'>
              <button className='border-rounded-50 border-0 main-bg '>
                <i className="fa-solid fa-user-nurse text-white"></i>
              </button>
              <span className='ps-2 text-white  '>Trusted Dog Walker</span>
            </div>
            <h2 className='text-white ps-3'>Book Now An Appointment</h2>
            <div className='custom-input-warpper ms-3'>
              <p className='font-size-small'>I'm looking for service for my:</p>
              <input type="checkbox" name="" id="" /> <span className='font-size-small'>Dog </span>
              <input type="checkbox" name="" id="" /> <span className='font-size-small'>Cat </span>
              <p className='font-size-small mt-3'>What service do you need?</p>
              <div className='d-sm-flex d-block align-items-center justify-content-between px-2 text-center'>
                <div className='custom-border-svg-input mb-3'>
                  <img className='img-fluid' src={InputSvgOne} width={30} alt="" />
                  <p className='font-size-small text-capitalize active'>house sitting</p>
                </div>
                <div className='custom-border-svg-input mb-3'>
                  <img className='img-fluid' src={InputSvgTwo} width={30} alt="" />
                  <p className='font-size-small text-capitalize'>drop-in visits</p>
                </div>
                <div className='custom-border-svg-input mb-3'>
                  <img className='img-fluid' src={InputSvgThree} width={30} alt="" />
                  <p className='font-size-small text-capitalize'>doggy care</p>
                </div>
                <div className='custom-border-svg-input mb-3'>
                  <img className='img-fluid' src={InputSvgFour} width={30} alt="" />
                  <p className='font-size-small  '>Dog walking</p>
                </div>
              </div>
              <form action="">
                <label className='font-size-small' htmlFor="address">What's your address?</label>
                <input
                  className='w-100 py-2 rounded-5 font-size-small'
                  type="text"
                  id="address"
                />
              </form>

              <form action="">
                <label className="font-size-small" htmlFor="start-date">Which dates do you need?</label>
                <div className="d-sm-flex d-block">
                  <input
                    id="start-date"
                    className="w-100 py-2 rounded-5 font-size-small mb-3 ps-2 pe-1"
                    type="date"
                  />
                  <input
                    id="end-date"
                    className="w-100 ms-sm-2 py-2 rounded-5 font-size-small mb-3 ps-2 pe-1"
                    type="date"
                  />
                </div>
              </form>


              <form action="">
                <label className="font-size-small" htmlFor="time1">Which times do you need?</label>
                <div className="d-sm-flex d-block">
                  <input
                    type="text"
                    id="time1"
                    className="w-100 py-2 rounded-5 font-size-small mb-3"
                    placeholder="6am–11am"
                  />
                  <input
                    type="text"
                    id="time2"
                    className="ms-sm-2 w-100 py-2 rounded-5 font-size-small mb-3"
                    placeholder="11am–3pm"
                  />
                  <input
                    type="text"
                    id="time3"
                    className="ms-sm-2 w-100 py-2 rounded-5 font-size-small mb-3"
                    placeholder="3pm–10pm"
                  />
                </div>
              </form>

              <button className='mt-3 main-btn'>submit</button>
            </div>
          </div>
        </div>
      </section>


      <ServiceScrollSlider />

      <section className='container-fluid py-lg-5'>
        <div className='custom-bottom-border  d-flex align-items-center gap-3  my-lg-5  my-md-4 my-sm-4'>
          <h2 className='font-size-large'>awards</h2>
          <h5 className='mt-5 d-md-block d-none'>/ notable achievements</h5>
        </div>
      </section>

      <section className='custom-margin-sm'>
        <div className="container-fluid">
          <div className="row m-0">
            <div className="col-lg-6 d-lg-block d-none col-md-12 col-sm-12 col-12 ps-4 position-relative">
              <img className='imges-set-award' src={imegshover} alt="" />
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12 p-0">
              {
                MainArr.map((Awardsitem, index) => (
                  <div style={{ cursor: 'pointer' }} key={index} onMouseEnter={() => Imgesfunc(Awardsitem.image)} className='d-flex award-hover-item align-items-center justify-content-between'>
                    <div className='left-side-carcel'>
                      <div className='carcel-height-width'>
                        <h6>{Awardsitem.year}</h6>
                      </div>
                      <div className='border-horizontal'></div>
                    </div>
                    <div style={{ width: '48%' }}>
                      <h3>{Awardsitem.SerivesHedding}</h3>
                      <p>{Awardsitem.titel}</p>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </section>

      <ReviewSlider />
      <section className='container-fluid'>
        <div className='custom-bottom-border d-flex align-items-center gap-3  my-lg-5  my-md-4 my-sm-4'>
          <h2 className='font-size-large'>  who i am </h2>
          <h5 className='mt-5 d-md-block d-none'>/ discover our identity</h5>
        </div>
      </section>
      <section>
        <div className="container-fluid">
          <div className="row m-0 py-5 ">
            <div className="col-lg-6 col-md-12 col-sm-12 col-12 ">'
              <div className='conatiner-imges'>
                <div>
                  <div>
                    <img className='img-fluid cutom-img-width' src={ServiceOneimg} alt="" />
                  </div>
                  <div className='text-start text-sm-end'>
                    <img className='img-fluid me-lg-4 sm-mt-3 cutom-img-width' src={ServiceTwoimg} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <h2 className='fw-bold mt-3'>
                Building powerful brands through creative design, seamlessly navigating the digital world to drive growth and visibility.</h2>
              <div className=' mt-100'>
                <ul className="p-0">
                  {MainArr.map((service, index) => (
                    <li key={index} className="list-unstyled">
                      <div
                        className="d-flex justify-content-between align-items-center custom-table-list"
                        onClick={() => handleToggle(index)}
                        style={{ cursor: "pointer" }}
                      >
                        <span className="text-capitalize fw-bold">{service.name}</span>
                        <i
                          className={`fa-solid fa-arrow-right ${activeIndex === index ? "rotate" : ""}`}
                        ></i>
                      </div>

                      {activeIndex === index && (
                        <>
                          {service.brandDescription && (
                            <div className="content-box d-flex gap-3">
                              <i className="fa-solid fa-circle li-icon-dots mt-2"></i>
                              <p>
                                <span style={{ fontWeight: "bold", fontSize: "17px", paddingRight: "10px" }}>
                                  {service.brandDescription.split(" ").slice(0, 3).join(" ")}
                                </span>
                                {service.brandDescription.split(" ").slice(3).join(" ")}
                              </p>
                            </div>
                          )}

                          {service.brandInnercontent && (
                            <div className="content-box d-flex gap-3">
                              <i className="fa-solid fa-circle li-icon-dots mt-2"></i>
                              <p>
                                <span style={{ fontWeight: "bold", fontSize: "17px", paddingRight: "10px" }}>
                                  {service.brandInnercontent.split(" ").slice(0, 3).join(" ")}
                                </span>
                                {service.brandInnercontent.split(" ").slice(3).join(" ")}
                              </p>
                            </div>
                          )}
                        </>
                      )}
                    </li>
                  ))}
                </ul>

              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='container-fluid py-lg-5'>
        <div className='custom-bottom-border  d-flex align-items-center gap-3   my-md-4 my-sm-4'>
          <h2 className='font-size-large'>latest news</h2>
          <h5 className='mt-5 d-md-block d-none'>/ discover the news</h5>
        </div>
      </section>


      <section className='mb-50 custom-my'>
        <div className="row m-0 p-0 ">
          <div className="col-lg-3 col-md-6 col-sm-6 col-12 offset-lg-3">
            <div className="blog-container">
              <span className="blog-line"></span>
              <span className="blog-date">March 28, 2024</span>
              <span className="blog-dot">•</span>
              <p className="blog-category m-0 p-0">creativity</p>
              <h2 className="blog-title fw-bold py-3">techniques for increased productivity</h2>
              <img className='img-fluid' src={BlogImgOne} alt="" />
              <p className='mt-3'>Sed fringilla massa dignissim fringilla dignissim donec faucibus enim vitae ornare gravida phasellus</p>
              <button className='custom-border'>read more</button>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <div className="blog-container">
              <span className="blog-line"></span>
              <span className="blog-date">March 28, 2024</span>
              <span className="blog-dot">•</span>
              <p className="blog-category m-0 p-0">creativity</p>
              <h2 className="blog-title fw-bold py-3">techniques for increased productivity</h2>
              <img className='img-fluid' src={BlogImgOne} alt="" />
              <p className='mt-3'>Sed fringilla massa dignissim fringilla dignissim donec faucibus enim vitae ornare gravida phasellus</p>
              <button className='custom-border'>read more</button>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <div className="blog-container">
              <span className="blog-line"></span>
              <span className="blog-date">March 28, 2024</span>
              <span className="blog-dot">•</span>
              <p className="blog-category m-0 p-0">creativity</p>
              <h2 className="blog-title fw-bold py-3">techniques for increased productivity</h2>
              <img className='img-fluid' src={BlogImgOne} alt="" />
              <p className='mt-3'>Sed fringilla massa dignissim fringilla dignissim donec faucibus enim vitae ornare gravida phasellus</p>
              <button className='custom-border'>read more</button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Home