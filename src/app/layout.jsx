// app/layout.jsx
'use client'; // Add this since we're now using state in the layout

import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';
import { Toaster } from 'react-hot-toast';
import ScrollToTop from '@/components/ScrollToTop';
import ScrollProvider from '@/components/ScrollProvider';
import { useState } from 'react'; // Import useState

const inter = Inter({ subsets: ['latin'] });



export default function RootLayout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Add state for menu

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