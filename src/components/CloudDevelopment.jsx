// components/CloudDevelopment.js
'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const CloudDevelopment = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
     
      <main className="main">
        {/* Hero Section */}
        <section id="hero" className="hero aboutUsHero section dark-background">
          <img src="/assets/images/cloud_bg.jpg" alt="Cloud Development" data-aos="fade-in" />
          
          <div className="container">
            <div className="row justify-content-center text-center" data-aos="fade-up" data-aos-delay="100">
              <div className="col-xl-7 col-lg-8">
                <h2><span>Cloud Development</span></h2>
              </div>
            </div>
          </div>
        </section>

        <div className="feature-card-sect">
          <div className="container">
            <div className="row" data-aos="fade-up" data-aos-delay="100">
              <div className="col-lg-6 col-md-12">
                <div className="section-title">
                  <h2>Cloud Development</h2>
                  <p>Empower Your Operations with Cutting-Edge DevOps Solutions</p>
                </div>
                
                <ul className="ticklist">
                  <li>
                    <span>Accelerated Release Pipelines</span> - With continuous integration and continuous deployment (CI/CD), 
                    we automate builds, testing, and deployments—cutting down release times and ensuring every update is reliable and high-quality.
                  </li>
                  <li>
                    <span>Unified Collaboration</span> - DevOps is more than tools; it's about culture. We streamline collaboration 
                    across development, operations, and security teams, creating smoother workflows and reducing errors.
                  </li>
                  <li>
                    <span>Elastic & Cloud-Native Infrastructure</span> - By leveraging Kubernetes, containerization, and serverless computing, 
                    we design infrastructures that expand or shrink seamlessly with demand, giving you unmatched flexibility.
                  </li>
                  <li>
                    <span>Proactive Monitoring & Resilience</span> - Our solutions include advanced monitoring, real-time alerts, 
                    and automated recovery, ensuring systems stay secure, stable, and ready for future challenges.
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 col-md-12 align-self-center mt-4">
                <div className="text-center">
                <img src="/assets/images/devops_tech.jpg" className="img-fluid radiusImg"
                 alt="DevOps Technologies" style={{width:"70%"}}/>

              </div>
              </div>
            </div>
          </div>
        </div>

        <div className="develop-section">
          <div className="container useTechnologies">
            <div className="section-title">
              <h2>SERVICES</h2>
              <p>Modern Cloud Solutions With Endless Possibilities</p>
            </div>
            
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="ser-card-wt">
                  <img src="/assets/images/cloud_consulting_i.svg" className="img-fluid" alt="Cloud Consulting" />
                  <h4>Cloud Consulting</h4>
                  <p>
                    We provide expert guidance to help you navigate your cloud journey. 
                    We analyze your business needs and create a tailored cloud strategy to maximize efficiency and performance. With our consulting 
                    services, you'll gain a clear roadmap to leverage the full potential of cloud technology.
                  </p>
                </div>
              </div>
              
              <div className="col-lg-4 col-md-6">
                <div className="ser-card-wt">
                  <img src="/assets/images/cloud_migration_1.svg" className="img-fluid" alt="Cloud Migration" />
                  <h4>Cloud Migration</h4>
                  <p>
                    Seamlessly migrate your existing systems to the cloud with our comprehensive migration services. 
                    We ensure minimal disruption to your business operations. Our team handles all aspects of migration, 
                    from planning and execution to testing and validation, ensuring a smooth transition to the cloud.
                  </p>
                </div>
              </div>
              
              <div className="col-lg-4 col-md-6">
                <div className="ser-card-wt">
                  <img src="/assets/images/application_dev_i.svg" className="img-fluid" alt="Cloud Application Development" />
                  <h4>Cloud Application Development</h4>
                  <p>
                    Get custom cloud applications tailored to your unique needs. Our team creates robust, secure, 
                    and efficient cloud applications that enhance your operational 
                    capabilities. We focus on delivering high-performance & scalable solutions for future expansions.
                  </p>
                </div>
              </div>
              
              <div className="col-lg-4 col-md-6">
                <div className="ser-card-wt">
                  <img src="/assets/images/cloud_security_i.svg" className="img-fluid" alt="Cloud Security" />
                  <h4>Cloud Security</h4>
                  <p>
                    Protect your cloud infrastructure and data from threats with our top-notch security measures. 
                    Our cloud security services include risk assessment, threat management, compliance, and ongoing monitoring. 
                    We ensure your cloud environment is secure, reliable, and compliant with industry standards.
                  </p>
                </div>
              </div>
              
              <div className="col-lg-4 col-md-6">
                <div className="ser-card-wt">
                  <img src="/assets/images/cloud_storage_i.svg" className="img-fluid" alt="Cloud Storage Solutions" />
                  <h4>Cloud Storage Solutions</h4>
                  <p>
                    Scalable and secure cloud storage solutions to meet your data storage needs. 
                    Our cloud storage services offer flexibility and high availability. We design and implement storage 
                    solutions that provide fast access to your data while ensuring it is safe and compliant with regulations.
                  </p>
                </div>
              </div>
              
              <div className="col-lg-4 col-md-6">
                <div className="ser-card-wt">
                  <img src="/assets/images/devOps_i.svg" className="img-fluid" alt="DevOps Solutions" />
                  <h4>DevOps Solutions</h4>
                  <p>
                    Enhance your development and operational processes with our comprehensive DevOps services. 
                    We integrate development and operations to improve collaboration and accelerate deployment. 
                    Our DevOps solutions include continuous integration, continuous delivery, and automation, ensuring faster time-to-market.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="missionBlogBg" style={{ paddingBottom: 0 }}>
          <div className="feature-card-sect">
            <div className="container aos-init aos-animate" data-aos="fade-up">
              <div className="section-title">
                <h2>Technologies</h2>
                <p>Technologies and Tools</p>
              </div>
              
              <div className="row about-top-item-wrapper">
                <div className="col-xl-4 col-md-6 about-top-item-inner">
                  <div className="about-top-item visionMobileM">
                    <div className="about-top-img">
                      <img className="img-fluid aiProjectImg" src="/assets/images/aws.jpg" alt="AWS" />
                    </div>
                    <div className="about-top-content">
                      <div className="title">AWS (Amazon Web Services)</div>
                      <p>
                        Leverage AWS for secure, scalable, and cost-efficient cloud solutions that support application hosting, data storage, and advanced analytics. 
                        Empower your business with flexible infrastructure built for innovation.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="col-xl-4 col-md-6 about-top-item-inner">
                  <div className="about-top-item">
                    <div className="about-top-img imgBlog">
                      <img className="img-fluid aiProjectImg" src="/assets/images/microsoft_azure.jpg" alt="Microsoft Azure" />
                    </div>
                    <div className="about-top-content">
                      <div className="title">Microsoft Azure</div>
                      <p>
                        Build, deploy, and manage applications seamlessly with Microsoft Azure's powerful cloud ecosystem. From AI to enterprise-grade security,
                        Azure ensures scalability and smooth digital transformation.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="col-xl-4 col-md-6 about-top-item-inner">
                  <div className="about-top-item">
                    <div className="about-top-img imgBlog">
                      <img className="img-fluid aiProjectImg" src="/assets/images/google.jpg" alt="Google Cloud Platform" />
                    </div>
                    <div className="about-top-content">
                      <div className="title">Google Cloud Platform (GCP)</div>
                      <p>
                        Unlock data-driven growth with Google Cloud's AI-powered tools, secure infrastructure, and multi-cloud flexibility. 
                        GCP helps businesses innovate faster while reducing operational costs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="why-join" style={{ backgroundImage: "url(/assets/images/cloud_dev_bg.jpg)" }}>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="why-join">
                  <h3>Get Custom Solutions from an Award-Winning Cloud Solution Partner</h3>
                  <p>Let's build something amazing together.</p>
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
      </main>

      {/* Scroll Top */}
      <a href="" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center">
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </>
  );
};

export default CloudDevelopment;