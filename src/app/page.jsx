'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function Home() {
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);

  useEffect(() => {
    // Video autoplay script for hero section
    document.querySelectorAll('.banner-bg-video').forEach(video => {
      if (video && !video.id.includes('modal')) {
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

  const handlePlayVideo = () => {
    // Open video in a new tab
    window.open('/assets/images/watch_video.mp4', '_blank');
  };

  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="hero section dark-background">
        <video className="banner-bg-video" autoPlay muted loop playsInline preload="auto" width="100%" height="400">
           <source src="/assets/images/hr6.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="container">
          <div className="row justify-content-center text-center" data-aos="fade-up" data-aos-delay="100">
            <div className="col-xl-9 col-lg-6">
              <h2>Transform Ideas Into Digital Power with <span> HG Technologies </span></h2>
              <p>We are a team of technology specialists building smart digital solutions.</p>
            </div>
          </div>

          <div className="row gy-4 mt-5 justify-content-center" data-aos="fade-up" data-aos-delay="200">
            {/* Icon boxes */}
            {[
              { icon: 'bi-binoculars', title: 'Quality Service' },
              { icon: 'bi-bullseye', title: 'Customized Solutions' },
              { icon: 'bi-fullscreen-exit', title: 'User-Centric Design' },
              { icon: 'bi-card-list', title: 'Technology Experts' },
              { icon: 'bi-gem', title: 'Supportive & Friendly' }
            ].map((item, index) => (
              <div key={index} className="col-xl-2 col-md-4" data-aos="fade-up" data-aos-delay={300 + index * 100}>
                <div className="icon-box">
                  <i className={item.icon}></i>
                  <h3><a >{item.title}</a></h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <div className="aboutus-section homeAboutBg">
        <div className="container">
          <div className="row">
            <div className="col-md-12 align-self-center" data-aos="fade-up">
              <div className="container section-title">
                <h2>About Us</h2>
                <p>Discover Our Story</p>
              </div>
              <div className="abDetails">
                <p>
                  At <b>HG Technologies</b>, we create intelligent, future-ready digital solutions that help businesses scale, adapt, 
                  and grow. We go beyond functionality to deliver transformative Technologies, blending AI, 
                  automation, blockchain, and cloud to drive real impact.
                </p>
                <p>
                  As your trusted tech ally, our expert team partners with you to navigate complexity, 
                  craft custom solutions, and unlock measurable value. From digital transformation to full-scale product development,
                  we combine deep technical know-how with strategic insight to keep your business ahead of the curve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section id="features" className="features section missionBlogBg">
        <div className="container" data-aos="fade-up">
          <div className="row about-top-item-wrapper">
            <div className="col-xl-6 col-sm-6 col-md-6 about-top-item-inner">
              <div className="about-top-item visionMobileM">
                <div className="about-top-img">
                  <Image 
                    className="img-fluid visionImgView" 
                    src="/assets/images/vision.jpg" 
                    alt="Vision" 
                    width={500}
                    height={300}
                  />
                </div>
                <div className="about-top-content">
                  <div className="title">Vision</div>
                  <p>
                    We aim to be a trusted IT partner for organizations worldwide, one that brings clarity, neutrality, and integrity to every engagement.
                    By offering unbiased technology guidance and value-driven services, we empower businesses to adopt the right solutions with confidence.
                    From strategy to execution, we stand by our clients as a dependable, end-to-end partner committed to their success.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-sm-6 col-md-6 about-top-item-inner">
              <div className="about-top-item">
                <div className="about-top-img imgBlog">
                  <Image 
                    className="img-fluid visionImgView" 
                    src="/assets/images/mission.jpg" 
                    alt="Mission" 
                    width={500}
                    height={300}
                  />
                </div>
                <div className="about-top-content">
                  <div className="title">Mission</div>
                  <p>
                    At <b>HG Technologies</b>, we begin by truly listening to our customers, understanding their needs, challenges, and aspirations. We thoughtfully explore the right technological 
                    possibilities and craft tailored solutions that align perfectly with their goals. 
                    Our approach is rooted in collaboration, 
                    transparency, and ongoing support, ensuring long-term success and mutual growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services section homeServiceBg">
        <div className="container section-title" data-aos="fade-up">
          <h2>Services</h2>
          <p>Check Our Services</p>
        </div>

        <div className="container">
          <div className="row gy-4 mb-5">
            {[
              { img: 'service-01.svg', title: 'AI Project Development', desc: 'We deliver custom AI solutions, from machine learning models to smart automation, helping businesses innovate and grow faster.' },
              { img: 'service-02.svg', title: 'Product Development', desc: 'End-to-end product development services that turn your ideas into scalable, user-focused digital products ready for market.' },
              { img: 'service-03.svg', title: 'Software Development', desc: 'Build secure, high-performance software tailored to your business needs, streamlining operations and boosting efficiency.' },
              { img: 'service-04.svg', title: 'Mobile App Development', desc: 'Designing and developing intuitive mobile apps for iOS and Android that enhance customer engagement and brand reach.' },
              { img: 'service-05.svg', title: 'Web Development', desc: 'Create modern, responsive websites that look great on any device and help your brand connect and convert online.' },
              { img: 'service-06.svg', title: 'Cloud Computing', desc: 'Empower your business with scalable and secure cloud solutions, from migration to deployment and architecture design.' }
            ].map((service, index) => (
              <div key={index} className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={index < 3 ? 600 : (index - 2) * 100}>
                <div className="service-item position-relative">
                  <div className="icon">
                    <Image 
                      src={`/assets/images/${service.img}`} 
                      alt={service.title}
                      width={70}
                      height={70}
                    />
                  </div>
                  <a href="javascript:void(0);" className="stretched-link">
                    <h3>{service.title}</h3>
                  </a>
                  <p>{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

       {/* Business Info Section */}
      <div className="business-info-cont">
        <div className="bg"></div>
        <div className="bg bg2"></div>
        <div className="bg bg3"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-5 business-info-content animated fadeInLeft">
              <h3>Transforming Businesses with <span><b>Technologies that Breaks Barriers </b></span> and Connects the World.</h3>
              <ul>
                <li>Full-cycle Product Development </li>
                <li> Market &amp; User Research </li>
                <li>Product Vision &amp; Strategy </li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul className="feature-hl-list">
                <li className="animated bounceInRight">
                  <h2>50+</h2>
                  <p>Tech Experts On-board</p>
                </li>
                <li className="animated bounceInRight">
                  <h2>25+</h2>
                  <p>Projects Delivered</p>
                </li>
             
                <li className="animated bounceInRight">
                  <button className="playbtn" onClick={handlePlayVideo}>
                    <span className="playbtn-img">
                      <Image 
                        src="/assets/images/play-circle.svg" 
                        className="playcircle" 
                        alt="Play"
                        width={50}
                        height={50}
                      />
                      <Image 
                        src="/assets/images/playicon.svg" 
                        className="playicon" 
                        alt="Play"
                        width={20}
                        height={20}
                      />
                    </span>
                    <span className="play-btn-text">Watch Video</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials section dark-background">
        <Image 
          src="/assets/images/testimonials-bg.jpg" 
          className="testimonials-bg" 
          alt="Testimonials background"
          fill
          style={{ objectFit: 'cover' }}
        />

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="swiper init-swiper">
            <script type="application/json" className="swiper-config">
              {JSON.stringify({
                loop: true,
                speed: 600,
                autoplay: {
                  delay: 5000
                },
                slidesPerView: "auto",
                pagination: {
                  el: ".swiper-pagination",
                  type: "bullets",
                  clickable: true
                }
              })}
            </script>
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="testimonial-item">
                  <Image 
                    src="/assets/images/profile-pic.jpg" 
                    className="testimonial-img" 
                    alt="Harshwardhan Singh Choudhary"
                    width={100}
                    height={100}
                  />
                  <h3>Harshwardhan Singh Choudhary </h3>
                  <h4>(MD, HG Technologies)</h4>
                  <p>
                    <i className="bi bi-quote quote-icon-left"></i>
                    <span>Technologies today is not just a tool, it's a catalyst for business evolution. Our team is dedicated to developing robust 
                      architectures, user-centric interfaces, and secure, adaptive platforms that help organizations stay ahead of the curve. With every solution we build, our focus remains on performance, precision, and purpose.</span>
                    <i className="bi bi-quote quote-icon-right"></i>
                  </p>
                </div>
              </div>
            </div>
            <div className="swiper-pagination"></div>
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