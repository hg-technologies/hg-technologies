// components/Careers.jsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export default function Careers() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    cv: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({
      ...prev,
      cv: e.target.files[0]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const jobOpenings = [
    {
      title: "UI/UX Designer (0)",
      experience: "5+ Years",
      description: "UI/UX Designer skilled in crafting intuitive web & mobile interfaces using Figma, Sketch, and Adobe XD."
    },
    {
      title: "Business Analyst (0)",
      experience: "3+ Years",
      description: "Business Analyst skilled in gathering requirements, analyzing processes, and delivering data-driven solutions for improved business outcomes."
    },
    {
      title: "ReactJS Developer (0)",
      experience: "2+ Years",
      description: "ReactJS Developer skilled in building dynamic, responsive, and user-friendly web applications with modern JavaScript frameworks."
    },
    {
      title: "Quality Analyst (0)",
      experience: "8+ Years",
      description: "Quality Analyst skilled in testing, identifying issues, and ensuring high-quality, reliable software delivery."
    },
    {
      title: "Mobile Developer (0)",
      experience: "4+ Years",
      description: "Mobile Developer skilled in building responsive, high-performance Android and iOS applications with seamless user experiences."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="hero aboutUsHero section dark-background">
        <Image 
          src="/assets/images/contact-us.jpg" 
          alt="Careers at HG Technologies" 
          fill
          style={{ objectFit: 'cover' }}
          data-aos="fade-in"
        />        
        <div className="container">
          <div className="row justify-content-center text-center" data-aos="fade-up" data-aos-delay="100">
            <div className="col-xl-7 col-lg-8">
              <h2 className="titleManSlide"> Careers at <span> HG Technologies </span> </h2>           
            </div>        
          </div>
        </div>
      </section>

      {/* Careers Content */}
      <section className="contact section contactFromBlog pb-0">
        <div className="container section-title aos-init aos-animate" data-aos="fade-up">        
          <h2>Career</h2>
          <p>Where Innovation Meets Opportunity</p>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row">
            <div className="col-lg-12">
              <div className="currentOpeningsBlog">
                <ul>
                  {jobOpenings.map((job, index) => (
                    <li key={index}>
                      <div>
                        <h2>{job.title}</h2>
                        <p>Experience : {job.experience}</p>
                        <p>{job.description}</p>
                      </div>
                      <a 
                        className="btn btn-primary" 
                        href="https://hgholdings.keka.com/careers/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        Apply Now
                      </a>
                    </li>
                  ))}
                </ul>
              </div>                   
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section 
        id="why-join" 
        className=""
        style={{ backgroundImage: "url(/assets/images/why-join.jpg)" }}
      >
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row">
            <div className="col-md-12">
              <div className="why-join">
                <h3>Why join <br/> <span>HG Technologies? </span></h3>
                <p>At HG Technologies, we take pride in our exceptional team of over 50+ highly motivated professionals. 
                  Our employees are not only experts in advanced technologies but are also well-trained in global communication. 
                  This unique combination ensures that we deliver first-class solutions while engaging effectively 
                  with clients worldwide. We emphasize continuous learning and innovation, empowering our teams with 
                  the latest skills. Every project is managed with precision, following tried and tested processes.</p>
                <p>
                  From the very first step of initiation to the final stage of delivery, excellence remains our focus. Our commitment 
                  extends beyond delivery, with reliable ongoing support for every client. We believe in building trust through transparent
                  communication and consistent performance. Our global reach is strengthened by a workforce that adapts to diverse client needs. 
                  Together, we create solutions that are innovative, reliable, and impactful across industries.</p>
                
                <a className="btn btn-primary mt-3" href="/contact-us">Share Your Requirements</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section id="clients" className="clients section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <Swiper
            loop={true}
            speed={600}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            slidesPerView="auto"
            pagination={{
              el: '.swiper-pagination',
              type: 'bullets',
              clickable: true,
            }}
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              480: {
                slidesPerView: 3,
                spaceBetween: 60,
              },
              640: {
                slidesPerView: 4,
                spaceBetween: 80,
              },
              992: {
                slidesPerView: 5,
                spaceBetween: 120,
              },
            }}
            modules={[Pagination, Autoplay]}
            className="init-swiper"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <SwiperSlide key={item}>
                <img 
                  src={`/assets/images/clients/client-${item}.png`} 
                  className="img-fluid" 
                  alt={`Client ${item}`} 
                />
              </SwiperSlide>
            ))}
            <div className="swiper-pagination"></div>
          </Swiper>
        </div>
      </section>
    </>
  );
}