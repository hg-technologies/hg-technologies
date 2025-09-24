// components/ContactUs.jsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import toast from 'react-hot-toast';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [phoneError, setPhoneError] = useState('');

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate all fields are filled
      const { name, email, phone, subject, message } = formData;
      if (!name || !email || !subject || !phone || !message) {
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
        phone: formData.phone.replace(/\D/g, ''), // Clean phone number before sending
        subject: formData.subject,
        message: formData.message
      };

      // Send data to API
      const response = await fetch('https://api-dev.buildsync.net/api/v1/hg-form', {
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
        message: ''
      });
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
              <h2 className="titleManSlide">Connect, Collaborate, and <span>Innovate </span> with Us</h2>
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
                <div className="col-lg-12">
                  <div className="contactUSBlog">
                    {/* Contact Info */}
                    <div className="contactInfo">
                      <div className="col-lg-12">
                        <div className="row">
                          <div className="col-lg-5">
                            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
                              <i className="bi bi-geo-alt flex-shrink-0"></i>
                              <div>
                                <h3>Principal Office :</h3>
                                <p>HG Technologies, 4th Floor, Pavilion, Tonk Road, Opp. SMS Stadium, Bapu Nagar, Jaipur, Rajasthan, 302015.</p>

                                <br />
                                <h3>Registered Office :</h3>
                                <p>House No. A-2/3, Tilak Marg, C-Scheme, Jaipur, Rajasthan, India, 302005</p>

                              </div>
                            </div>
                          </div>

                          <div className="col-lg-4">
                            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
                              <i className="bi bi-envelope flex-shrink-0"></i>
                              <div>
                                <h3>For Business Enquiries :</h3>
                                <p><a href="mailto:support@hgtechnologies.in">support@hgtechnologies.in</a></p>
                              </div>
                            </div>
                          </div>

                          <div className="col-lg-3">
                            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
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

                        <div className="col-md-12 text-end">
                          {isSubmitting && <div className="loading">Loading</div>}

                          <button className='btn btn-primary' type="submit" disabled={isSubmitting}>
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