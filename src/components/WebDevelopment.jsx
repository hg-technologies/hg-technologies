// components/WebDevelopment.jsx
'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export default function WebDevelopment() {
  useEffect(() => {
    // Initialize any required JavaScript functionality
    // This would typically include animations, etc.
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="hero aboutUsHero section dark-background">
        <Image
          src="/assets/images/web-slider.jpg"
          alt="Web Development"
          fill
          style={{ objectFit: 'cover' }}
          data-aos="fade-in"
        />

        <div className="container">
          <div className="row justify-content-center text-center" data-aos="fade-up" data-aos-delay="100">
            <div className="col-xl-7 col-lg-8">
              <h2><span>Web Development</span></h2>
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
                <h2>WEB DEVELOPMENT</h2>
                <p>Custom Website Development</p>
              </div>

              <ul className="ticklist">
                <li>We design and develop websites that are truly custom-built. Our approach blends modern technologies, creative design, and robust architecture to deliver websites that not only look great but also perform at scale.</li>
                <li>
                  <span>Tailored to Your Business</span> - From startups to enterprises, we craft websites that reflect your brand identity, align with your objectives, and connect effectively with your target audience.
                </li>
                <li>
                  <span>Scalable & Future-Ready</span> - Built on advanced frameworks and cloud-ready infrastructure, our websites evolve with your business, supporting new features, integrations, and growth without limits.
                </li>
                <li>
                  <span>User-Centric Design</span> - We prioritize intuitive navigation, responsive layouts, and interactive elements to ensure a seamless user journey across all devices and screen sizes.
                </li>
                <li>
                  <span>Secure & High-Performance</span> - Our websites are optimized for speed, backed by strong security practices, and built to deliver reliable performance even under heavy traffic.
                </li>
              </ul>
            </div>
            <div className="col-lg-6 col-md-12 align-self-center mt-4">
              
              <div className="text-center">
                <img
                  src="/assets/images/web_dev_img.png"
                  className="img-fluid"
                  alt="Web Development"
                  style={{ width: '80%' }}
                />
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Web Development Technologies Section */}
      <div className="develop-section">
        <div className="container useTechnologies">
          <div className="section-title">
            <h2>Web Development Technologies</h2>
            <p>Future-ready websites powered by the latest tech.</p>
          </div>

          <div className="row">
            {[
              {
                icon: '/assets/images/node.svg',
                title: 'Node.js',
                description: 'We use Node.js to build fast and reliable backend systems that handle large-scale operations with ease.'
              },
              {
                icon: '/assets/images/angular.svg',
                title: 'Angular',
                description: 'Angular helps us create structured, powerful, and user-friendly web applications tailored to your business needs.'
              },
              {
                icon: '/assets/images/react.svg',
                title: 'React',
                description: 'With React, we design dynamic and responsive interfaces that give users a smooth and engaging experience.'
              },
              {
                icon: '/assets/images/vue.svg',
                title: 'Vue.Js',
                description: 'Vue.js allows us to develop lightweight and flexible web apps that are easy to maintain and scale.'
              },
              {
                icon: '/assets/images/cloud-computing.svg',
                title: 'Cloud Computing',
                description: 'Our web solutions are cloud-ready, ensuring high performance, security, and accessibility from anywhere.'
              },
              {
                icon: '/assets/images/html5.svg',
                title: 'CSS/HTML5',
                description: 'We bring designs to life with clean HTML5 and modern CSS, ensuring your website looks professional and works on all devices.'
              }
            ].map((tech, index) => (
              <div key={index} className="col-lg-6 col-md-12">
                <div className="ser-card-wt">
                  <Image
                    src={tech.icon}
                    className="img-fluid"
                    alt={tech.title}
                    width={70}
                    height={70}
                  />
                  <h4>{tech.title}</h4>
                  <p>{tech.description}</p>
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
            <div className="col-lg-6 col-md-12 align-self-center animated fadeInLeft mb-5">
              <div className="text-center">
              <img
                src="/assets/images/desktop_img.png"
                className="img-fluid"
                alt="BuildSync Web Application"
                style={{ width: '80%' }}
              />
            </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="section-title">
                <h2>Portfolio</h2>
                <p>BuildSync – Smart Construction Management</p>
              </div>

              <ul className="ticklist">
                <li>
                  <span>BuildSync</span> is our flagship digital solution designed for the EPC and construction industry. It helps manage Man, Material, and Machines efficiently through a single platform.
                </li>
                <li>
                  <span>RFI Workflows</span> – A structured and automated process for raising, tracking, and approving requests for materials and machinery. This reduces bottlenecks, shortens turnaround time, and keeps every stakeholder aligned.
                </li>
                <li>
                  <span>Gate Entry & Tracking</span> - Real-time visibility of truck movements, weighment records, and site entries ensures accurate material flow and eliminates manual errors.
                </li>
                <li>
                  <span>Dashboards & Analytics</span> - Role-based dashboards provide actionable insights on project progress, resource utilization, and approval timelines, enabling data-driven decision-making.
                </li>
                <li>
                  <span>Mobile & Web Access</span> - A user-friendly interface available on both web and mobile platforms, ensuring stakeholders can access and manage workflows anytime, anywhere.
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
          <p>Expertise In Web Development</p>
        </div>

        <div className="container">
          <div className="row gy-4 mb-5">
            {[
              {
                icon: '/assets/images/cross_platform_ico.svg',
                title: 'Web App Development',
                description: 'We engineer scalable, secure, and high-performance web applications tailored to complex business processes, ensuring flexibility and future readiness.'
              },
              {
                icon: '/assets/images/app_support-ico.svg',
                title: 'CMS Development',
                description: 'Our CMS solutions go beyond simple content updates — we deliver intelligent, customizable platforms that empower businesses to manage digital experiences effortlessly.'
              },
              {
                icon: '/assets/images/prototyping_dev_ico.svg',
                title: 'API Development',
                description: 'From REST to GraphQL, we create robust APIs that enable seamless communication between applications, ensuring speed, reliability, and easy integration with third-party systems.'
              },
              {
                icon: '/assets/images/e-commercs_app_ico.svg',
                title: 'Front-End Development',
                description: 'We craft modern, responsive interfaces using frameworks like React, Angular, and Vue.js, focusing on speed, interactivity, and exceptional user experience.'
              },
              {
                icon: '/assets/images/ui_ux_ico.svg',
                title: 'Back-End Development',
                description: 'Our backends are built to handle heavy data loads and complex logic using Node.js, Python, and cloud-native architectures, ensuring performance, security, and scalability.'
              },
              {
                icon: '/assets/images/iot_ico.svg',
                title: 'UI/UX Web Designing',
                description: 'We combine design thinking with advanced UI/UX practices to deliver intuitive, aesthetically pleasing, and conversion-focused designs that keep users engaged.'
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
      <section id="why-join" className="" style={{ backgroundImage: "url(/assets/images/advanced_web_bg.jpg)" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="why-join">
                <h3>Benefit From Our Expert Web Development Services</h3>
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
    </>
  );
}