import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { AboutMe } from './components/AboutMe';
import { NavegationBar } from './components/NavegationBar';
config.autoAddCss = false;

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Nadine Estrella',
  description: 'Nadine Estrella Portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <header>
          <AboutMe />
          <NavegationBar />
        </header>

        {children}
        <Footer />
      </body>
    </html>
  );
}
