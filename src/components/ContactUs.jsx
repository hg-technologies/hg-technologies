// components/ContactUs.jsx
'use client';

import { useState, useRef , useEffect} from 'react';
import Image from 'next/image';
import toast from 'react-hot-toast';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import ReCAPTCHA from 'react-google-recaptcha';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    captchaToken: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [phoneError, setPhoneError] = useState('');
  const recaptchaRef = useRef(null);

  const api_url = process.env.NEXT_PUBLIC_API_BASE_URL_DEV;


  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Clear phone error when user starts typing
    if (name === 'phone' && phoneError) {
      setPhoneError('');
    }

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

      useEffect(() => {
          AOS.init({
            duration: 800,
            once: true, // animations fire only once
            easing: 'ease-in-out',
          });
        }, []);

  const validatePhone = (phone) => {
    // Remove any non-digit characters
    const cleanedPhone = phone.replace(/\D/g, '');

    // Check if it's exactly 10 digits
    if (cleanedPhone.length !== 10) {
      return 'Phone number must be exactly 10 digits';
    }

    // Check if it contains only numbers
    if (!/^\d+$/.test(cleanedPhone)) {
      return 'Phone number must contain only numbers';
    }

    return '';
  };

   // --- Handle CAPTCHA Verification ---
  const handleCaptchaChange = (token) => {
    setFormData((prev) => ({ ...prev, captchaToken: token }));
  };

  const handleCaptchaExpired = () => {
    setFormData((prev) => ({ ...prev, captchaToken: '' }));
  };

  const handleSubmit = async (e) => { 
    e.preventDefault();
    setIsSubmitting(true);

     if (!formData.captchaToken) {
      toast.error('Please verify the reCAPTCHA before submitting.');
      return;
    }

    
    try {
      // Validate all fields are filled
      const { name, email, phone, subject, message } = formData;
      if (!name || !email || !subject || !phone || !message  ) {
        toast.error('Please fill all required fields');
        setIsSubmitting(false);
        return;
      }

      // Validate phone number
      const phoneValidationError = validatePhone(phone);
      if (phoneValidationError) {
        setPhoneError(phoneValidationError);
        toast.error(phoneValidationError);
        setIsSubmitting(false);
        return;
      }

      // Prepare payload according to API requirements
      const payload = {
        type: "contact",
        name: formData.name,
        email: formData.email,
        phone: formData.phone.replace(/\D/g, ''),
        subject: formData.subject,
        message: formData.message,
        captcha: formData.captchaToken,
      };
      

      // Send data to API
      const response = await fetch(api_url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      // Show success message
      toast.success('Your message has been sent successfully!');

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        captchaToken: '',
      });

     recaptchaRef.current?.reset();
     setFormData((prev) => ({ ...prev, captchaToken: '' }));

    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('There was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="hero aboutUsHero section dark-background">
        <Image
          src="/assets/images/contact_slider.jpg"
          alt="Contact HG Technologies"
          fill
          style={{ objectFit: 'cover' }}
          data-aos="fade-in"
        />
        <div className="container">
          <div className="row justify-content-center text-center" data-aos="fade-up" data-aos-delay="100">
            <div className="col-xl-7 col-lg-8">
              {/* <h2 className="titleManSlide">Connect, Collaborate, and Innovate  with Us</h2> */}
              <h2 className="titleManSlide">Contact Us</h2>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section id="contact" className="contact bgIcons section contactFromBlog pb-0">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-12" >
                  <div className="contactUSBlog">
                    {/* Contact Info */}
                    <div className="contactInfo">
                      <div className="col-lg-12">
                        <div className="row" data-aos="fade-up" data-aos-delay="100">
                          <div className="col-lg-5">
                            <div className="info-item d-flex">
                              <i className="bi bi-geo-alt flex-shrink-0"></i>
                              <div>
                                <h3>Office Address :</h3>
                                <p>HG Technologies, 4th Floor Pavilion, SB-56, Tonk Road, Opp. Sawai Mansingh Stadium,Bapu Nagar, Jaipur, Rajasthan, India, 302015</p>   
                              </div>
                            </div>
                          </div>

                          <div className="col-lg-4">
                            <div className="info-item d-flex">
                              <i className="bi bi-envelope flex-shrink-0"></i>
                              <div>
                                <h3>For Business Enquiries :</h3>
                                <p><a href="mailto:support@hgtechnologies.in"> support@hgtechnologies.in</a></p>
                              </div>
                            </div>
                          </div>

                          <div className="col-lg-3">
                            <div className="info-item d-flex">
                              <i className="bi bi-telephone flex-shrink-0"></i>
                              <div>
                                <h3>Call Us : </h3>
                                <p>+91-8107143397</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Contact Form */}
                    <div data-aos="fade-up" data-aos-delay="100">
                    <h2>Connect with us</h2>
                    <p>Fill out the form and our experts will contact you within 24 Hrs.</p>

                    <form onSubmit={handleSubmit} className="contact-form" data-aos="fade-up" data-aos-delay="200">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label htmlFor="name">Name</label>
                            <input
                              id="name"
                              type="text"
                              name="name"
                              className="form-control"
                              value={formData.name}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="mb-3">
                            <label htmlFor="email">Email</label>
                            <input
                              id="email"
                              type="email"
                              name="email"
                              className="form-control"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="mb-3">
                            <label htmlFor="subject">Subject</label>
                            <input
                              id="subject"
                              type="text"
                              name="subject"
                              className="form-control"
                              value={formData.subject}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="mb-3">
                            <label htmlFor="phone">Phone Number</label>
                            <input
                              id="phone"
                              type="text"
                              name="phone"
                              className={`form-control ${phoneError ? 'is-invalid' : ''}`}
                              value={formData.phone}
                              onChange={handleInputChange}
                              required
                              maxLength="10"
                              pattern="[0-9]{10}"
                              title="Please enter exactly 10 digits"
                            />
                            {phoneError && <div className="invalid-feedback">{phoneError}</div>}
                          </div>
                        </div>

                        <div className="col-md-12">
                          <div className="mb-3">
                            <label htmlFor="message">Message</label>
                            <textarea
                              id="message"
                              className="form-control"
                              name="message"
                              rows="6"
                              value={formData.message}
                              onChange={handleInputChange}
                              required
                            ></textarea>
                          </div>
                        </div>

                      <ReCAPTCHA
                        ref={recaptchaRef}
                        sitekey={process.env.NEXT_PUBLIC_SITE_KEY}
                        onChange={handleCaptchaChange}
                        onExpired={handleCaptchaExpired}
                        onErrored={handleCaptchaExpired}
                      />
                    


                        <div className="col-md-12 text-end">
                          <button className='btn btn-primary' type="submit" disabled={isSubmitting || !formData.captchaToken} style={{ minWidth: '150px' }}>
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                          </button>
                        </div>
                      </div>
                    </form>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div data-aos="fade-up" data-aos-delay="200">
          <div className="contactMap">
            <iframe
              style={{ border: 0, width: '100%', height: '470px' }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.376603084434!2d75.8044907!3d26.892553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db70010ed019f%3A0x9dcb03c793769956!2sHG%20Holdings!5e0!3m2!1sen!2sin!4v1688398423745!5m2!1sen!2sin"
              frameBorder="0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
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
      {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => {
        const clientLinks = {
          5: "https://www.hginfra.com/",
          6: "https://www.natriel.com/",
        };
        const link = clientLinks[item];

        return (
          <SwiperSlide key={item}>
            {link ? (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={`/assets/images/clients/client-${item}.png`}
                  className="img-fluid"
                  alt={`Client ${item}`}
                  style={{ cursor: "pointer" }}
                />
              </a>
            ) : (
              <img
                src={`/assets/images/clients/client-${item}.png`}
                className="img-fluid"
                alt={`Client ${item}`}
              />
            )}
          </SwiperSlide>
        );
      })}
      <div className="swiper-pagination"></div>
    </Swiper>
  </div>
</section>

    </>
  );
}