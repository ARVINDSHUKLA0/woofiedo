import React, { useEffect, useState } from 'react';
import '../ComponentStyle/Navbar.css';
import Logo from '/assets/img/logo.png';
import { Link } from 'react-router-dom'; 
import { useLocation } from 'react-router-dom';
import AsidebarPet from '/assets/img/PetVaccinationsImg.jpg'

const Navbar = () => {
  const [asidebar, setAsideBar] = useState(false);
  const [menu, setMenu] = useState(false);
  const location = useLocation()
  const Menuitemfunc = () => {
    setMenu(!menu);
  };

  const asidebarfun = () => {
    setAsideBar(!asidebar);
  };
  const showBorderPages = ["/"];
  const hasBorder = showBorderPages.includes(location.pathname);
 
  


  return (
    <>
      <nav>
        <section className='container-fluid'>
          <div className={`d-flex justify-content-between align-items-center  py-lg-4 py-md-4 py-sm-3 py-3 ${hasBorder ? 'custom-bottom-border' : ''}`}>
            <div>
              <Link to="/">
                <img src={Logo} width={120} alt="Logo" />
              </Link>
            </div>
            {menu && <div onClick={Menuitemfunc} className='item-warrper-remove'></div>}

            <div className={`menuitem ${menu ? 'open' : ''}`}>
              <div className='d-lg-none d-block'>
                <div className='text-end pe-1 pt-2'>
                  <button onClick={Menuitemfunc} className='border-0 bg-white'>
                    <i className="fa-solid fa-xmark text-end fs-3 pt-3 pe-3"></i>
                  </button>
                </div>
                <div className='ps-3 py-3'>
                  <Link to="/">
                  <img src={Logo} width={100} alt="" />
                  </Link>
                </div>
              </div>
              <ul className="d-lg-flex m-0 p-0 gap-5">
                <li className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
                  <Link className='text-decoration-none py-lg-5' to="/">Home</Link>
                </li>
                <li className={`nav-item ${location.pathname === '/about' ? 'active' : ''}`}>
                  <Link className='text-decoration-none py-lg-5' to="/about">About</Link>
                </li>
                <li className={`nav-item ${location.pathname === '/services' ? 'active' : ''}`}>
                  <Link className='text-decoration-none py-lg-5' to="/services">Services</Link>
                </li>
                <li className={`nav-item ${location.pathname === '/blog' ? 'active' : ''}`}>
                  <Link className='text-decoration-none py-lg-5' to="/blog">Blog</Link>
                </li>
                <li className={`nav-item ${location.pathname === '/contact' ? 'active' : ''}`}>
                  <Link className='text-decoration-none' to="/contact">Contact</Link>
                </li>
              </ul>
            </div>

            <div className='d-lg-none d-block'>
              <button onClick={Menuitemfunc} className='bg-dark text-white border-0 custom-round-btn'>
                <i className="fa-solid fa-bars-staggered"></i>
              </button>
            </div>
            {asidebar && <div onClick={asidebarfun} className='item-warrper-remove'></div>}
            <aside className='d-none d-lg-block'>
              <button onClick={asidebarfun} className='bg-dark text-white border-0 custom-round-btn'>
                <i className="fa-solid fa-bars-staggered"></i>
              </button>
              <div className={`asidebarOpen ${asidebar ? 'open' : ''}`}>
                <div className='text-end'>
                  <button onClick={asidebarfun} className='bg-white border-0 pe-4'>
                    <i className="fa-solid fa-xmark fs-3"></i>
                  </button>
                </div>
                <div className='d-flex justify-content-center align-items-center'>
                  <div className='pt-5'>
                    <Link to="/">
                    <img className='mb-3' src={Logo} width={110} alt="" />
                    </Link>
                    <p className='pb-3'>Woofie-Do provides expert, gentle <br /> care for your pet, offering everything <br /> from routine check-ups to advanced <br /> treatments to keep your furry family <br /> member healthy and happy.</p>
                    <img className='mb-4 img-fluid  ' src={AsidebarPet} alt="" />
                    <div>
                      <p>
                       Jaipuriya Plaza, sector-26, noida <br />
                       care@woofieDo.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </nav>
    </>
  );
};

export default Navbar;