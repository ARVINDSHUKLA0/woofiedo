import React from 'react'
import '../PagesStyle/Services.css'
import Navbar from '../Component/Navbar'
import ServicesOne from '/assets/img/serives-One.jpg'
import Pricingimg from '/assets/img/priceing-img-1.png'
import Walk from '/assets/img/walk.svg'
import Footer from '../Component/Footer'
import ServicesTwo from '/assets/img/serivesTwo.jpg'
import ServicesThree from '/assets/img/serives-Three.jpg'
import { Link } from 'react-router-dom'
const Services = () => {
    return (
        <>
            <Navbar />
            <section className='serives-banner-bg text-end'>
                <div className="">
                    <span className='text-capitalize'>
                        <Link to="/" className='text-decoration-none-one'>home</Link>
                    </span>
                     <span>/</span> <span className='text-capitalize'>Service </span>
                    <h2 className='text-capitalize fw-bold'>Service</h2>
                </div>
            </section>

            <section className='my-5'>
                <div className="container">
                    <div className="row m-0">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12 mb-3">
                            <div>
                                <img className='img-fluid rounded-4' src={ServicesOne} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12 text-sm-end mb-3">
                            <div className='mb-2'>
                                <div className='d-flex align-items-center justify-content-sm-end'>
                                    <button className='border-rounded-50 border-0 main-bg '>
                                        <i className="fa-solid fa-user-nurse text-white"></i>
                                    </button>
                                    <span className='ps-2 '>Featured Service</span>
                                </div>
                            </div>
                            <div>
                                <h2 className='m-0 pb-3 fw-bold'>Group Dog Walking</h2>
                                <p>If you're happy for your pet to be walked with other dogs, then we offer an affordable dog walking service. We’ll look after your dog for a full hour and take them to a local park so that they can really stretch their legs. We'll play with pet.</p>
                                <button className='main-btn'>book a dog walk</button>

                            </div>
                        </div>
                    </div>
                    <div className="row m-0 my-sm-5">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12 mb-4 ">
                            <div className='my-3'>
                                <div className='d-flex align-items-center'>
                                    <button className='border-rounded-50 border-0 main-bg '>
                                        <i className="fa-solid fa-user-nurse text-white"></i>
                                    </button>
                                    <span className='ps-2 '> Trending Service</span>
                                </div>
                            </div>
                            <div>
                                <h2 className='m-0 pb-3 fw-bold'>Overnight Dog Stay</h2>
                                <p>Trending Service Overnight Dog Stay Whether you need to work or you are going on holiday, some- times you cannot take your pets with you. Putting your pets in a kennel or cattery is not the only option. Your pet will be able to stay in the comfort of your home.</p>
                                <button className='main-btn'>book a dog walk</button>

                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12 mb-4">
                            <div>
                                <img className='img-fluid rounded-4' src={ServicesTwo} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="row m-0 my-sm-5">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                            <div>
                                <img className='img-fluid rounded-4' src={ServicesThree} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12 text-sm-end">
                            <div className='my-3'>
                                <div className='d-flex align-items-center justify-content-sm-end'>
                                    <button className='border-rounded-50 border-0 main-bg '>
                                        <i className="fa-solid fa-user-nurse text-white"></i>
                                    </button>
                                    <span className='ps-2 '>Best Selling Service</span>
                                </div>
                            </div>
                            <div>
                                <h2 className='m-0 pb-3 fw-bold'>Single Dog Walking</h2>
                                <p>If you're happy for your pet to be walked with other dogs, then we offer an affordable dog walking service. We’ll look after your dog for a full hour and take them to a local park so that they can really stretch their legs. We'll play with pet.</p>
                                <button className='main-btn'>book a dog walk</button>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='container mb-4'>
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
            <Footer/>
        </>
    )
}

export default Services