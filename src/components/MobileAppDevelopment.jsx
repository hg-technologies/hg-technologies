// components/MobileAppDevelopment.jsx
'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export default function MobileAppDevelopment() {
  useEffect(() => {
    // Initialize any required JavaScript functionality
    // This would typically include animations, etc.
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="hero aboutUsHero section dark-background">
        <Image 
          src="/assets/images/mobileapp-slider.jpg" 
          alt="Mobile App Development" 
          fill
          style={{ objectFit: 'cover' }}
          data-aos="fade-in"
        /> 
        
        <div className="container">
          <div className="row justify-content-center text-center" data-aos="fade-up" data-aos-delay="100">
            <div className="col-xl-7 col-lg-8">
              <h2><span>Mobile App Development</span></h2>
            </div>        
          </div>
        </div>
      </section>

      {/* Feature Card Section */}
      <div className="feature-card-sect">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="section-title">
                <h2>Mobile App</h2>
                <p>Custom Mobile App Development</p>
              </div>
              
              <ul className="ticklist">
                <li> 
                  <span>Feature Discovery & Documentation</span> - We analyze, identify, and document all features to ensure clarity and alignment with client needs.
                </li>
                <li>
                  <span>Wireframing & Prototyping</span> - Early visualizations define structure, flow, and functionality before design and coding.
                </li>
                <li>
                  <span>UI/UX Design</span> - We craft intuitive, engaging, and accessible designs for seamless user experiences.
                </li>
                <li>
                  <span>Development</span> - Using agile methods and modern tech, we build scalable, secure, and high-performance solutions.
                </li>
                <li>
                  <span>Quality Assurance</span> - Rigorous testing ensures flawless functionality, performance, security, and usability.
                </li>
              </ul>
            </div>
            <div className="col-lg-6 col-md-12 align-self-center">
              <div className="text-center">
              <img 
                src="/assets/images/mobileapp_icon.png" 
                className="img-fluid" 
                alt="Mobile App Development"
               style={{width:"80%"}}
              />
            </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Expertise Section */}
      <div className="develop-section">
        <div className="container">
          <div className="section-title">
            <h2>Mobile Expertise</h2>
            <p>Mobile App Development Expertise</p>
          </div>
          
          <div className="row">
            {[
              {
                icon: '/assets/images/ios_i.svg',
                title: 'iOS App Development',
                description: 'We help you create native, top-notch mobile application for iOS operating systems. We have in-house experts team who take complete care of your application end to end.'
              },
              {
                icon: '/assets/images/android_i.svg',
                title: 'Android App Development',
                description: 'We help you create native, top-notch mobile application for android operating systems. We have in-house experts team who take complete care of your application end to end.'
              },
              {
                icon: '/assets/images/hybrid_i.svg',
                title: 'Hybrid App Development',
                description: 'Launch your application in both android and iOS with cross platform approach with us. Best suitable for MVPs. We are experts when it comes to this approach using Flutter and ReactNative technologies.'
              },
              {
                icon: '/assets/images/backend_i.svg',
                title: 'Backend Development',
                description: 'Backend is very important when it comes to app performance. It determines the capacity of the mobile application. We have expert and experienced backend engineers to support and help you right.'
              },
              {
                icon: '/assets/images/quality_i.svg',
                title: 'Quality Assurance',
                description: 'This is a process which ensures that the practical output of the software is outlining well with the theoretical and expected outcome. This is comprised of several processes where we take care and assure the quality of the application.'
              },
              {
                icon: '/assets/images/application_i.svg',
                title: 'Application Diagnostics',
                description: 'Testing an application on various parameters is very much important before launching the apps on the stores. This process makes sure the app work well when it\'s launched in stores. We have our own procedures for application testing.'
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

      {/* Portfolio Section */}
      <div className="feature-card-sect">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 align-self-center mb-5">
              <div className="text-center">
              <img 
                src="/assets/images/mobileapp_i.png" 
                className="img-fluid" 
                alt="BuildSync Mobile App"
                style={{width:"80%"}}
                
              />
            </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="section-title">
                <h2>Portfolio</h2>
                <p>BuildSync – Mobile App Built for the EPC Industry</p>
              </div>

              <ul className="ticklist">
                <li> 
                  <span>Streamlined Man, Material & Machine Tracking</span> - Digitizes core EPC operations with mobile-enabled RFI workflows, gate entry logging, and real-time resource tracking.
                </li>
                <li>  
                  <span>On-the-Go Project Visibility</span> - Mobile and web dashboards offer real-time analytics on site activity, turnaround time, and approval status—anytime, anywhere.
                </li>
                <li>
                  <span>Seamless Enterprise Integration</span> - Easily connects with SAP, weighbridge APIs, and other systems to boost transparency, minimize delays, and enforce accountability.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className="services section homeServiceBg">
        <div className="container section-title aos-init aos-animate" data-aos="fade-up">
          <h2>Services</h2>
          <p>Expertise In Mobile Application Development</p>
        </div>

        <div className="container">
          <div className="row gy-4 mb-5">
            {[
              {
                icon: '/assets/images/cross_platform_ico.svg',
                title: 'Cross-Platform App Development',
                description: 'Apps built using React Native, Flutter, or Xamarin to run flawlessly across iOS and Android devices from a single codebase.'
              },
              {
                icon: '/assets/images/app_support-ico.svg',
                title: 'App Maintenance and Support',
                description: 'Ongoing support ensures the app remains updated, secure, and optimized for peak performance.'
              },
              {
                icon: '/assets/images/prototyping_dev_ico.svg',
                title: 'Prototyping and MVP Development',
                description: 'Rapid prototyping and MVP development allow early user feedback to shape the app before full-scale investment.'
              },
              {
                icon: '/assets/images/e-commercs_app_ico.svg',
                title: 'E-commerce Mobile App Development',
                description: 'Mobile apps designed for smooth shopping experiences, secure payments, and intuitive navigation to boost e-commerce success.'
              },
              {
                icon: '/assets/images/ui_ux_ico.svg',
                title: 'UI/UX Design for Mobile Apps',
                description: 'Visually appealing and user-focused interfaces that enhance usability, engagement, and customer satisfaction.'
              },
              {
                icon: '/assets/images/iot_ico.svg',
                title: 'IoT (Internet of Things) Integration',
                description: 'Seamless integration with smart devices to enable real-time connectivity and efficient data management across industries.'
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
                  <a href="" className="stretched-link">
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
      <section id="why-join" className="" style={{backgroundImage: "url(/assets/images/advanced_mobile_bg.jpg)"}}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="why-join">
                <h3>Boost Your Business with Advanced Mobile Apps</h3>
                <p>Custom mobile solutions designed to enhance engagement and growth</p>
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