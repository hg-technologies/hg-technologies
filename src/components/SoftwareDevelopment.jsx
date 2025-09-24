// components/SoftwareDevelopment.jsx
'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export default function SoftwareDevelopment() {
  useEffect(() => {
    // Initialize any required JavaScript functionality
    // This would typically include animations, etc.
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="hero aboutUsHero section dark-background">
        <Image 
          src="/assets/images/software_bg.jpg" 
          alt="Software Development" 
          fill
          style={{ objectFit: 'cover' }}
          data-aos="fade-in"
        />  
        
        <div className="container">
          <div className="row justify-content-center text-center" data-aos="fade-up" data-aos-delay="100">
            <div className="col-xl-7 col-lg-8">
              <h2><span>Software Development</span></h2>
            </div>        
          </div>
        </div>
      </section>

      {/* Section Title */}
      <section id="contact" className="contact section contactFromBlog pb-0">
        <div className="container section-title aos-init aos-animate" data-aos="fade-up">
          <h2>Software Development</h2>
          <p>Custom Software Development for Multiple Business Domains</p>
        </div>
      </section>

      {/* Features Section */}
      <section className="features section missionBlogBg customSoftwareTop">
        <div className="container" data-aos="fade-up">        
          <div className="row about-top-item-wrapper">  
            {[
              {
                image: '/assets/images/accounting_software_dev.jpg',
                title: 'Banking Software Development',
                description: 'Our customized banking software solutions automate financial processes, simplify tax compliance, and offer real-time data insights to optimize your business\'s financial management operations.'
              },
              {
                image: '/assets/images/manufacturing_software_dev.jpg',
                title: 'Manufacturing Software Development',
                description: 'Boost business efficiency and productivity with our custom manufacturing software solutions. We will empower you to streamline operations, manage inventory, and ensure quality control in your production processes.'
              },
              {
                image: '/assets/images/healthcare_software_dev.jpg',
                title: 'Healthcare Software Development',
                description: 'Enhance patient care and streamline medical workflows with our robust healthcare software solutions to meet your healthcare business needs. Seek custom software development services from us and boost your business growth.'
              },
              {
                image: '/assets/images/business_software_dev.jpg',
                title: 'Business Intelligence Software Development',
                description: 'Unlock the power of data and transform it into actionable insights with cutting-edge business intelligence software solutions. It\'s time to make informed decisions and drive business growth with BI solutions.'
              },
              {
                image: '/assets/images/construction_software_dev.jpg',
                title: 'E-commerce Software Development',
                description: 'Enhance online shopping with customized e-commerce solutions that include smart storefronts, secure transactions, efficient inventory management, and customer engagement tools—designed to drive sales and scale with your business.'
              },
              {
                image: '/assets/images/CRM_software_dev.jpg',
                title: 'CRM Software Development',
                description: 'Strengthen customer relationships, improve sales, and enhance customer service with our flexible CRM software solutions. Exclusively designed to centralize customer data and streamline interactions across all touchpoints.'
              }
            ].map((item, index) => (
              <div key={index} className="col-xl-4 col-md-6 about-top-item-inner">
                <div className="about-top-item">
                  <div className="about-top-img imgBlog">
                    <Image 
                      className="img-fluid aiProjectImg" 
                      src={item.image} 
                      alt={item.title}
                      width={400}
                      height={300}
                    />
                  </div>
                  <div className="about-top-content">
                    <div className="title">{item.title}</div>
                    <p>{item.description}</p>
                  </div>
                </div>      
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Software Section */}
      <section className="aiExpertConsultantsBg">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="aiConsultants">
            <div className="row">
              <div className="col-lg-6">
                <div className="text-start">
                  <h3>Custom Software Development Solutions</h3>
                  <p>
                    Do you want to develop custom software and search for the best IT software development 
                    company? HG Technologies has got you covered. We have years of expertise assisting organizations in 
                    achieving their objectives with unique custom software development solutions. Contact our custom 
                    software developers and leave the rest to us.
                  </p>
                    <Link className="btn btn-primary mb-5" href="/contact-us">
                  Connect Now!
                </Link>
                </div>
              </div>

              <div className="col-lg-6">   
                <Image 
                  className="img-fluid radiusImg" 
                  src="/assets/images/custom_software.jpg" 
                  alt="Custom Software Development"
                  width={500}
                  height={400}
                  data-aos="fade-in"
                />         
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services section homeServiceBg">
        <div className="container section-title aos-init aos-animate" data-aos="fade-up">
          <h2>Services</h2>
          <p>Best Custom Software Development</p>
        </div>

        <div className="container">
          <div className="row gy-4 mb-5">
            {[
              {
                icon: '/assets/images/software_consulting_icon.svg',
                title: 'Software Consulting',
                description: 'As a well-known custom software development firm, we understand project requirements properly, conceptualize the software, and help businesses get the best value from their project. Our dedicated software also helps businesses choose the best-ever development solutions before beginning the development process.'
              },
              {
                icon: '/assets/images/enterprise_dev_icon.svg',
                title: 'Enterprise Software Development',
                description: 'We aim to help businesses succeed; hence, we re-engineer enterprise software development solutions for all levels. Seek our top custom software development company services and scale up your business presence in the market. Schedule your consultation with our software developers today.'
              },
              {
                icon: '/assets/images/software_integration_icon.svg',
                title: 'Software Integration',
                description: 'Have you recently adopted a new technology and facing difficulty choosing the best tech stacks or current applications? HG Technologies software development service providers incorporate the best techniques to overcome software integration challenges, including software design, testing, and execution.'
              },
              {
                icon: '/assets/images/custom_dev_icon.svg',
                title: 'Custom Software Development',
                description: 'Custom software development helps businesses achieve the desired proficiency in today\'s competitive market. HG Technologies, the top custom software development company, offers ideal software based on your organization\'s requirements. Get in touch with our experts and discuss your software development requirements.'
              },
              {
                icon: '/assets/images/software_product_dev_icon.svg',
                title: 'Software Product Development',
                description: 'Being a full-Cycle software product development company, we offers end-to-end product development services. We can do everything from market research to business analysis, software development, and deployment. Give wings to your business dreams while choosing our custom software developers.'
              },
              {
                icon: '/assets/images/support_maintenance_icon.svg',
                title: 'Custom Software Support & Maintenance',
                description: 'Besides developing fully scalable and profit-driven software, we put in our best efforts to keep the product alive for years to come. With our mobile app support and maintenance services, you can keep your business software updated per the latest market trends and constantly generate huge revenue.'
              }
            ].map((service, index) => (
              <div key={index} className="col-lg-4 col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay={index < 3 ? 600 : (index - 2) * 100}>
                <div className="service-item position-relative">
                  <div className="icon">
                    <Image 
                      src={service.icon} 
                      alt={service.title}
                      width={70}
                      height={70}
                    />
                  </div>
                  <a className="stretched-link">
                    <h3>{service.title}</h3>
                  </a>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="why-join" className="" style={{backgroundImage: "url(/assets/images/software_bottom_bg.jpg)"}}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="why-join">
                <h3>Need Assistance with Custom Software Development?</h3>
                <p>Let's create a smarter software together.</p>
                <Link className="btn btn-primary mt-3" href="/contact-us">
                  Share Your Requirements
                </Link>
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