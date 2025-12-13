import React, { useState } from 'react';

const branchLinks = [
  { label: 'Manchester', href: '/branches/manchester/index.html' },
  { label: 'Wembley', href: '#wembley' },
  { label: 'Sutton', href: '#sutton' },
  { label: 'Leicester', href: '#leicester' },
  { label: 'Liverpool', href: '#liverpool' },
  { label: 'Luton', href: '#luton' },
];

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Ministries', href: '#ministries' },
  { label: 'Events', href: '#events' },
  { label: 'Media', href: '#media' },
  { label: 'Contact', href: '#contact' },
  { label: 'Give', href: '#give' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisitDropdownOpen, setIsVisitDropdownOpen] = useState(false);
  const visitDropdownRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        visitDropdownRef.current &&
        !visitDropdownRef.current.contains(event.target as Node)
      ) {
        setIsVisitDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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
            <div className="relative" ref={visitDropdownRef}>
              <button
                type="button"
                className="inline-flex items-center gap-1 text-sm font-medium text-text-main hover:text-primary dark:text-white dark:hover:text-primary-light transition-colors"
                aria-haspopup="true"
                aria-expanded={isVisitDropdownOpen}
                onClick={() => setIsVisitDropdownOpen((prev) => !prev)}
              >
                Visit Us
                <span className="material-symbols-outlined text-base">
                  {isVisitDropdownOpen ? 'expand_less' : 'expand_more'}
                </span>
              </button>
              {isVisitDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 rounded-2xl bg-white shadow-lg ring-1 ring-black/5 dark:bg-background-dark dark:ring-white/10 z-50">
                  <ul className="py-2 text-sm text-text-main dark:text-white">
                    {branchLinks.map((branch) => (
                      <li key={branch.label}>
                        <a
                          href={branch.href}
                          className="flex items-center px-4 py-2 hover:bg-primary/10 dark:hover:bg-white/10"
                          onClick={() => setIsVisitDropdownOpen(false)}
                        >
                          {branch.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-text-main hover:text-primary dark:text-white dark:hover:text-primary-light transition-colors"
              >
                {item.label}
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
          <div className="space-y-2 rounded-2xl border border-gray-100 dark:border-gray-700 p-4">
            <p className="text-xs font-semibold uppercase text-text-muted dark:text-gray-300">Visit Us</p>
            <div className="flex flex-col gap-2">
              {branchLinks.map((branch) => (
                <a
                  key={branch.label}
                  href={branch.href}
                  className="block rounded-lg px-4 py-2 text-base font-medium text-text-main dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {branch.label}
                </a>
              ))}
            </div>
          </div>
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block rounded-lg px-4 py-2 text-base font-medium text-text-main dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
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
