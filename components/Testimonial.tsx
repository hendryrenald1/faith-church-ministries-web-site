import React from 'react';

const Testimonial: React.FC = () => {
  return (
    <section className="py-20 bg-background-light dark:bg-background-dark border-t border-gray-100 dark:border-gray-800">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <span className="material-symbols-outlined text-5xl text-primary/30 mb-6">
          format_quote
        </span>
        <blockquote className="text-2xl font-medium leading-normal text-text-main dark:text-white sm:text-3xl">
          "Faith Church has been a home for my family for over 10 years. It's not just a place we
          go on Sundays; it's a community that walks through life with us."
        </blockquote>
        <div className="mt-8 flex items-center justify-center gap-4">
          <div className="h-12 w-12 overflow-hidden rounded-full bg-gray-300 ring-2 ring-primary/20">
            <img
              alt="Portrait of Sarah Jenkins"
              className="h-full w-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6XgajMXuo5b7EY7LgtWxCuZ7W9uyLyfmVSUgmreLEruYexMDAfWeuvIE1IS-C2isxLZbq9tNDfCWw4Xq4FOlNV3WWdAgjSh9N0KsG0f-fR3ZX_JAw91tq6EiE-6EwZ_pPrIhIiWULF7aTNiF8crKr5iwbHrs67Nr3RudlA4htj5OSWgekvZBhKH4g0zIiZCVm3Qk_WC3KKvgoWZE2NgqbZrV6gTA_Oy5qKHgXaSTEbwHpq9M4rJvVy6py5hTEplXN_bsyZaDutaw3"
            />
          </div>
          <div className="text-left">
            <div className="font-bold text-text-main dark:text-white">Sarah Jenkins</div>
            <div className="text-sm text-text-muted dark:text-gray-400">Member since 2014</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
