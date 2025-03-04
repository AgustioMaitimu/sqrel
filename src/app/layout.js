import Head from 'next/head';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <title>Sqrel | Interactive Single-Page App Showcase</title>
      <body className="z-0 flex flex-col items-center">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
