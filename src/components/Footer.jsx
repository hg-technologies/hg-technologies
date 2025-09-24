// components/Footer.jsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import toast from 'react-hot-toast';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic email validation
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error('Please enter a valid email address', {
        duration: 3000,
        position: 'top-right',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Prepare payload according to API requirements
      const payload = {
        type: "subscription",
        email: email
      };

      // Send API request
      const response = await fetch('https://api-dev.buildsync.net/api/v1/hg-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      console.log('API Response:', result);

      // Show success toast
      toast.success('Thank you for subscribing! You will receive updates soon.', {
        duration: 5000,
        position: 'top-right',
      });

      // Clear the email field - THIS IS ALREADY PRESENT
      setEmail('');

    } catch (error) {
      console.error('Error submitting subscription:', error);

      // Show error toast
      toast.error('There was an error with your subscription. Please try again later.', {
        duration: 5000,
        position: 'top-right',
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <footer id="footer" className="footer dark-background">
      <div className="footerBg">
        <div className="footer-top">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-5 col-md-6 footer-about">
                <Link href="/" className="logo d-flex align-items-center">
                  <span className="sitename">HG Technologies</span>
                </Link>
                <div className="footer-contact pt-3">
                  <p>4th Floor, Pavilion, Tonk Road, Opp. SMS Stadium, Bapu Nagar, Jaipur, Rajasthan, 302015.</p>
                  <p className="mt-3"><strong>Phone:</strong> <span>+ 91-8107143397</span></p>
                  <p><strong>Email:</strong> <a href="mailto:support@hgtechnologies.in">support@hgtechnologies.in</a></p>
                </div>
                <div className="social-links d-flex mt-4">

                  <a href="https://www.linkedin.com/company/h-g-technology-services-private-limited/about/" target='_blank'><i className="bi bi-linkedin"></i></a>
                </div>
              </div>

              <div className="col-lg-3 col-md-3 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <Link href="/">Home</Link></li>
                  <li><i className="bi bi-chevron-right"></i> <Link href="/about-us">About Us</Link></li>
                  <li><i className="bi bi-chevron-right"></i> <Link href="/careers">Careers</Link></li>
                  <li><i className="bi bi-chevron-right"></i> <Link href="/contact-us">Contact Us</Link></li>
                  <li><i className="bi bi-chevron-right"></i> <Link href="/terms-service">Terms of Service</Link></li>
                  <li><i className="bi bi-chevron-right"></i> <Link href="/privacy-policy">Privacy Policy</Link></li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-3 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <Link href="/services/ai-project">AI Project Development</Link></li>
                  <li><i className="bi bi-chevron-right"></i> <Link href="/services/product">Product Development</Link></li>
                  <li><i className="bi bi-chevron-right"></i> <Link href="/services/software">Software Development</Link></li>
                  <li><i className="bi bi-chevron-right"></i> <Link href="/services/mobileapp">Mobile App Development</Link></li>
                  <li><i className="bi bi-chevron-right"></i> <Link href="/services/web">Web Development</Link></li>
                  <li><i className="bi bi-chevron-right"></i> <Link href="/services/cloud">Cloud Development</Link></li>
                </ul>
              </div>

              {/* <div className="col-lg-4 col-md-12 footer-newsletter">
                <h4>Newsletter</h4>

                <form className="php-email-form" onSubmit={handleSubmit} >
                  <div className="newsletter-form">
                    <input type="email" name="email" value={email} placeholder='Enter your email id' onChange={(e) => setEmail(e.target.value)}
                      disabled={isSubmitting} />
                    <input type="submit" value={isSubmitting ? 'Subscribing...' : 'Subscribe'}
                      disabled={isSubmitting} /></div>
                  <div className="loading" style={{ display: isSubmitting ? 'block' : 'none' }}>Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message" style={{ display: 'none' }}>Your subscription request has been sent. Thank you!</div>
                </form>
                <p className="emailSub">I agree to receive promotional emails and updates from HG Technologies.
                  <Link href="/privacy-policy"> Privacy Policy</Link> &  <Link href="/terms-service">Terms of Service</Link></p>
              </div> */}

            </div>
          </div>
        </div>

        <div className="copyright">
          <div className="container text-center">
            <p>© <span>Copyright</span> <strong className="px-1 sitename">HG Technologies.</strong> <span>All Rights Reserved</span></p>
          </div>
        </div>
      </div>
    </footer>
  );
}