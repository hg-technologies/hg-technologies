// components/ProductDevelopment.jsx
'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export default function ProductDevelopment() {
  useEffect(() => {
    // Initialize any required JavaScript functionality
    // This would typically include animations, etc.
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="hero aboutUsHero section dark-background">
        <Image 
          src="/assets/images/product_bg.jpg" 
          alt="Product Development" 
          fill
          style={{ objectFit: 'cover' }}
          data-aos="fade-in"
        />  
        
        <div className="container">
          <div className="row justify-content-center text-center" data-aos="fade-up" data-aos-delay="100">
            <div className="col-xl-7 col-lg-8">
              <h2><span>Product Development</span></h2>
            </div>        
          </div>
        </div>
      </section>

      {/* Feature Card Section */}
      <div className="feature-card-sect">
        <div className="container">
          <div className="row" data-aos="fade-up" data-aos-delay="100">
            <div className="col-lg-6 col-md-12">
              <div className="section-title">
                <h2>Product Development</h2>
                <p>End-to-End Customization</p>
              </div>
              
              <ul className="ticklist">
                <li>
                  <span>Feature Discovery & Documentation</span>
                  - Every project begins with detailed analysis and documentation of all functional and non-functional features to ensure full clarity and alignment.
                </li>
                <li>
                  <span>Wireframing & Prototyping</span>
                  - Early-stage wireframes and prototypes define user flow, structure, and functionality—ensuring efficient design and development.
                </li>
                <li>
                  <span>Intuitive UI/UX Design</span>
                  - User-centric designs crafted for clarity, engagement, and seamless navigation across all devices, enhancing the overall experience.
                </li>
                <li>
                  <span>Agile & Scalable Development</span>
                  - A robust agile process paired with modern tech stacks delivers secure, high-performance, and scalable digital products.
                </li>
              </ul>
            </div>
            
            <div className="col-lg-6 col-md-12 align-self-center animated fadeInRight">
              <div className="text-center">
              <img 
                src="/assets/images/product_img.jpg" 
                className="img-fluid radiusImg" 
                alt="Product Development"
               style={{width:"70%"}}
              />
              </div>
            </div>


          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="develop-section">
        <div className="container useTechnologies" data-aos="fade-up" data-aos-delay="100">
          <div className="section-title">
            <h2>SERVICES</h2>
            <p>Product Customisation Solutions</p>
          </div>
          
          <div className="row">
            {[
              {
                icon: '/assets/images/3rd_party_i.svg',
                title: 'Third-Party API Integration',
                description: 'Extend functionality and streamline operations by connecting your product with external platforms and services for seamless data flow and automation.'
              },
              {
                icon: '/assets/images/product_recreation_i.svg',
                title: 'Product Recreation & Modernization',
                description: 'Revamp existing products with cutting-edge technologies and enhanced architectures to optimize performance and align with evolving market needs.'
              },
              {
                icon: '/assets/images/product_uiux_i.svg',
                title: 'UI/UX Revitalization',
                description: 'Elevate user engagement and satisfaction through improved interface design and user experience optimization, ensuring intuitive interaction across all devices.'
              },
              {
                icon: '/assets/images/data_migration_i.svg',
                title: 'Data Migration Services',
                description: 'Migrate legacy systems efficiently with structured deployment or consolidation for enterprise-grade scalability, system upgrades, and modernization.'
              },
              {
                icon: '/assets/images/product_enhancement_i.svg',
                title: 'Product Enhancement & Feature Upgrades',
                description: 'Empower your business with new features, integrations, and refinements that bring your product in line with the latest industry standards and tech trends.'
              },
              {
                icon: '/assets/images/Maintenance_support_i.svg',
                title: 'Ongoing Maintenance & Support',
                description: 'Ensure product stability, performance, and security with proactive technical support and regular updates tailored to your business needs.'
              }
            ].map((service, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="ser-card-wt">
                  <Image 
                    src={service.icon} 
                    className="img-fluid" 
                    alt={service.title}
                    width={70}
                    height={70}
                  />
                  <h4>{service.title}</h4>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <section id="why-join" className="" style={{backgroundImage: "url(/assets/images/cloud_dev_bg.jpg)"}}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="why-join">
                <h3>Want more information?</h3>
                <p>Request a quote about our web and mobile application development services</p>
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