import React from 'react'
import Navbar from '../Component/Navbar'
import '../PagesStyle/Contact.css'
import ContactBootomImges from '/assets/img/ContactBootomimg.jpg'
import Footer from '../Component/Footer.jsx'
import { Link } from 'react-router-dom'

const Contact = () => {

  return (
    <>
      <Navbar />

      <section className='conatct-banner-bg text-end'>
        <div className="">
          <span className='text-capitalize'>
            <Link to="/" className='text-decoration-none-one'>
              home
            </Link>
          </span> <span>/</span> <span className='text-capitalize'>contact us </span>
          <h2 className='text-capitalize fw-bold'>contact us</h2>
        </div>
      </section>

      <section className='d-sm-flex d-block'>
        <div className='custom-width-contact-one px-sm-4 mt-50'>
          <h2 className='text-capitalize fw-bold'>Dog walking services</h2>
          Your email address will not be published. Required fields are marked *
          <div className='d-flex justify-content-between my-4'>
            <form className='w-100' action="">
              <input
                className='w-100 py-2 rounded-5 font-size-small '
                type="text"
                id="address"
                placeholder='Name*'
              />
            </form>
            <form className='w-100' action="">
              <input
                className='w-100 py-2 rounded-5 font-size-small ms-1'
                type="email"
                id="address"
                placeholder='Email*'
              />
            </form>
            <form className='w-100' action="">
              <input
                className='w-100 py-2 rounded-5 font-size-small ms-2 '
                type="text"
                id="address"
                placeholder='Subject*'
              />
            </form>

          </div>
          <form action="">
            <textarea className='w-100 rounded-5 my-3 font-size-small' name="" rows={7} id=""></textarea>
          </form>
          <button className='main-btn'>submit kow</button>
        </div>
        <div className="container-fluid my-50 custom-width-contact-two">
          <iframe
            title="Office Location"
            width="100%"
            height="400"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20103.25243905627!2d77.36506861405148!3d28.612882770615602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef8e9e95e497%3A0x59e8df2ffed4a0e1!2sThink%20Cmyk%20Studios!5e1!3m2!1sen!2sin!4v1740561737620!5m2!1sen!2sin"
          ></iframe>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Contact

