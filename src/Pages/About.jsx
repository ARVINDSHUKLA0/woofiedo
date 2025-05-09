import React from 'react'
import Navbar from '../Component/Navbar.jsx'
import '../PagesStyle/About.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReviewSilder from '../Component/ReviewSlider.jsx'
import FindDogImg from '/assets/img/findDogImg.png'
import HomeImgesThree from '/assets/img/epicpaws-ball-toy.png'
import HomeImgeOne from '/assets/img/Home1.png'
import Footer from '../Component/Footer.jsx'
import { Link } from 'react-router-dom';
import AboutTeamOne from '/assets/img/aboutTeam1.jpeg'
import BlogData from '../BlogData.js';

const About = () => {


    return (
        <>
            <Navbar />
            <section className='about-banner-bg text-end'>
                <div className="">
                    <span className='text-capitalize'>home</span> <span>/</span> <span className='text-capitalize'>about us </span>
                    <h2 className='text-capitalize fw-bold'>about us</h2>
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
                                    <div>
                                        <img className='img-fluid rotate-img custom-width-rotate-img' src={HomeImgesThree} alt="" />
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>

            </section>

            <section>
                <div className="container mb-5">
                    <div className="row m-0">
                        <div className="col-lg-4 col-md-4 col-sm-12 col-12 mb-4">
                            <div className='d-flex align-items-center'>
                                <button className='border-rounded-50 border-0 main-bg '>
                                    <i className="fa-solid fa-user-nurse text-white"></i>
                                </button>
                                <span className='ps-2 text-capitalize '>experience team</span>
                            </div>
                            <h2>Meet Our Experienced Dog Trainers</h2>
                            <p>
                                Pet Food pet supplies gimme five puppy cage food feathers food heel feathers running pet gate walk lazy dog Spike.</p>
                            <button className='main-btn'>meet our team</button>
                        </div>
                        <div className="col-lg-8 col-md-8 col-sm-12 col-12">
                            <div className='d-sm-flex d-block text-center'>
                                <div>
                                    <Link >
                                        <img className='img-fluid w-100 rounded-4' src={AboutTeamOne} alt="" />
                                    </Link>
                                    <h6 className='m-0'>Laura Gallagher</h6>
                                    <p>Lorem dolor amet consectetur adipiscing eiusmod tempor</p>
                                </div>
                                <div className='ms-sm-3'>
                                    <Link>
                                        <img className='img-fluid w-100 rounded-4' src={AboutTeamOne} alt="" />
                                    </Link>
                                    <h6 className='m-0'>Laura Gallagher</h6>
                                    <p>Lorem dolor amet consectetur adipiscing eiusmod tempor</p>
                                </div>
                                <div className='ms-sm-3'>
                                    <Link>
                                        <img className='img-fluid w-100 rounded-4' src={AboutTeamOne} alt="" />
                                    </Link>
                                    <h6 className='m-0'>Laura Gallagher</h6>
                                    <p>Lorem dolor amet consectetur adipiscing eiusmod tempor</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='my-4'>
                <div className="row m-0">
                    <div className="col-lg-12 col-sm-12 col-12">
                        <div className="row m-0">
                            {BlogData.slice(1, 5).map((blogValue, index) => (
                                <div key={index} className="col-lg-3 col-sm-6 col-12 mb-50 custom-sm-margin">
                                    <div className='d-flex align-items-center'>
                                        <div className='cutom-border'></div>
                                        <p className='m-0 ps-2'>{blogValue.date}</p>
                                        <i className="fas fa-circle li-icon-dots ps-2"></i>
                                    </div>
                                    <p className='m-0'>{blogValue.creativity}</p>
                                    <h4 className='fw-bold my-lg-4 py-2'>{blogValue.name}</h4>
                                    <img className='img-fluid' src={blogValue.image} alt="" />
                                    <p className='m-0 py-lg-4 py-3'>{blogValue.title}</p>
                                    <Link to={`/blog/${blogValue.id}`}>
                                        <button className='custom-border'>read more</button>
                                    </Link>

                                </div>
                            ))}
                        </div>
                    </div>
                </div>


            </section>

            <ReviewSilder />
            <Footer />
        </>
    )
}

export default About