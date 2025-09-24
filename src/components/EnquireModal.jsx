// components/EnquireModal.jsx
'use client';

import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export default function EnquireModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    description: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Reset form when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        description: ''
      });
      setErrors({});
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.keyCode === 27) onClose();
    };

    const handlePopState = () => {
      onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      window.history.pushState({ modalOpen: true }, ''); // Push new state
      window.addEventListener('popstate', handlePopState); // Listen for back

      document.body.classList.add('modal-open');
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      window.removeEventListener('popstate', handlePopState); // Cleanup
      document.body.classList.remove('modal-open');
    };
  }, [isOpen, onClose]);

  const handleChange = (e) => {
    const { id, value } = e.target;

    if (id === 'phone') {
      // Allow only digits, spaces, +, -, (, ) and limit digits to 10
      const digitsOnly = value.replace(/\D/g, '');

      if (digitsOnly.length > 10) {
        return; // Prevent updating state if more than 10 digits
      }
    }

    setFormData(prev => ({
      ...prev,
      [id]: value
    }));

    // Clear error when user types
    if (errors[id]) {
      setErrors(prev => ({
        ...prev,
        [id]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9+\-\s()]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    // Company validation (now mandatory)
    if (!formData.company.trim()) {
      newErrors.company = 'Company is required';
    }
    
    // Description validation
    if (!formData.description.trim()) {
      newErrors.description = 'Project description is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Prepare payload according to API requirements
      const payload = {
        type: "inquiry",
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        description: formData.description
      };
      
      // Send API request
      const response = await fetch('https://api-dev.buildsync.net/api/v1/hg-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const result = await response.json();
      console.log('API Response:', result);
      
      // Show success toast
      toast.success('Thank you for your enquiry! We will get back to you soon.', {
        duration: 5000,
        position: 'top-right',
      });
      
      // Close modal on success
      onClose();
      
    } catch (error) {
      console.error('Error submitting form:', error);
      
      // Show error toast
      toast.error('There was an error submitting your enquiry. Please try again later.', {
        duration: 5000,
        position: 'top-right',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal fade full-width-pop show" style={{ display: 'block' }} tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <button 
              type="button" 
              className="btn-close" 
              onClick={onClose}
              aria-label="Close"
              disabled={isSubmitting}
            >
              <img src="/assets/images/modal-close.png" alt="Close" />
            </button>
          </div>
          <div className="modal-body pt-0">
            <div className="container">
              <div className="text-center mb-4 enquireNowLogo">
                <img src="/assets/images/logo.svg" alt="Logo" />
              </div>
              <h4 className="text-center">Get the Perfect Quote.</h4>
              <div className="form-card">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="name" className="form-label">Name *</label>
                        <input 
                          type="text" 
                          className={`form-control ${errors.name ? 'is-invalid' : ''} ${isSubmitting ? 'disabled-field' : ''}`}
                          id="name" 
                          value={formData.name}
                          onChange={handleChange}
                          readOnly={isSubmitting}
                        />
                        {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="email" className="form-label">Email *</label>
                        <input 
                          type="email" 
                          className={`form-control ${errors.email ? 'is-invalid' : ''} ${isSubmitting ? 'disabled-field' : ''}`}
                          id="email" 
                          value={formData.email}
                          onChange={handleChange}
                          readOnly={isSubmitting}
                        />
                        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="phone" className="form-label">Phone *</label>
                        <input 
                          type="tel" 
                          className={`form-control ${errors.phone ? 'is-invalid' : ''} ${isSubmitting ? 'disabled-field' : ''}`}
                          id="phone" 
                          value={formData.phone}
                          onChange={handleChange}
                          readOnly={isSubmitting}
                        />
                        {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="company" className="form-label">Company *</label>
                        <input 
                          type="text" 
                          className={`form-control ${errors.company ? 'is-invalid' : ''} ${isSubmitting ? 'disabled-field' : ''}`}
                          id="company" 
                          value={formData.company}
                          onChange={handleChange}
                          readOnly={isSubmitting}
                        />
                        {errors.company && <div className="invalid-feedback">{errors.company}</div>}
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="description" className="form-label">Description *</label>
                        <textarea 
                          className={`form-control ${errors.description ? 'is-invalid' : ''} ${isSubmitting ? 'disabled-field' : ''}`}
                          id="description"
                          rows="4"
                          value={formData.description}
                          onChange={handleChange}
                          readOnly={isSubmitting}
                        ></textarea>
                        {errors.description && <div className="invalid-feedback">{errors.description}</div>}
                      </div>
                    </div>
                    <div className="col-md-12 text-end">
                      <button 
                        type="submit" 
                        className="btn btn-primary"
                        disabled={isSubmitting}
                        style={{ minWidth: '100px' }}
                      >
                        {isSubmitting ? 'Sending...' : 'Send'}
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
  );
}