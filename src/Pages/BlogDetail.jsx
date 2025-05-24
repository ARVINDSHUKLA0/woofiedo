import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import Slider from 'react-slick';
import BlogData from '../BlogData';

const BlogDetail = () => {
    const { id } = useParams();
    const blog = BlogData.find((b) => b.id === parseInt(id));

    if (!blog) {
        return <h2>Blog not found</h2>;
    }

    const filteredBlogs = BlogData.filter((b) => b.id !== parseInt(id));

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 3 } },
            { breakpoint: 768, settings: { slidesToShow: 2 } },
            { breakpoint: 480, settings: { slidesToShow: 1 } }
        ]
    };

    return (
        <>
            <Navbar />

            <section className='container-fluid'>
                <div className="row m-0">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className='blog-details-container'>
                            <img className='w-100 d-block mx-auto my-4' src={blog.image} alt={blog.title} />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className='pt-3'>
                            <h4 className='text-capitalize'>Title: {blog.title}</h4> 

                            <p className='text-capitalize my-3'>
                                <span className='fw-bold fs-6'>Description:</span> {blog.description}
                            </p>

                            <p className='fs-5 fw-bold'>{blog.SubTitle}</p>
                            <p>{blog.subDecipation}</p>
 
                            {blog.keyfeture && blog.keyfeture.length > 0 && (
                                <div className="pt-4"> 
                                    {blog.keyfeture.map((item, index) => (
                                        <div key={index} className="mb-3">
                                            <h5 className='fw-bold'>{item.BlogHedding}</h5>
                                            <p>{item.blogTitle}</p>
                                            <div>
                                                 <p><span className='fw-bold'>{item.BlogSubTitle}</span> <span>{item.BlogSubDecipation}</span></p>
                                            </div>
                                            <div>
                                                <p className='fs-5 fw-bold'>{item.GroomingTitle}</p>
                                                <p>{item.GroomingTitle}</p>
                                                <p>{item.GroomingDec}</p>
                                                <p className='fw-bold'>{item.Petemergency}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            <section className='container-fluid overflow-hidden mb-lg-5'>
                <Slider {...settings}>
                    {filteredBlogs.map((item) => (
                        <div key={item.id} className='p-3'>
                            <div className='d-flex align-items-center'>
                                <div className='cutom-border'></div>
                                <p className='m-0 ps-2'>{item.date}</p>
                                <i className="fas fa-circle li-icon-dots ps-2"></i>
                            </div>
                            <p className='m-0'>{item.creativity}</p>
                            <h4 className='fw-bold my-lg-4 py-2'>{item.title}</h4>
                            <img className='img-fluid' src={item.image} alt={item.title} />
                            <p className='m-0 py-lg-4 py-3'>{item.description}</p>
                            <Link to={`/blog/${item.id}`}>
                                <button className='custom-border'>read more</button>
                            </Link>
                        </div>
                    ))}
                </Slider>
            </section>

            <Footer />
        </>
    );
};

export default BlogDetail;
