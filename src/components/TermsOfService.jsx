// components/TermsOfService.js
'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export default function TermsOfService() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY >= 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    'AI Project Development',
    'Product Development',
    'Software Development',
    'Mobile App Development',
    'Web Development',
    'Cloud Computing',
  ];

  const prohibitedContent = [
    'Violates applicable laws',
    'Is obscene, defamatory, threatening, or misleading',
    'Infringes third-party rights',
    'Harms child',
    'Promotes illegal activity',
    'Impersonates another person',
    'Disparages or harasses any individual, professional, or community',
  ];

  const limitationPoints = [
    'The website and all content on the website are provided to you on an “AS IS” and “AS AVAILABLE” basis without warranty of any kind either express or implied. H.G. Technologies makes no warranty as to the accuracy, completeness or reliability of any Content available through the website. You are responsible for verifying any Content or information before relying on it. Use of the Website and the Content available on the Website is at your sole risk.',
    'H.G. Technologies makes no representations or warranties that use of the website will be uninterrupted or error-free or virus free. You are responsible for taking all necessary precautions to ensure that any content you may obtain from the website is free of viruses or other harmful code.',
    'To the maximum extent permitted by applicable law, H.G. Technologies disclaims all liability, whether based in contract, tort, strict liability or otherwise, and further disclaims all losses, including without limitation indirect, incidental, consequential, or special losses and damages arising out of or in any way connected with access to or use of the Website or the Content or the services by you.',
  ];

  return (
    <main className="main">
      {/* Hero Section */}
      <section id="hero" className="hero aboutUsHero section dark-background">
        <img src="/assets/images/privacy_policy.jpg" alt="Terms of Service" data-aos="fade-in" />
        <div className="container">
          <div className="row justify-content-center text-center" data-aos="fade-up" data-aos-delay="100">
            <div className="col-xl-7 col-lg-8">
              <h2><span>Terms of Service</span></h2>
            </div>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section id="contact" className="contact section contactFromBlog pb-0">
        <div className="container section-title aos-init aos-animate" data-aos="fade-up">
          <h2>Terms of Service</h2>
          <p>Please read these terms carefully before using our services.</p>

          <div className="normalText">
            <p>
              These Terms and Conditions (“Terms”) govern the terms and conditions to your access and use of our website <a href="https://hgtechnologies.in/" target="_blank" rel="noopener noreferrer"> www.hgtechnologies.in</a> owned by H.G. Technology & Services Private Limited, having its registered office at 4th Floor, Plot no SB-56, Pavilion/Malabar Building, Bapu Nagar , Tonk Road, Statue of Arjun SMS Stadium, Jaipur, Rajasthan, 302015 (hereinafter referred to as “H.G. Technologies“, “we” or “us” or “our”) and any services offered therein (“Services”) by you (the "user", "you", "your"). <br/> By accessing or using the Website or engaging with our Services, you agree to be bound by these Terms and Conditions along with all policies that may be published or referenced on the Website from time to time (collectively referred to as the “Agreement”). These Terms constitute a binding agreement between you, being a natural or legal person accessing or using the Website in any capacity, and the Company.</p>

            <h4>1. SCOPE OF SERVICES</h4>
            <p className="pLeft20">1.1 We provide Information Technology (“IT”) services as may be mutually agreed in writing through a proposal, contract, or work order. Our services include, without limitation:</p>
            <ul style={{ paddingLeft: '45px' }}>
              {services.map((service, index) => (
                <li key={index} style={{ listStyle: 'lower-roman' }}>{service}</li>
              ))}
            </ul>

            <h4>2. USER RESPONSIBILITIES</h4>
            <p className="pLeft20">2.1 By accessing the Website and accepting these terms, you hereby agree to:</p>
            <ul style={{ paddingLeft: '30px', marginLeft: '0px' }}>
              <li style={{ listStyle: 'none' }}>2.1.1 Provide all necessary information, content, and data required for the performance of the Services in a timely, accurate, and complete manner.</li>
              <li style={{ listStyle: 'none' }}>2.1.2 Ensure any content or data you provide does not violate any third-party rights (Intellectual Property Rights, Privacy, etc.).</li>
              <li style={{ listStyle: 'none' }}>2.1.3 Review deliverables, respond to feedback requests, and approve or provide corrective input within reasonable timeframes. Delays from your side may affect timelines and costs. </li> 
              <li style={{ listStyle: 'none' }}> 2.1.4 Comply with applicable laws in your use of our Services and the website.</li>
            </ul>

           <h4>3. FEES AND PAYMENTS</h4> 
           <p className="pLeft20">3.1 All fees will be as agreed in the relevant proposal or agreement. Unless otherwise stated, fees are exclusive of applicable taxes (e.g., Goods & Services Tax (GST), other indirect or direct taxes).
            <br/> 3.2 Payment schedules will be as per milestones, advance payments, retainers, or full payment depending on the nature of the Service.
            <br/> 3.3 Invoices are payable by the due date specified. Delayed payments may lead to suspension of Services or interest charges as per applicable law (or as agreed in writing).
            <br/> 3.4 Once payment is made, it is non-refundable except as explicitly stated in writing. </p>

            <h4>4. PROHIBITED CONTENT</h4>
            <p className="pLeft20">4.1 The users shall not post, upload, transmit, or otherwise make available any content that:</p>
            <ul style={{ paddingLeft: '45px' }}>
              {prohibitedContent.map((item, index) => (
                <li key={index} style={{ listStyle: 'lower-roman' }}>{item}</li>
              ))}
            </ul>
            <p className="pLeft20">4.2 Any violation of the above may lead to immediate termination of access, removal of content, and reporting to relevant legal authorities.</p>
            <p className="pLeft20">4.3 You also understand and acknowledge that if you fail to adhere to the above, we have the right to remove such information and/or immediately terminate your access to the Services and/or to the Website.</p>

            <h4>5. INDEMNITY</h4>
            <p className="pLeft20">You agree, to the fullest extent permitted by law, to indemnify and keep indemnified, defend and hold H.G. Technologies, its subsidiaries, and affiliates, and their respective officers, agents, members, directors, consultants and employees, harmless from any loss, liability, claim, or demand, including reasonable attorneys’ fees, due to or arising out of your use of the Website and/or breach of this Agreement.</p>

            <h4>6. LIMITATION OF LIABILITY</h4>
            <p className="pLeft20">6.1 By using our Services and the website, you confirm that you understand and agree to the following:</p>
            <ul style={{ paddingLeft: '45px' }}>
              {limitationPoints.map((point, index) => (
                <li key={index} style={{ listStyle: 'lower-roman' }}>{point}</li>
              ))}
            </ul>
            <p className="pLeft20">6.2 This section shall survive the termination of this Agreement and the termination of your use of our Services or the Website.</p>

            <h4>7. PROPRIETARY RIGHTS</h4>
            <p className="pLeft20">7.1 All content on the website, including but not limited to logos, graphics, software, images, text, videos, icons, scripts, and service names (“Content”) are the sole and exclusive property of H.G. Technologies and/or its licensors and is protected by applicable intellectual property laws.
            <br/>7.2 You agree not to reproduce, duplicate, copy, sell, resell, modify, distribute, transmit, display, perform, publish, license, create derivative works from or exploit for any purpose any portion of the Website or the Content other than as expressly authorized by H.G. Technologies in writing. Use of the Website or the Content in any way not expressly permitted by this Agreement is prohibited.
            <br/>7.3 All trademarks, service marks, logos, and trade names used on the website are the property of their respective owners. No right, license, or interest in any intellectual property is granted to you under these Terms. </p>

            <h4>8. DATA PRIVACY POLICY</h4>
            <p className="pLeft20">By agreeing to these terms, you acknowledge that H.G. Technologies may collect, use and disclose your information as described in our Privacy Policy, also available on the Website.</p>

            <h4>9. AMENDMENTS</h4>
            <p className="pLeft20">H.G. Technologies may make amendments or changes to the Website and the Content and/or the services described on the Website at any time without any prior notice.</p>

            <h4>10. TERMINATION</h4>
            <p className="pLeft20">10.1 We reserve the right to refuse the use of Services immediately in case your conduct is deemed by us to be in contravention of applicable acts, laws, rules and regulations or these Terms and Conditions.</p>
            <p className="pLeft20">10.2 For change in law specifically, we reserve our rights to suspend our obligations under any contract indefinitely, and/or provide Services under revised Terms and Conditions.</p>

            <h4>11. APPLICABLE LAW</h4>
            <p className="pLeft20"> This Agreement shall be governed by the laws applicable in India. Any dispute relating to the use of our Services or breach of this agreement will be resolved exclusively in the Courts at Jaipur, Rajasthan. </p>

            <h4>12. CONTACT US</h4>
            <p className="pLeft20"> If you have any comments, queries, or grievances regarding the Services, Terms and Conditions, and Privacy Policy, you may contact: <br/> <b>Name: </b> Varisth Akar<br /> <b>Designation: </b>Manager, IT & Development<br /> <b>Address:</b> 4th Floor, Plot no SB-56, Pavilion/ Malabar Building, Bapu Nagar , Tonk Road, Statue of Arjun SMS Stadium, Jaipur, Rajasthan, 302015<br /> <b>Email:</b> <a href="mailto:varisth.akar@hgtechnologies.in"> varisth.akar@hgtechnologies.in </a> </p>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section id="clients" className="clients section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <Swiper
            loop
            speed={600}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            slidesPerView="auto"
            pagination={{ el: '.swiper-pagination', type: 'bullets', clickable: true }}
            breakpoints={{
              320: { slidesPerView: 2, spaceBetween: 40 },
              480: { slidesPerView: 3, spaceBetween: 60 },
              640: { slidesPerView: 4, spaceBetween: 80 },
              992: { slidesPerView: 5, spaceBetween: 120 },
            }}
            modules={[Pagination, Autoplay]}
            className="init-swiper"
          >
            {[...Array(8)].map((_, i) => (
              <SwiperSlide key={i}>
                <img src={`/assets/images/clients/client-${i + 1}.png`} className="img-fluid" alt={`Client ${i + 1}`} />
              </SwiperSlide>
            ))}
            <div className="swiper-pagination"></div>
          </Swiper>
        </div>
      </section>

      {/* Scroll Top */}
      <a id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center">
        <i className="bi bi-arrow-up-short"></i>
      </a>

      {/* Modal */}
      <div className="modal fade full-width-pop" id="request-modal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                <img src="/assets/images/modal-close.png" alt="Close" />
              </button>
            </div>
            <div className="modal-body pt-0">
              <div className="container">
                <div className="text-center mb-4 enquireNowLogo">
                  <img src="/assets/images/logo.svg" alt="HG Technologies" />
                </div>
                <div className="form-card">
                  <div className="row">
                    {['name', 'email', 'phone', 'company'].map((field, idx) => (
                      <div key={field} className="col-md-6">
                        <div className="form-group">
                          <label htmlFor={field} className="form-label">{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                          <input type="text" className="form-control" id={field} placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`} />
                        </div>
                      </div>
                    ))}
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="description" className="form-label">Description</label>
                        <textarea className="form-control" id="description" placeholder="Project Description"></textarea>
                      </div>
                    </div>
                    <div className="col-md-12 text-end">
                      <button className="btn btn-primary">Send</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
