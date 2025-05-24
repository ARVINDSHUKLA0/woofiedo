import React, { useRef, useState } from 'react'
import '../PagesStyle/Home.css'
import Navbar from '../Component/Navbar'
import ServiceOneimg from '/assets/img/PetGrooming.jpg'
import ServiceTwoimg from '/assets/img/PetVaccinationsImg.jpg'
import ServiceScrollSlider from '../Component/ServiceScrollSlider'
import AwardsOne from '/assets/img/Home1.png'
import AwardTwo from '/assets/img/Home1.png'
import AwardThree from '/assets/img/Home1.png'
import Awardfour from '/assets/img/Home1.png'
import AwardFive from '/assets/img/Home1.png'
import ReviewSlider from '../Component/ReviewSlider'
import Footer from '../Component/Footer'
import SvgOne from '/assets/img/svg-1.png'
import SvgTwo from '/assets/img/svg-2.png'
import SvgThree from '/assets/img/svg-3.png'
import HomeImgeOne from '/assets/img/Home1.png'
import FindDogImg from '/assets/img/findDogImg.png'
import Pricingimg from '/assets/img/priceing-img-1.png'
import Walk from '/assets/img/walk.svg'
import InputSvgOne from '/assets/img/input-svg-1.svg'
import InputSvgTwo from '/assets/img/input-svg-2.svg'
import InputSvgThree from '/assets/img/input-svg-3.svg'
import InputSvgFour from '/assets/img/input-svg-4.svg'
import Banner from '../Component/Banner'
import { Link } from 'react-router-dom'
import BlogData from '../BlogData'
import emailjs from "emailjs-com";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Home = () => {
  const form = useRef(); 
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeService, setActiveService] = useState("house sitting");

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };



  const Imgesfunc = (image) => {
    setImgesHover(image)
  }
  //   e.preventDefault();

  //   const formData = new FormData(e.target);
  //   const petTypes = formData.getAll("petType");

  //   let templateId = "";

  //   if (!petTypes.includes("Dog") && !petTypes.includes("Cat")) {
  //     alert("Please select at least Dog or Cat.");
  //     return;
  //   } else if (petTypes.includes("Dog")) {
  //     templateId = "template_goalovm";
  //   } else if (petTypes.includes("Cat")) {
  //     templateId = "template_mnohi9v";
  //   }


  //   emailjs
  //     .sendForm("service_4b4byfv", templateId, e.target, "0SiZM-6nsc-Yf0ald")
  //     .then(
  //       (result) => {
  //         alert("Appointment sent successfully!");
  //         e.target.reset();
  //       },
  //       (error) => {
  //         alert("Failed to send appointment: " + error.text);
  //       }
  //     );
  // };
  const handleServiceClick = (value) => {
    setActiveService(value);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const petTypes = formData.getAll("petType");

    if (petTypes.length === 0) {
      toast.error("Please select at least Dog or Cat.");
      return;
    }

    const templateId = "template_goalovm";

    const hiddenInput = document.createElement("input");
    hiddenInput.type = "hidden";
    hiddenInput.name = "petTypesCombined";
    hiddenInput.value = petTypes.join(", ");
    e.target.appendChild(hiddenInput);

    emailjs
      .sendForm("service_4b4byfv", templateId, e.target, "lqLmmKH0FVHz2HUyz")
      .then(
        (result) => {
          toast.success("Appointment sent successfully!");
          e.target.reset();
        },
        (error) => {
          toast.error("Failed to send appointment: " + error.text);
        }
      )
      .finally(() => {
        e.target.removeChild(hiddenInput);
      });
  };
  const MainArr = [
    {
      name: "Comprehensive Care Under One Roof:", brandDescription: "Description: From essential vaccinations and routine wellness checks to advanced surgical procedures and specialized diagnostics, we offer a complete spectrum of veterinary services. This means less running around for you and seamless, integrated care for your pet throughout every stage of their life.", year: "2024", SerivesHedding: "digital infinity awards", titel: 'best animation', image: AwardsOne,
    },
    {
      name: "Compassionate & Gentle Approach", brandDescription: "Description: We understand that vet visits can be stressful. Our team is trained in gentle handling techniques and prioritizes creating a calm, comforting environment for your pet. We focus on building trust, ensuring each visit is as positive and stress-free as possible.", year: "2023", SerivesHedding: "best website of the year", titel: 'interactive design', image: AwardTwo,
    },
    {
      name: "Expert & Experienced Team", brandDescription: "Description: Your pet will be in the hands of highly skilled and dedicated veterinary professionals. Our experienced veterinarians and support staff are committed to staying updated with the latest medical advancements, providing your companion with the highest standard of care based on sound scientific practices.", year: "2022", SerivesHedding: "festival of digital culture", titel: 'photo contest', image: AwardThree,
    },
    {
      name: "Advanced Diagnostics & Technology", brandDescription: "Description: We utilize cutting-edge in-house diagnostic tools, including advanced imaging and laboratory services, for rapid and accurate health assessments. This allows us to quickly identify issues and develop precise treatment plans, often on the same day, getting your pet on the path to recovery faster.", year: "2021", SerivesHedding: "crown digital agency site", titel: 'css design awards', image: Awardfour,
    },
    {
      name: "Unmatched Convenience & Accessibility", brandDescription: "Description: We make pet care easier for you. With services like 24/7 emergency care, convenient pet transportation, and flexible consultation options, we're always here when you need us most. Our goal is to remove barriers to quality care, ensuring your pet gets attention promptly.", year: "2020", SerivesHedding: "the journey of one project", titel: 'portfolio design', image: AwardFive,
    },
    {
      name: " Focus on Preventative & Holistic Wellness", brandDescription: " Description: Our philosophy extends beyond treating illness; we're passionate about preventing it. Through personalized vaccination schedules, expert nutritional advice, and proactive health screenings, we empower you to ensure your pet enjoys a long, healthy, and vibrant life..", year: "2020", SerivesHedding: "the journey of one project", titel: 'portfolio design', image: AwardFive,
    },
    {
      name: " Trust & Peace of Mind", brandDescription: " Description: We believe in fostering strong, transparent relationships with pet owners. We'll always communicate clearly, explain your pet's condition and treatment options thoroughly, and answer all your questions. When you choose Woofie Do, you gain a trusted partner truly invested in your pet's well-being. ", year: "2020", SerivesHedding: "the journey of one project", titel: 'portfolio design', image: AwardFive,
    },
  ]




  return (
    <>
      <Navbar />
      <Banner />

      <section className='container my-4'>
        <div className="row m-0 text-center">
          <div className="col-lg-4 col-md-4 col-sm-4 col-12 mb-3">
            <div className='social-conatiner social-content'>
              <img className='img-fluid mb-2' src={SvgOne} width={50} alt="" />
              <h2 className='text-capitalize mb-2'>CARE</h2>
              <p className='px-lg-4'>Compassionate, gentle care for your pet's comfort and well-being.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-12 mb-3">
            <div className='social-conatiner social-content'>
              <img className='img-fluid mb-2' src={SvgTwo} width={50} alt="" />
              <h2 className='text-capitalize mb-2'>SERVICE</h2>
              <p className='px-lg-4'>Comprehensive veterinary services for all your pet's health needs.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-12 mb-3">
            <div className='social-conatiner social-content'>
              <img className='img-fluid mb-2 bg transparent' src={SvgThree} width={50} alt="" />
              <h2 className='text-capitalize mb-2'>PROTECTION</h2>
              <p className='px-lg-4'>Safeguarding your pet's health with preventative measures and ongoing wellness.</p>
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
                <h2> Nurturing Your Pet's Well-being</h2>
                <p>Woofie do we are committed to providing comprehensive, compassionate, and cutting-edge care for your beloved companion. Our wide range of services ensures that every aspect of your pet's health and well-being is covered, from routine check-ups to emergency situations and end-of-life care. Your pet's health and happiness are our top priorities.</p>

                <div className='d-md-flex d-block py-md-4'>
                  <div>
                    <p className='m-0'>
                      <span className='fs-14 fw-bold'>Surgery</span>
                    </p>
                    <p className='m-0'>
                      <span className='fs-14 fw-bold'>Pet Vaccination</span>
                    </p>
                    <p className='m-0'>
                      <span className='fw-bold fs-14'>Pet Grooming</span>
                    </p>
                    <p className='m-0'>
                      <span className='fs-14 fw-bold'>In-House Diagnostics</span>
                    </p>
                    <p className='m-0'>
                      <span className='fs-14 fw-bold'>Pet Food & Diet Consultation</span>
                    </p>
                    <p className='m-0'>
                      <span className='fw-bold fs-14'>Pet IPD (In-Patient Department / Hospitalization)</span>
                    </p>
                  </div>
                  <div className=''>
                    <p className='m-0'>
                      <span className='fs-14 fw-bold'>Pet Transportation</span>
                    </p>
                    <p className='m-0'>
                      <span className='fs-14 fw-bold'>Pet Cremation</span>
                    </p>
                    <p className='m-0'>
                      <span className='fs-14 fw-bold'>Pet Registration</span>
                    </p>
                    <p className='m-0'>
                      <span className='fs-14 fw-bold'>Consultation</span>
                    </p>
                    <p className='m-0'>
                      <span className='fs-14 fw-bold'>24x7 Emergency Services</span>
                    </p>
                  </div>
                </div>
                <button className='main-btn'>
                  <Link className='text-white text-decoration' to="/about">about us</Link>
                </button>
              </div>


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

      <section className="appointment-bg my-50">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="d-md-flex d-block justify-content-between align-items-center"
        >
          <div className="left-side-bg-width"></div>
          <div className="right-side-bg-width pe-lg-5">
            <div className="d-flex align-items-center pt-4">
              <button type="button" className="border-rounded-50 border-0 main-bg">
                <i className="fa-solid fa-dog text-white"></i>
              </button>
              <span className="ps-2 text-white">Trusted Dog Walker</span>
            </div>
            <h2 className="text-white ps-3">Book Now An Appointment</h2>
            <div className="custom-input-warpper ms-3">
              <p className="font-size-small">I'm looking for service for my:</p>
              <label className="font-size-small text-dark me-3">
                <input type="checkbox" name="petType" value="Dog" /> Dog
              </label>
              <label className="font-size-small text-dark me-3">
                <input type="checkbox" name="petType" value="Cat" /> Cat
              </label>

              <p className="font-size-small mt-3">What service do you need?</p>
              <div className=" d-sm-flex d-block  gap-3 align-items-center justify-content-between ">
                <label
                  className={`custom-border-svg-input w-100 mb-2  ${activeService === "house sitting" ? "active" : ""}`}
                  onClick={() => handleServiceClick("house sitting")}
                >
                  <input type="radio" name="service" value="house sitting" defaultChecked style={{ display: "none" }} />
                  <img className="img-fluid" src={InputSvgOne} width={30} alt="" />
                  <p className="font-size-small text-capitalize">house sitting</p>
                </label>
                <label
                  className={`custom-border-svg-input w-100 mb-2 ${activeService === "drop-in visits" ? "active" : ""}`}
                  onClick={() => handleServiceClick("drop-in visits")}
                >
                  <input type="radio" name="service" value="drop-in visits" style={{ display: "none" }} />
                  <img className="img-fluid" src={InputSvgTwo} width={30} alt="" />
                  <p className="font-size-small text-capitalize">drop-in visits</p>
                </label>
                <label
                  className={`custom-border-svg-input w-100 mb-2  ${activeService === "doggy care" ? "active" : ""}`}
                  onClick={() => handleServiceClick("doggy care")}
                >
                  <input type="radio" name="service" value="doggy care" style={{ display: "none" }} />
                  <img className="img-fluid" src={InputSvgThree} width={30} alt="" />
                  <p className="font-size-small text-capitalize">doggy care</p>
                </label>
                <label
                  className={`custom-border-svg-input w-100 mb-2 ${activeService === "dog walking" ? "active" : ""}`}
                  onClick={() => handleServiceClick("dog walking")}
                >
                  <input type="radio" name="service" value="dog walking" style={{ display: "none" }} />
                  <img className="img-fluid" src={InputSvgFour} width={30} alt="" />
                  <p className="font-size-small text-capitalize">dog walking</p>
                </label>
              </div>

              <label className="font-size-small" htmlFor="address">
                What's your address?
              </label>
              <input className="w-100 py-2 rounded-5 font-size-small" type="text" id="address" name="address" required />

              <label className="font-size-small" htmlFor="phone">
                What's your Number?
              </label>
              <input className="w-100 py-2 rounded-5 font-size-small" type="text" id="phone" name="phone" required />

              <label className="font-size-small mt-2" htmlFor="date">
                Which dates do you need?
              </label>
              <input
                id="date"
                className="w-100 py-2 rounded-5 font-size-small mb-3 ps-2 pe-1"
                type="date"
                name="date"
                required
              />

              <label className="font-size-small" htmlFor="time1">
                Which times do you need?
              </label>
              <div className="d-sm-flex d-block">
                <label className="w-100 py-2 bg-transparent border border-secondary rounded-5 me-2 my-2 text-center">
                  <input type="radio" name="time" value="6am-11am" style={{ display: "none" }} />
                  6am-11am
                </label>
                <label className="w-100 py-2 bg-transparent border border-secondary rounded-5 me-2 my-2 text-center">
                  <input type="radio" name="time" value="11am-3pm" style={{ display: "none" }} />
                  11am-3pm
                </label>
                <label className="w-100 py-2 bg-transparent border border-secondary rounded-5 my-2 text-center">
                  <input type="radio" name="time" value="3pm-6pm" style={{ display: "none" }} />
                  3pm-6pm
                </label>
              </div>

              <button
                type="submit"
                className="mt-3 main-bg text-white px-3 py-1 border-0 rounded-4 text-capitalize"
              >
                Submit
              </button>
              <ToastContainer
                position="top-right"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
              />
            </div>
          </div>
        </form>
      </section>

      <ServiceScrollSlider />

      <ReviewSlider />
      <section className='container-fluid'>
        <div className='custom-bottom-border d-flex align-items-center gap-3  my-lg-5  my-md-4 my-sm-4'>
          <h2 className='font-size-large'> Why Choose Woofie Do?</h2>
        </div>
      </section>
      <section>
        <div className="container-fluid">
          <div className="row m-0 py-5 ">
            <div className="col-lg-6 col-md-12 col-sm-12 col-12 ">'
              <div className='conatiner-imges'>
                <div>
                  <div >
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
                When it comes to your pet's health and happiness, you want the very best. At Woofie Do, we're dedicated to providing exceptional care that you and your furry family member deserve</h2>
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
                                  {service.brandDescription.split(" ").slice(0, 1).join(" ")}
                                </span>
                                {service.brandDescription.split(" ").slice(3).join(" ")}
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
        <div className="row m-0">
          <div className="col-lg-9 col-md-9 col-sm-12 col-12  offset-lg-3">
            <div className="row m-0 ">
              {BlogData.map((blogValue) => (
                <div key={blogValue.id} className="col-lg-4 col-sm-6 col-12  mb-50 custom-sm-margin">
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
  )
}

export default Home