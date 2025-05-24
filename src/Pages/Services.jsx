import React from 'react'
import '../PagesStyle/Services.css'
import Navbar from '../Component/Navbar' 
import Pricingimg from '/assets/img/priceing-img-1.png'
import Walk from '/assets/img/walk.svg'
import Footer from '../Component/Footer' 
import { Link } from 'react-router-dom'

import  PetConsultations from '/assets/img/PetConsultations-imges.jpg'
import  PetVaccinations from '/assets/img/PetVaccinations-imges.jpg'
import HouseDiagnostics from '/assets/img/In-HouseDiagnostics.jpg'
import petFoodImges from '/assets/img/Pet Food & Diet Consultation.jpg'
import PetSurgery from '/assets/img/SurgeryPet-Serives.jpg'
import petHosptailName from '/assets/img/petHosptailName.jpg'
import PetGrooming from '/assets/img/PetGrooming.jpg'
import PetTransportation from '/assets/img/PetTransportation.jpg'
import PetRegistration from '/assets/img/PetRegistration.jpg'
import PetCremation from '/assets/img/PetCremation.jpg'
import EmergencyImges from '/assets/img/24x7EmergencyServices.jpg'
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

            <section className='container my-5'>
                <p className='fs-2 fw-bold text-center m-0 mb-3'>Our Services: Comprehensive Care for Your Beloved Pet</p>
                <p className='text-center'>At Woofie Do, we are dedicated to providing a full spectrum of high-quality veterinary services designed to ensure your pet's health, happiness, and well-being at every stage of their life. From routine preventative care to advanced medical procedures and emergency services, our experienced and compassionate team is here to support you and your furry family member.</p>
            </section>

            <section>
                <p className='text-center fs-4 fw-light-bolder'>Core Medical & Wellness Services</p>
            </section>


            <section className='my-5'>
                <div className="container">
                    <div className="row m-0">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12 mb-3">
                            <div className='imges-teams-height'>
                                <img className='img-fluid rounded-4' src={PetConsultations} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12 text-sm-end mb-3">
                            <div>
                                <h2 className='m-0 pb-3 fw-bold'>Pet Consultations</h2>
                                <p>Whether it's a routine check-up, a specific health concern, or advice on pet behavior and diet, our expert veterinarians are here to provide personalized consultations. We take the time to listen, assess, and offer clear, actionable recommendations tailored to your pet's unique needs.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row m-0 my-sm-5">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12 mb-4 ">
                            <div>
                                <h2 className='m-0 pb-3 fw-bold'>Pet Vaccinations</h2>
                                <p>Protecting your pet from common and dangerous diseases is vital. We offer a comprehensive vaccination program customized to your pet's lifestyle, age, and risk factors. Our team will guide you through the recommended vaccines for your dog or cat, ensuring they remain safeguarded.
                                </p>

                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12 mb-4">
                            <div className='imges-teams-height'>
                                <img className='img-fluid rounded-4' src={PetVaccinations} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="row m-0 my-sm-5">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className='imges-teams-height'>
                                <img className='img-fluid rounded-4' src={HouseDiagnostics} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12 text-sm-end">
                            <div>
                                <h2 className='m-0 pb-3 fw-bold'>In-House Diagnostics</h2>
                                <p>For rapid and accurate diagnoses, our clinic is equipped with state-of-the-art in-house diagnostic capabilities. This includes advanced blood tests, urinalysis, digital X-rays, and ultrasound. Performing these tests on-site allows for quick results, enabling us to identify health issues and begin treatment promptly.</p>

                            </div>
                        </div>
                    </div>
                    <div className="row m-0 my-sm-5">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12 mb-4 ">
                            <div>
                                <h2 className='m-0 pb-3 fw-bold'>Pet Food & Diet Consultation</h2>
                                <p>Proper nutrition is the foundation of good health. Our veterinarians provide expert guidance on pet food and diet plans, addressing specific needs such as weight management, allergies, medical conditions, or simply choosing the best food for your pet's life stage.</p>

                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12 mb-4">
                            <div className='imges-teams-height'>
                                <img className='img-fluid rounded-4' src={petFoodImges} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className='text-center'>
                    <p className='fs-4 fw-light-bolder'>Specialized & Advanced Care</p>
                </div>
            </section>

            <section className='my-5'>
                <div className="container">
                    <div className="row m-0">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12 mb-3">
                            <div className='imges-teams-height'>
                                <img className='img-fluid rounded-4' src={PetSurgery} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12 text-sm-end mb-3">
                            <div>
                                <h2 className='m-0 pb-3 fw-bold'>Surgery</h2>
                                <p>Should your pet require surgery, you can trust our highly skilled surgical team. We perform a wide range of procedures, from routine spays and neuters to more complex soft tissue surgeries. We prioritize your pet's safety and comfort with meticulous pre-operative assessments, continuous monitoring during procedures, and dedicated post-operative care for a smooth recovery.</p>

                            </div>
                        </div>
                    </div>
                    <div className="row m-0 my-sm-5">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12 mb-4 ">
                            <div>
                                <h2 className='m-0 pb-3 fw-bold'>Pet IPD (In-Patient Department / Hospitalization)</h2>
                                <p>For pets requiring continuous medical attention, intensive care, or close observation, our dedicated In-Patient Department provides a secure and comfortable environment. Our compassionate team offers round-the-clock monitoring, specialized treatments, and attentive care to support your pet's healing and recovery.</p>

                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12 mb-4">
                            <div className='imges-teams-height'>
                                <img className='img-fluid rounded-4' src={petHosptailName} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div>
                    <p className='text-center fs-4 fw-light-bolder'>Convenience & Support Services</p>
                </div>
            </section>

            <section className='my-5'>
                <div className="container">
                    <div className="row m-0">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12 mb-3">
                            <div className='imges-teams-height'>
                                <img className='img-fluid rounded-4' src={PetGrooming} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12 text-sm-end mb-3">
                            <div>
                                <h2 className='m-0 pb-3 fw-bold'>Pet Grooming</h2>
                                <p>Beyond aesthetics, professional grooming is crucial for your pet's hygiene and overall health. Our gentle groomers offer a full range of services including baths, trims, nail clipping, and ear cleaning, all in a calming atmosphere. Regular grooming helps prevent skin issues, matting, and discomfort.</p>

                            </div>
                        </div>
                    </div>
                    <div className="row m-0 my-sm-5">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12 mb-4 ">
                            <div>
                                <h2 className='m-0 pb-3 fw-bold'>Pet Transportation</h2>
                                <p>We understand that getting your pet to the clinic can sometimes be a challenge. Our convenient and safe pet transportation service ensures that your furry friend can comfortably travel to and from our clinic for appointments, surgeries, or emergencies, making quality care more accessible.</p>

                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12 mb-4">
                            <div className='imges-teams-height'>
                                <img className='img-fluid rounded-4' src={PetTransportation} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="row m-0">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12 mb-3">
                            <div className='imges-teams-height'>
                                <img className='img-fluid rounded-4' src={PetRegistration} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12 text-sm-end mb-3">
                            <div>
                                <h2 className='m-0 pb-3 fw-bold'>Pet Registration</h2>
                                <p>Ensuring your pet is properly registered is an important measure for their safety and identification. We can assist you with the necessary paperwork and procedures for pet registration, helping you comply with local regulations and increasing the chances of reunification should your pet ever go missing.</p>

                            </div>
                        </div>
                    </div>
                    <div className="row m-0 my-sm-5">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12 mb-4 ">
                            <div>
                                <h2 className='m-0 pb-3 fw-bold'>Pet Cremation</h2>
                                <p>In the difficult time of loss, we offer compassionate and respectful pet cremation services. We provide both individual and communal cremation options, handling everything with the dignity and care your beloved companion deserves, helping you honor their memory.
                                </p>

                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12 mb-4">
                            <div className='imges-teams-height'>
                                <img className='img-fluid rounded-4' src={PetCremation} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="row m-0">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12 mb-3">
                            <div className='imges-teams-height'>
                                <img className='img-fluid rounded-4' src={EmergencyImges} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12 text-sm-end mb-3">
                            <div>
                                <h2 className='m-0 pb-3 fw-bold'>24x7 Emergency Services</h2>
                                <p>Pet emergencies are unpredictable and can be distressing. Our dedicated 24x7 emergency veterinary services ensure that expert medical attention is always available when your pet needs it most. Our team is ready to provide immediate and critical care for sudden illnesses, accidents, or urgent conditions, day or night.</p>

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
            <Footer />
        </>
    )
}

export default Services