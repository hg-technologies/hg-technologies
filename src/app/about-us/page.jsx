// components/AboutUs.jsx
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export default function AboutUs() {
  

  useEffect(() => {
    // Initialize any required JavaScript for animations
    // This would typically be handled by your custom.js or main.js
  }, []);

  const stats = [
    { label: "Senior & Expert Staff", value: "75%" },
    { label: "Team Members", value: "50+" },
    { label: "Clients On-board", value: "25+" },
    { label: "Completed Projects", value: "25+" }
  ];

  const services = [
    {
      icon: "/assets/images/creative.png",
      title: "Creative Solutions",
      description: "Creative software solutions for every industry."
    },
    {
      icon: "/assets/images/innovative.png",
      title: "Innovative Service",
      description: "We turn your requirements into innovative solutions."
    },
    {
      icon: "/assets/images/functional.png",
      title: "Functional Features",
      description: "Expert web & mobile app development solutions."
    }
  ];

  const achievements = [
    {
      icon: "/assets/images/teamicon.png",
      value: "10+",
      description: "Android & iOS Apps Developed By HG Technology Team"
    },
    {
      icon: "/assets/images/client-icon.png",
      value: "100%",
      description: "Client Satisfaction Rate"
    },
    {
      icon: "/assets/images/app-download.png",
      value: "50K",
      description: "App Downloads on App Stores"
    }
  ];

  const reviews = [
    { rating: 4.5, text: "HG Technologies transformed our workflow with seamless automation.", author: "Director - Dinesh Goyal, HG Holding" },
    { rating: 5.0, text: "Reliable, innovative, and always on time—true partners in growth.", author: "Sr. Consultant - R S Makker, HG Ekaaya Resorts" },
    { rating: 4.5, text: "Their solutions saved us hours of manual work every week.", author: "HGIS – Existing - Principal, Gopal Kaushik" },
    { rating: 5.0, text: "Excellent support team and cutting-edge technology we can trust.", author: "Ekaaya Healthcare -  COO, Shubham Sharma" }
  ];

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5; // Check for half star (0.5 or more)
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={i}><Image src="/assets/images/star.svg" alt="Star" width={16} height={16} /></i>);
    }
    
    if (hasHalfStar) {
      stars.push(<i key="half"><Image src="/assets/images/half_star.svg" alt="Half Star" width={16} height={16} /></i>);
    }
    
    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<i key={`empty-${i}`}><Image src="/assets/images/star_in.svg" alt="Empty Star" width={16} height={16} /></i>);
    }
    
    return stars;
  };




  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="hero aboutUsHero section dark-background">
        <Image 
          src="/assets/images/banner_about.gif" 
          alt="About HG Technologies" 
          fill
          style={{ objectFit: 'cover' }}
          data-aos="fade-in"
        />
        
        <div className="container">
          <div className="row justify-content-center text-center" data-aos="fade-up" data-aos-delay="100">
            <div className="col-xl-7 col-lg-8">
              <h2><span>About Us</span></h2>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <div className="hightlight-info">
        <div className="container">
          <ul>
            {stats.map((stat, index) => (
              <li key={index}>
                <h6>{stat.label}</h6>
                <p>{stat.value}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* About Content Section */}
      <div className="aboutus-section homeAboutBg">
        <div className="container">
          <div className="row">
            <div className="col-md-12 align-self-center" data-aos="fade-up">
              <div className="container section-title">
                <h2>About Us</h2>
                <p>We are HG Technologies.</p>
              </div>
              <div className="abDetails">
                <p>
                  At <b>HG Technologies,</b> we specialize in delivering intelligent, future-ready digital solutions that empower businesses to scale, 
                  innovate, and lead in a rapidly evolving tech landscape. We believe technology should be more than just functional, it should be 
                  transformative.
                </p>
                <p>
                  From AI and automation to cloud, blockchain, and beyond, we help our clients navigate digital complexity with clarity,
                  building systems that unlock measurable value and long-term growth. As your dedicated technology ally, not just 
                  a service provider, our team of expert developers, analysts, and strategists bring deep technical knowledge and a passion for 
                  problem-solving to every project.
                </p>
                <p>
                  We work closely with organizations across industries and geographies, crafting tailored digital 
                  experiences that enhance efficiency, accelerate performance, and give our clients a lasting competitive edge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="whatweprovide-sect">
        <div className="container" data-aos="fade-up" data-aos-delay="500">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <h5 className="title-heading text-center whiteColor">
                At <span className="goldColor"> Technologies</span>, we deliver tailored digital solutions to drive your success.
              </h5>
            </div>
          </div>
          <ul className="circle-list">
            {services.map((service, index) => (
              <li key={index}>
                <Image 
                  src={service.icon} 
                  className="img-fluid" 
                  alt={service.title}
                  width={80}
                  height={80}
                />
                <h6>{service.title}</h6>
                {service.description}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="our-stragy">
        <div className="container" data-aos="fade-up" data-aos-delay="300">
          <h5 className="title-heading text-center">We Believe in Results</h5>
          <p className="title-sub text-center">Our clients achieve outstanding ROI and higher conversions with us.</p>
          <ul className="stragy-list">
            {achievements.map((achievement, index) => (
              <li key={index}>
                <Image 
                  src={achievement.icon} 
                  className="img-fluid" 
                  alt={achievement.value}
                  width={50}
                  height={50}
                />
                <div>
                  <h6>{achievement.value}</h6>
                  {achievement.description}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Mission & Vision Section */}
        <div className="mission-vision-sect" data-aos="fade-up" data-aos-delay="300">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <div className="mb-5">
                  <h3>Vision</h3>
                  <p>
                    We aim to be a trusted IT partner for organizations worldwide, one that brings clarity, neutrality, 
                    and integrity to every engagement. By offering unbiased technology guidance and value-driven services, 
                    we empower businesses to adopt the right solutions with confidence.
                    From strategy to execution, we stand by our clients as a dependable, end-to-end partner committed to their success.
                  </p>
                </div>
                <div>
                  <h3>Mission</h3>
                  <p>
                    At HG Technologies, we begin by truly listening to our customers, understanding their needs, challenges, and aspirations. 
                    We thoughtfully explore the right technological possibilities and craft tailored solutions that align perfectly with their goals. 
                    Our approach is rooted in collaboration, transparency, and ongoing support, ensuring long-term success and mutual growth.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <Image 
                  className="img-fluid" 
                  src="/assets/images/mission.png" 
                  alt="Mission"
                  width={400}
                  height={400}
                />
              </div>
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
          <div className="section-title">
            <h2>Reviews</h2>
            <p>Client Reviews</p>
          </div>

          <div className="row">
            {reviews.map((review, index) => (
              <div key={index} className="col-lg-3">
                <div className="reviewsBox">
                  <div className="startReview">
                    <span className="rating">{review.rating}</span> 
                    <div className="reviews-totals-stars">
                      {renderStars(review.rating)}
                    </div>
                  </div>
                  <h6>"{review.text}"</h6>
                  <p>{review.author}</p>
                </div>
              </div>
            ))}
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