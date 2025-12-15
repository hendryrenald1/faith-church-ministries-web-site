import type { Metadata } from 'next';
import { Spline_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { siteMetadata } from '@/lib/siteMetadata';

const splineSans = Spline_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-spline',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`,
  },
  description: siteMetadata.description,
  metadataBase: new URL(siteMetadata.baseUrl),
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.baseUrl,
    siteName: siteMetadata.title,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteMetadata.title,
    description: siteMetadata.description,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="light">
      <body className={`${splineSans.variable} bg-background-light text-text-main antialiased`}>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
