import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 dark:border-gray-800 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">
              <span className="material-symbols-outlined text-2xl">church</span>
            </div>
            <span className="text-lg font-bold tracking-tight text-text-main dark:text-white hidden sm:block">
              Faith Church Ministries
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {['Visit Us', 'About', 'Ministries', 'Events', 'Media', 'Contact', 'Give'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-sm font-medium text-text-main hover:text-primary dark:text-white dark:hover:text-primary-light transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button className="hidden sm:flex h-10 cursor-pointer items-center justify-center rounded-full bg-primary px-6 text-sm font-bold text-white hover:bg-primary-light transition-colors shadow-sm shadow-primary/30">
              Plan Your Visit
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex h-10 w-10 md:hidden items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-text-main dark:text-white"
            >
              <span className="material-symbols-outlined">
                {isMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-100 dark:border-gray-800 bg-background-light dark:bg-background-dark px-4 py-4 space-y-2">
          {['Visit Us', 'About', 'Ministries', 'Events', 'Media', 'Contact', 'Give'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="block rounded-lg px-4 py-2 text-base font-medium text-text-main dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <div className="pt-4">
            <button className="w-full h-12 cursor-pointer items-center justify-center rounded-full bg-primary px-6 text-sm font-bold text-white hover:bg-primary-light transition-colors shadow-sm shadow-primary/30">
              Plan Your Visit
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
