// components/Header.jsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import EnquireModal from './EnquireModal';

export default function Header({ isMenuOpen, setIsMenuOpen }) { // Receive props
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname();

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 300) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update currentPath when pathname changes
  useEffect(() => {
    setCurrentPath(pathname);
  }, [pathname]);

  const isActive = (path) => {
    if (currentPath === "/") {
      return currentPath === path ? 'active' : '';
    } else {
      return currentPath === path + '/' ? 'active' : '';
    }
  };

  const isServicesActive = () => {
    return currentPath.includes('/services/') ? 'active' : '';
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Use the function from props
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Handle dropdown click
  const handleDropdownClick = (e) => {
    e.preventDefault();
    // Toggle dropdown when in mobile view
    if (isMenuOpen) {
      setIsDropdownOpen(!isDropdownOpen);
    }
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false); // Also close dropdown when route changes
  }, [currentPath, setIsMenuOpen]); // Add setIsMenuOpen to dependencies

  // Close dropdown when mobile menu closes
  useEffect(() => {
    if (!isMenuOpen) {
      setIsDropdownOpen(false);
    }
  }, [isMenuOpen]);

  return (
    <>
      <header 
        id="header" 
        className={`header d-flex align-items-center fixed-top ${isScrolled ? 'fixed-active' : ''}`}
      >
        <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
          <Link href="/" className="logo d-flex align-items-center me-auto me-lg-0">
            <h1 className="sitename">
              <img src="/assets/images/logo.svg" alt="HG Technologies" />
            </h1>
          </Link>

          <nav id="navmenu" className={`navmenu ${isMenuOpen ? 'mobile-nav-active' : ''}`}>
            <ul>
              <li><Link href="/" className={isActive('/')}>Home</Link></li>
              <li><Link href="/about-us" className={isActive('/about-us')}>About Us</Link></li>
              <li className="dropdown">
                <a 
                  href="javascript:void(0)" 
                  className={`${isServicesActive()}`}
                  onClick={handleDropdownClick}
                >
                  <span>Services</span> 
                  <i className="bi bi-chevron-down toggle-dropdown"></i>
                </a>
                <ul className={isMenuOpen && isDropdownOpen ? 'dropdown-active' : ''}>
                  <li><Link href="/services/ai-project" className={isActive('/services/ai-project')}>AI Project Development</Link></li>
                  <li><Link href="/services/product" className={isActive('/services/product')}>Product Development</Link></li>
                  <li><Link href="/services/software" className={isActive('/services/software')}>Software Development</Link></li>
                  <li><Link href="/services/mobileapp" className={isActive('/services/mobileapp')}>Mobile App Development</Link></li>
                  <li><Link href="/services/web" className={isActive('/services/web')}>Web Development</Link></li>
                  <li><Link href="/services/cloud" className={isActive('/services/cloud')}>Cloud Computing</Link></li>
                </ul>
              </li>
              <li><Link href="/careers" className={isActive('/careers')}>Careers</Link></li>
              <li><Link href="/contact-us" className={isActive('/contact-us')}>Contact</Link></li>
            </ul>
            <i
              className={`mobile-nav-toggle d-xl-none ${isMenuOpen ? 'bi bi-x' : 'bi bi-list'}`}
              onClick={toggleMenu}
            ></i>
          </nav>

          <a className="btn-getstarted" onClick={openModal}>
            Enquire Now
          </a>
        </div>
      </header>

      <EnquireModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}