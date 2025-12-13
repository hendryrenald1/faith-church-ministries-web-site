import React from 'react';
import { Ministry } from '../types';

const ministries: Ministry[] = [
  {
    id: 'families',
    title: 'Families',
    description: 'Strengthening marriages and parenting through biblical principles.',
    icon: 'family_restroom',
  },
  {
    id: 'youth',
    title: 'Youth',
    description: 'Empowering the next generation to lead with faith and courage.',
    icon: 'diversity_3',
  },
  {
    id: 'prayer',
    title: 'Prayer',
    description: 'Interceding for our church, community, and the world.',
    icon: 'volunteer_activism',
  },
  {
    id: 'outreach',
    title: 'Outreach',
    description: 'Serving our local communities and sharing the love of Christ.',
    icon: 'public',
  },
];

const Ministries: React.FC = () => {
  return (
    <section id="ministries" className="py-16 bg-background-light dark:bg-background-dark scroll-mt-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold text-text-main dark:text-white">Our Ministries</h2>
            <p className="mt-2 text-text-muted dark:text-gray-400">There's a place for you here</p>
          </div>
          <a
            href="#"
            className="hidden sm:flex items-center text-sm font-bold text-text-main dark:text-white hover:text-primary dark:hover:text-primary-light transition-colors"
          >
            View All Ministries <span className="material-symbols-outlined ml-1">arrow_forward</span>
          </a>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ministries.map((ministry) => (
            <div
              key={ministry.id}
              className="group flex flex-col rounded-xl bg-white dark:bg-[#251e30] p-6 shadow-sm border border-gray-100 dark:border-gray-800 hover:border-primary/30 hover:shadow-lg transition-all"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary dark:text-primary-light group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined">{ministry.icon}</span>
              </div>
              <h3 className="mb-2 text-xl font-bold text-text-main dark:text-white">
                {ministry.title}
              </h3>
              <p className="text-sm text-text-muted dark:text-gray-400">
                {ministry.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center sm:hidden">
          <button className="w-full h-12 rounded-full border border-text-main/20 text-sm font-bold text-text-main dark:text-white">
            View All Ministries
          </button>
        </div>
      </div>
    </section>
  );
};

export default Ministries;
