// app/layout.jsx
'use client';

import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';
import { Toaster } from 'react-hot-toast';
import ScrollToTop from '@/components/ScrollToTop';
import ScrollProvider from '@/components/ScrollProvider';
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <html lang="en">
      <body className={`index-page ${isMenuOpen ? 'mobile-nav-active' : ''}`}>
        <ScrollProvider>
          <Header 
            isMenuOpen={isMenuOpen} 
            setIsMenuOpen={setIsMenuOpen} 
          />
          <main className="main">
            {children}
            <Toaster 
              position="top-right"
              toastOptions={{
                duration: 5000,
                style: {
                  background: '#363636',
                  color: '#fff',
                },
                // Add these options to ensure the close button works
                ariaProps: {
                  role: 'status',
                  'aria-live': 'polish',
                },
                // Custom icon for close button
                icon: null,
                // These properties ensure the close button is functional
                className: '',
                // This is the key change - explicitly enable the close button
                closeButton: true,
                success: {
                  duration: 5000,
                  iconTheme: {
                    primary: '#4caf50',
                    secondary: '#fff',
                  },
                },
                error: {
                  duration: 5000,
                  iconTheme: {
                    primary: '#f44336',
                    secondary: '#fff',
                  },
                },
              }}
            />
          </main>
          <Footer />
          <ScrollToTop />
        </ScrollProvider>
      </body>
    </html>
  );
}