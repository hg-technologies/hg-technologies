import ClientLayout from './client-layout';

export const metadata = {
  title: 'HG TECHNOLOGIES',
  icons: {
    icon: [
      { url: '/favicon.png', sizes: 'any' }
    ],
    apple: [
      { url: '/favicon.png' },
    ],
  },
};

export default function RootLayout({ children }) {
  return <ClientLayout>{children}</ClientLayout>;
}