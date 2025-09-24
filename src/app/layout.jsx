import ClientLayout from './client-layout';

export const metadata = {
  title: 'HG TECHNOLOGIES',
  icons: {
    icon: [
      { url: '/favicon.png', sizes: 'any' }
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
  },
};

export default function RootLayout({ children }) {
  return <ClientLayout>{children}</ClientLayout>;
}