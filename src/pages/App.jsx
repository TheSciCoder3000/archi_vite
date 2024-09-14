import '../assets/css/Home.css'

import HeroImg from '../assets/img/hero_img.jpg';
import Navbar from '../components/Navbar';

import Img1 from '../assets/img/img_1.jpg';
import Img2 from '../assets/img/img_2.jpg';
import Img3 from '../assets/img/img_3.jpg';
import Img4 from '../assets/img/img_4.jpg';
import { easeInOut, motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

function Home() {
  const gallery = [Img1, Img2, Img3, Img4];
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0", "-80rem"], { ease: easeInOut });

  return (
    <>
      <Navbar />

      {/* <!-- Hero Section --> */}
      <div className="hero-container">
          <img className="hero-img" src={HeroImg} alt="hero_img" />
          <div className="hero-content">
              <h4 className="hero-subtitle">The future is Now</h4>
              <h1>Discover Premium Architectural Designs and Materials</h1>
          </div>
      </div>

      {/* <!-- About Us --> */}
      <div className="detail-container about-container">
        <div className="about-header-container">
          <div className="about-header">ABOUT US</div>
          <h2>We are the leading Construction Company</h2>
        </div>
        <div className="about-content">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Obcaecati id laboriosam maxime. Magnam ut beatae autem veniam, 
                facilis, voluptatibus nemo eius praesentium debitis vel itaque 
                non quaerat quam officiis. Iste in magnam doloribus ratione non 
                consequuntur enim dolor a vero est ullam voluptatum, consequatur 
                libero itaque quae exercitationem, cumque magni.
              </p>
            <button className="about-btn">Know More</button>
        </div>
      </div>

      {/* Projects */}
      <section ref={targetRef} className="project-container">
        <div className="project-content">
          <div className="gallery-container">
            <motion.div style={{ x }} transition={{ type: "spring" }} className="gallery-box">
              {gallery.map((img, indx) => {
                return <div key={indx} className="img-container">
                  <img className="gallery-img" src={img} alt="" />
                </div>;
              })}
            </motion.div>
          </div>
          <div className='project-details'>
            <h1>PROJECTS</h1>
          </div>
        </div>
      </section>
      
      {/* <!-- Services --> */}
      <div className="detail-container service-container">
          <div className="detail-header">SERVICES</div>
          <div className="services-items">
              <div className="service-container">
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='#000000' width='24' height='24'><path d="M19 2H9c-1.103 0-2 .897-2 2v6H5c-1.103 0-2 .897-2 2v9a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4c0-1.103-.897-2-2-2zM5 12h6v8H5v-8zm14 8h-6v-8c0-1.103-.897-2-2-2H9V4h10v16z"></path><path d="M11 6h2v2h-2zm4 0h2v2h-2zm0 4.031h2V12h-2zM15 14h2v2h-2zm-8 .001h2v2H7z"></path></svg>
                  <h3>Construction</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus exercitationem eligendi cupiditate iste dolores nobis.</p>
              </div>
              <div className="service-container">
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='#000000' width='24' height='24'><path d="M6.42 9.87 12 20.78l5.58-10.91H6.42zM5.9 4.01 2 9.24h3.62l.28-5.23zm6.1-.59L6.63 9.24h10.74L12 3.42zM2.04 9.87l9.09 10.58L5.72 9.87H2.04zM11.53 3h-.15l-4.84.51a.09.09 0 0 1 0 .05l-.27 5.15zm1.34 17.45 9.09-10.58h-3.68l-5.41 10.58zm4.58-16.87a.09.09 0 0 1 0-.05l-4-.42-1-.11 5.26 5.71zm.65.43.28 5.23H22l-2.22-2.98-1.68-2.25z"></path></svg>
                  <h3>Design</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus exercitationem eligendi cupiditate iste dolores nobis.</p>
              </div>
              <div className="service-container">
                  <svg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 24 24' fill='#000000' width='24' height='24'><path d="M13.707 2.293a.999.999 0 0 0-1.414 0l-5.84 5.84c-.015-.001-.029-.009-.044-.009a.997.997 0 0 0-.707.293L4.288 9.831a2.985 2.985 0 0 0-.878 2.122c0 .802.313 1.556.879 2.121l.707.707-2.122 2.122A2.92 2.92 0 0 0 2 19.012a2.968 2.968 0 0 0 1.063 2.308c.519.439 1.188.68 1.885.68.834 0 1.654-.341 2.25-.937l2.04-2.039.707.706c1.134 1.133 3.109 1.134 4.242.001l1.415-1.414a.997.997 0 0 0 .293-.707c0-.026-.013-.05-.015-.076l5.827-5.827a.999.999 0 0 0 0-1.414l-8-8zm-.935 16.024a1.023 1.023 0 0 1-1.414-.001l-1.414-1.413a.999.999 0 0 0-1.414 0l-2.746 2.745a1.19 1.19 0 0 1-.836.352.91.91 0 0 1-.594-.208A.978.978 0 0 1 4 19.01a.959.959 0 0 1 .287-.692l2.829-2.829a.999.999 0 0 0 0-1.414L5.701 12.66a.99.99 0 0 1-.292-.706c0-.268.104-.519.293-.708l.707-.707 7.071 7.072-.708.706zm1.889-2.392L8.075 9.339 13 4.414 19.586 11l-4.925 4.925z"></path></svg>
                  <h3>Furniture</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus exercitationem eligendi cupiditate iste dolores nobis.</p>
              </div>
              <div className="service-container">
                  <svg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 24 24' fill='#000000' width='24' height='24'><path d="M22 8a.76.76 0 0 0 0-.21v-.08a.77.77 0 0 0-.07-.16.35.35 0 0 0-.05-.08l-.1-.13-.08-.06-.12-.09-9-5a1 1 0 0 0-1 0l-9 5-.09.07-.11.08a.41.41 0 0 0-.07.11.39.39 0 0 0-.08.1.59.59 0 0 0-.06.14.3.3 0 0 0 0 .1A.76.76 0 0 0 2 8v8a1 1 0 0 0 .52.87l9 5a.75.75 0 0 0 .13.06h.1a1.06 1.06 0 0 0 .5 0h.1l.14-.06 9-5A1 1 0 0 0 22 16V8zm-10 3.87L5.06 8l2.76-1.52 6.83 3.9zm0-7.72L18.94 8 16.7 9.25 9.87 5.34zM4 9.7l7 3.92v5.68l-7-3.89zm9 9.6v-5.68l3-1.68V15l2-1v-3.18l2-1.11v5.7z"></path></svg>
                  <h3>Consulting</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus exercitationem eligendi cupiditate iste dolores nobis.</p>
              </div>
          </div>
      </div>
    </>
  )
}

export default Home
