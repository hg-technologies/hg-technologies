// components/AIProjectDevelopment.jsx
'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export default function AIProjectDevelopment() {
  useEffect(() => {
    // Initialize any required JavaScript functionality
    // This would typically include animations, video controls, etc.
    
    // Video autoplay functionality
    document.querySelectorAll('.banner-bg-video').forEach(video => {
      if (video) {
        video.muted = true;
        video.loop = true;
        video.playsInline = true;
        video.autoplay = true;
        video.preload = 'auto';

        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch(error => {
            console.warn('Autoplay failed:', error);
            document.addEventListener('click', function once() {
              video.play().catch(error => {
                console.error('Play failed:', error);
              });
              document.removeEventListener('click', once);
            });
          });
        }
      }
    });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="hero aboutUsHero section dark-background">
        <video className="banner-bg-video" autoPlay muted loop playsInline preload="auto" width="100%" height="400">
            <source src="/assets/images/hr5.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        <div className="container">
          <div className="row justify-content-center text-center" data-aos="fade-up" data-aos-delay="100">
            <div className="col-xl-7 col-lg-8">
              <h2><span>AI Project Development</span></h2>
            </div>        
          </div>
        </div>
      </section>

      {/* Section Title */}
      <section className="contact section contactFromBlog pb-0">
        <div className="container section-title aos-init aos-animate" data-aos="fade-up">
          <h2>AI Project Development</h2>
          <p>Scalable GenAI, data science solutions and trusted worldwide.</p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features section missionBlogBg aiMobile">
        <div className="container" data-aos="fade-up">
          <div className="row about-top-item-wrapper">  
            <div className="col-xl-4 col-md-6 about-top-item-inner">
              <div className="about-top-item visionMobileM">
                <div className="about-top-img">
                  <Image 
                    className="img-fluid aiProjectImg" 
                    src="/assets/images/deep-learning.jpg" 
                    alt="Deep Learning" 
                    width={400}
                    height={300}
                  />
                </div>
                <div className="about-top-content">
                  <div className="title">Deep Learning</div>
                  <p>
                    At HG Technologies & Services, we use deep learning to help computers go beyond simple instructions and actually
                    "learn" from data. 
                  </p>
                  <p>
                    This makes it possible to recognize images, understand language, and predict outcomes
                    with speed and precision. For our clients, it means smarter tools that simplify work and deliver accurate results.
                  </p>
                </div>
              </div>      
            </div>  
            
            <div className="col-xl-4 col-md-6 about-top-item-inner">
              <div className="about-top-item">
                <div className="about-top-img imgBlog">
                  <Image 
                    className="img-fluid aiProjectImg" 
                    src="/assets/images/data-science.jpg" 
                    alt="Data Science" 
                    width={400}
                    height={300}
                  />
                </div>
                <div className="about-top-content">
                  <div className="title">Data Science</div>
                  <p>
                    Every business generates a huge amount of data, but numbers alone don't add value unless they tell a story. 
                    Our data science expertise helps uncover patterns hidden inside that information, turning it into clear insights.
                  </p>
                  <p>
                    This allows organizations to plan better, cut waste, and make decisions that truly drive growth.
                  </p>
                </div>
              </div>      
            </div>  

            <div className="col-xl-4 col-md-6 about-top-item-inner">
              <div className="about-top-item">
                <div className="about-top-img imgBlog">
                  <Image 
                    className="img-fluid aiProjectImg" 
                    src="/assets/images/generative-ai.jpg" 
                    alt="Generative AI" 
                    width={400}
                    height={300}
                  />
                </div>
                <div className="about-top-content">
                  <div className="title">Generative AI</div>
                  <p>
                    Generative AI takes technology a step further by creating something new—whether it's text, designs, or ideas. 
                  </p>
                  <p>
                    We use this capability to build innovative solutions that encourage creativity, 
                    open fresh business opportunities, and keep our clients ahead in a competitive market.
                  </p>
                </div>
              </div>      
            </div> 
          </div>
        </div>
      </section>

      {/* AI Expert Consultants Section */}
      <section className="aiExpertConsultantsBg">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="aiConsultants">
            <div className="row">
              <div className="col-xl-6 col-md-12">
                <div className="text-start">
                  <h3>Get Custom Solutions from our <span className="goldColor">AI Expert</span> Consultants</h3>
                  <p>
                    AI is more than technology — it's a catalyst for transformation. 
                    We develop custom-built AI solutions that integrate seamlessly with your ecosystem, 
                    drive innovation, and create measurable business impact. Ready to explore the possibilities?
                  </p>
                  <a 
                    href="/contact-us" 
                    className="btn btn-primary" 
                    data-bs-toggle="modal" 
                    data-bs-target="#request-modal"
                  >
                    Let's Talk
                  </a>
                </div>
              </div>

              <div className="col-xl-6 col-md-12">            
                <video className="banner-bg-video" autoPlay muted loop playsInline preload="auto" width="100%" height="400">
                  <source src="/assets/images/ai-consultants.mp4" type="video/webm" />
                  <source src="/assets/images/ai-consultants.mp4" type="video/ogg" />
                  <source src="/assets/images/ai-consultants.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services section homeServiceBg">
        <div className="container section-title aos-init aos-animate" data-aos="fade-up">
          <h2>Services</h2>
          <p>AI-Powered Intelligence for Modern Business</p>
        </div>

        <div className="container">
          <div className="row gy-4 mb-5">
            {[
              {
                icon: '/assets/images/tailored_ai.svg',
                title: 'Tailored AI Solutions for Your Business',
                description: 'We design AI solutions that fit your business needs, not the other way around. From automation to analytics, every solution is crafted to solve your unique challenges.'
              },
              {
                icon: '/assets/images/scalable_ai.svg',
                title: 'Scalable AI Solutions',
                description: 'As your business grows, your AI should grow with it. Our scalable solutions adapt to increasing data, users, and operations without compromising performance.'
              },
              {
                icon: '/assets/images/existing_systems_ai.svg',
                title: 'Integration with Existing Systems',
                description: 'No need to start from scratch. We seamlessly integrate AI into your current systems, ensuring smooth operations and faster adoption.'
              },
              {
                icon: '/assets/images/innovative_ai.svg',
                title: 'Innovative AI Solutions',
                description: 'We think beyond the usual. Our innovative AI ideas help you stay ahead of competition, create smarter workflows, and unlock new opportunities.'
              },
              {
                icon: '/assets/images/benefits_ai.svg',
                title: 'Business Benefits of AI',
                description: 'AI is not just about technology—it\'s about results. Reduce costs, improve efficiency, boost decision-making, and discover new ways to grow your business.'
              },
              {
                icon: '/assets/images/business_intelligence_ai.svg',
                title: 'AI-Powered Business Intelligence',
                description: 'Turn raw data into clear insights. With AI-powered dashboards and reports, you can make confident decisions backed by real-time intelligence.'
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
      <section id="why-join" className="" style={{backgroundImage: "url(/assets/images/ai-consultants_bg.jpg)"}}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="why-join">
                <h3>Want to build AI solutions that deliver real results?</h3>
                <p>Let's create a smarter product together.</p>
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