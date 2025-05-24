import React from 'react';
import '../PagesStyle/Blog.css';
import Navbar from '../Component/Navbar.jsx';
import Footer from '../Component/Footer.jsx';
import { Link } from 'react-router-dom';
import BlogData from '../BlogData.js';

const Blog = () => {
  return (
    <>
      <Navbar />

      <section className='container-fluid py-lg-5'>
        <div className='custom-bottom-border d-flex align-items-center gap-3 my-lg-5 my-md-4 my-sm-4'>
          <h2 className='font-size-large'>blog grid</h2>
          <h5 className='mt-5 d-md-block d-none'>/ discover the news</h5>
        </div>
      </section>

      <section>
        <div className="row m-0">
          <div className="col-lg-9 col-sm-6 col-12 offset-lg-3">
            <div className="row m-0">
              {BlogData.map((blogValue) => (
                <div key={blogValue.id} className="col-lg-4 col-sm-6 col-12 mb-50 custom-sm-margin">
                  <div className='d-flex align-items-center'>
                    <div className='cutom-border'></div>
                    <p className='m-0 ps-2'>{blogValue.date}</p>
                    <i className="fas fa-circle li-icon-dots ps-2"></i>
                  </div>
                  <p className='m-0'>{blogValue.creativity}</p>
                  <h5 className='fw-bold my-lg-4'>{blogValue.title}</h5>
                  <img className='img-fluid' src={blogValue.image} alt={blogValue.title} />
                  <p className='m-0 py-lg-4 py-3'>{blogValue.description}</p>
                  <Link to={`/blog/${blogValue.id}`}>
                    <button className='custom-border'>read more</button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

      </section>

      <Footer />
    </>
  );
};

export default Blog;
