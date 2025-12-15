import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import WelcomeVideo from '@/components/WelcomeVideo';
import Locations from '@/components/Locations';
import About from '@/components/About';
import ImageCarousel from '@/components/ImageCarousel';
import Ministries from '@/components/Ministries';
import LatestSermon from '@/components/LatestSermon';
import UpcomingEvents from '@/components/UpcomingEvents';
import FAQ from '@/components/FAQ';
import Testimonial from '@/components/Testimonial';
import CallToAction from '@/components/CallToAction';
import { siteMetadata } from '@/lib/siteMetadata';

export const metadata: Metadata = {
  title: 'Home',
  description: siteMetadata.description,
  openGraph: {
    title: `${siteMetadata.title} | Home`,
    description: siteMetadata.description,
    url: siteMetadata.baseUrl,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteMetadata.title} | Home`,
    description: siteMetadata.description,
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <Hero />
      <section className="py-16 bg-primary-bg dark:bg-background-dark">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <WelcomeVideo />
          <Locations />
        </div>
      </section>

      <About />
      <ImageCarousel />
      <Ministries />

      <section className="py-20 bg-white dark:bg-[#251e30]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <LatestSermon />
            <UpcomingEvents />
          </div>
        </div>
      </section>

      <FAQ />
      <Testimonial />
      <CallToAction />
    </div>
  );
}
