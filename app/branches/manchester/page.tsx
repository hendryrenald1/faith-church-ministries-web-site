import type { Metadata } from 'next';
import CopyAddressButton from '@/components/CopyAddressButton';
import { siteMetadata } from '@/lib/siteMetadata';

const pageTitle = 'Faith Church Manchester';
const canonicalPath = '/branches/manchester';

export const metadata: Metadata = {
  title: `${pageTitle} | ${siteMetadata.title}`,
  description: 'A Christ-centered church family in Salford — you’re welcome here.',
  alternates: {
    canonical: new URL(canonicalPath, siteMetadata.baseUrl).toString(),
  },
  openGraph: {
    title: `${pageTitle} | ${siteMetadata.title}`,
    description: 'A Christ-centered church family in Salford — you’re welcome here.',
    url: new URL(canonicalPath, siteMetadata.baseUrl).toString(),
    type: 'website',
    siteName: siteMetadata.title,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${pageTitle} | ${siteMetadata.title}`,
    description: 'A Christ-centered church family in Salford — you’re welcome here.',
  },
};

export default function ManchesterBranchPage() {
  return (
    <article className="bg-background-light text-text-main">
      <section className="relative overflow-hidden bg-primary-bg">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 lg:flex-row lg:items-center lg:px-6">
          <div className="relative z-10 flex-1 space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1 text-xs font-semibold text-primary">
              <span className="material-symbols-outlined text-base text-primary">location_on</span>
              Faith Church Manchester
            </span>
            <h1 className="text-4xl font-bold text-text-main sm:text-5xl">Welcome to Faith Church Manchester</h1>
            <p className="text-lg text-text-muted">A Christ-centered church family in Salford — you’re welcome here.</p>
            <div className="flex flex-wrap gap-4 text-sm text-text-muted">
              <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow">
                <span className="material-symbols-outlined text-primary">schedule</span>
                Sunday 11:00 AM
              </div>
              <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow">
                <span className="material-symbols-outlined text-primary">church</span>
                St Lukes Church
              </div>
              <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow">
                <span className="material-symbols-outlined text-primary">map</span>
                Salford M6 5YD
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#plan-visit"
                className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-base font-semibold text-white shadow-lg shadow-primary/30 hover:bg-primary-light"
              >
                Plan Your Visit
              </a>
              <a
                href="#location"
                className="inline-flex items-center justify-center rounded-full border border-primary px-6 py-3 text-base font-semibold text-primary hover:bg-primary/5"
              >
                Get Directions
              </a>
              <span className="inline-flex items-center rounded-full bg-white px-3 py-1 text-xs font-semibold text-primary shadow">
                Bilingual Worship
              </span>
            </div>
          </div>
          <div className="flex-1">
            <div className="relative overflow-hidden rounded-3xl bg-white shadow-card">
              <img
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80"
                alt="Congregation worshipping"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-sm uppercase tracking-wide text-white/70">Manchester Campus</p>
                <p className="text-2xl font-semibold">People-first worship gatherings</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="visit" className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-4 lg:px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="rounded-3xl border border-primary/10 bg-primary-bg p-8 shadow-card">
              <p className="text-sm font-semibold uppercase text-primary">This Sunday at Manchester</p>
              <h2 className="mt-4 text-3xl font-bold text-text-main">Sunday 11:00 AM</h2>
              <p className="mt-2 text-text-muted">St Lukes Church, 43 Derby Road, Salford M6 5YD</p>
              <div className="mt-6 grid gap-4">
                {[
                  { icon: 'diversity_3', text: 'Warm welcome team ready to greet you.' },
                  { icon: 'music_note', text: 'Worship & Bible teaching centered on Jesus.' },
                  { icon: 'child_care', text: 'Family-friendly spaces for all ages.' },
                  { icon: 'timer', text: 'Approx. 90 minutes — come a little early for coffee.' },
                ].map((item) => (
                  <div key={item.icon} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary">{item.icon}</span>
                    <p className="text-sm text-text-main">{item.text}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm text-text-muted">
                New here? Dress comfortably, bring your friends, and feel free to check your kids in to our teams from 10:30 AM.
              </p>
            </div>
            <section
              className="scroll-mt-28 rounded-3xl border border-gray-100 bg-white p-8 shadow-card"
              id="about"
              aria-labelledby="welcome-team-heading"
            >
              <p className="text-sm font-semibold uppercase text-primary tracking-wide">Meet the Welcome Team</p>
              <h2 className="mt-3 text-3xl font-bold text-text-main" id="welcome-team-heading">
                You’re Not Visiting Alone
              </h2>
              <p className="mt-4 text-text-muted leading-relaxed">
                Whether this is your first visit or you’ve been searching for a church home, our welcome team is ready to walk with you.
                We take care of the practical details — where to go, who to meet, what to expect — so you can feel relaxed, seen, and supported
                as you discover your next step with Jesus and with us.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow hover:bg-primary-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  Message the Welcome Team
                </a>
                <a
                  href="#plan-visit"
                  className="inline-flex items-center rounded-full border border-primary px-6 py-3 text-sm font-semibold text-primary hover:bg-primary/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  Plan Your Visit
                </a>
              </div>
            </section>
          </div>
        </div>
      </section>

      <section id="media" className="bg-background-light py-16">
        <div className="mx-auto max-w-6xl px-4 lg:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase text-primary">Community Snapshot</p>
              <h2 className="mt-2 text-3xl font-bold text-text-main">Life at Faith Church Manchester</h2>
            </div>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                src: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=900&q=80',
                alt: 'Worship gathering',
                label: 'Worship',
              },
              {
                src: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=900&q=80',
                alt: 'Fellowship',
                label: 'Fellowship',
              },
              {
                src: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=900&q=80',
                alt: 'Prayer',
                label: 'Prayer',
              },
              {
                src: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=900&q=80',
                alt: 'Youth',
                label: 'Youth',
              },
              {
                src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80',
                alt: 'Families',
                label: 'Families',
              },
              {
                src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80',
                alt: 'Outreach',
                label: 'Outreach',
              },
            ].map((item) => (
              <figure key={item.label} className="overflow-hidden rounded-3xl bg-white shadow-card">
                <img src={item.src} alt={item.alt} className="h-56 w-full object-cover" loading="lazy" />
                <figcaption className="p-4 text-sm font-semibold text-text-main">{item.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="ministries" className="bg-white py-16 scroll-mt-28">
        <div className="mx-auto max-w-6xl px-4 lg:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase text-primary">Ministries at Manchester</p>
              <h2 className="mt-2 text-3xl font-bold text-text-main">Every generation cared for</h2>
            </div>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              { icon: 'favorite', title: 'Families', text: 'Support for parents, kids, and couples with midweek meetups and Sunday kids church.' },
              { icon: 'stadia_controller', title: 'Youth', text: 'Friday hangouts, mentoring, and leadership spaces for teens and young adults.' },
              { icon: 'volunteer_activism', title: 'Prayer', text: 'Weekly prayer rooms for the city, healing, and one-to-one encouragement.' },
              { icon: 'diversity_2', title: 'Outreach', text: 'Serving Salford through food distribution, visitations, and neighbourhood care.' },
            ].map((item) => (
              <article key={item.title} className="rounded-3xl border border-primary/10 p-6 shadow-card">
                <div className="flex items-center gap-3 text-primary">
                  <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                  <h3 className="text-xl font-semibold text-text-main">{item.title}</h3>
                </div>
                <p className="mt-3 text-text-muted">{item.text}</p>
                <a href="#" className="mt-4 inline-flex items-center text-sm font-semibold text-primary hover:text-primary-light">
                  Learn more<span className="material-symbols-outlined text-base">arrow_forward</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="location" className="bg-primary-bg py-16">
        <div className="mx-auto max-w-5xl px-4 lg:px-6">
          <div className="rounded-3xl bg-white p-8 shadow-card">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div>
                <p className="text-sm font-semibold uppercase text-primary">Location & Directions</p>
                <h2 className="mt-2 text-3xl font-bold text-text-main">43 Derby Road, Salford M6 5YD</h2>
                <p className="mt-2 text-text-muted">St Lukes Church • Manchester / Salford</p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://maps.google.com?q=St+Lukes+Church+43+Derby+Road+Salford+M6+5YD"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow hover:bg-primary-light"
                >
                  Open in Google Maps
                </a>
                <CopyAddressButton
                  address="St Lukes Church, 43 Derby Road, Salford M6 5YD"
                  className="inline-flex items-center rounded-full border border-primary px-6 py-3 text-sm font-semibold text-primary hover:bg-primary/5"
                />
              </div>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="space-y-4 text-sm text-text-muted">
                <p>
                  <strong className="text-text-main">Parking:</strong> Street parking available; limited onsite spots for families.
                </p>
                <p>
                  <strong className="text-text-main">Public Transport:</strong> Short walk from Salford Crescent station; buses 36 &amp; 37 stop nearby.
                </p>
              </div>
              <div className="overflow-hidden rounded-2xl bg-primary/5">
                <img
                  src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=700&q=80"
                  alt="Stylized Manchester map placeholder"
                  className="h-48 w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="plan-visit" className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-4 lg:px-6">
          <div className="rounded-3xl border border-primary/10 bg-primary-bg p-8 shadow-card">
            <p className="text-sm font-semibold uppercase text-primary">Plan Your Visit</p>
            <h2 className="mt-3 text-3xl font-bold text-text-main">Tell us you’re coming</h2>
            <p className="mt-2 text-text-muted">No pressure — we just want to welcome you.</p>
            <form className="mt-6 grid gap-4 md:grid-cols-2">
              <label className="text-sm text-text-main">
                Name (optional)
                <input
                  type="text"
                  placeholder="Your name"
                  className="mt-2 w-full rounded-2xl border border-white/60 bg-white px-4 py-3 text-sm text-text-main shadow focus:border-primary focus:ring-primary"
                />
              </label>
              <label className="text-sm text-text-main">
                Email (optional)
                <input
                  type="email"
                  placeholder="you@email.com"
                  className="mt-2 w-full rounded-2xl border border-white/60 bg-white px-4 py-3 text-sm text-text-main shadow focus:border-primary focus:ring-primary"
                />
              </label>
              <label className="text-sm text-text-main md:col-span-2">
                Message
                <textarea
                  placeholder="Let us know if you’re bringing family or need anything."
                  rows={3}
                  className="mt-2 w-full rounded-2xl border border-white/60 bg-white px-4 py-3 text-sm text-text-main shadow focus:border-primary focus:ring-primary"
                />
              </label>
            </form>
            <div className="mt-6 flex flex-wrap gap-4">
              <button
                type="button"
                className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow hover:bg-primary-light"
              >
                Plan Your Visit
              </button>
              <a href="/contact" className="inline-flex items-center rounded-full border border-primary px-6 py-3 text-sm font-semibold text-primary hover:bg-primary/5">
                Contact Manchester Team
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="events" className="bg-background-light py-16">
        <div className="mx-auto max-w-6xl px-4 lg:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase text-primary">Branch Events</p>
              <h2 className="mt-2 text-3xl font-bold text-text-main">Upcoming in Manchester</h2>
            </div>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { time: 'Thu • 7:00 PM', title: 'Prayer Night', desc: 'Focused intercession for Manchester & Salford.', where: 'St Lukes Chapel Room' },
              { time: 'Fri • 6:30 PM', title: 'Youth Fellowship', desc: 'Games, mentoring, and worship for ages 13-20.', where: 'Community Hall' },
              { time: 'Sun • 11:00 AM', title: 'Sunday Worship', desc: 'Bilingual service with kids ministry and prayer teams.', where: 'Main Auditorium' },
            ].map((event) => (
              <article key={event.title} className="rounded-3xl border border-white bg-white p-6 shadow-card">
                <p className="text-xs font-semibold uppercase text-primary">{event.time}</p>
                <h3 className="mt-2 text-xl font-semibold text-text-main">{event.title}</h3>
                <p className="mt-2 text-sm text-text-muted">{event.desc}</p>
                <p className="mt-4 text-sm text-text-main">{event.where}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
