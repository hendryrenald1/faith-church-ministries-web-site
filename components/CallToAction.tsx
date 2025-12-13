import React from 'react';

const CallToAction: React.FC = () => {
  return (
    <section className="bg-background-dark py-24 text-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
      <div className="relative mx-auto max-w-3xl">
        <h2 className="text-3xl font-black text-white sm:text-4xl lg:text-5xl">
          Ready to Visit?
        </h2>
        <p className="mt-6 text-lg text-gray-300">
          Whether you're new to the area or looking for a new church home, we'd love to welcome you
          this Sunday.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button className="h-14 min-w-[200px] rounded-full bg-primary px-8 text-lg font-bold text-white transition-transform hover:scale-105 hover:bg-primary-light shadow-lg shadow-primary/30">
            Plan Your Visit
          </button>
          <button className="h-14 min-w-[200px] rounded-full border border-gray-600 bg-transparent px-8 text-lg font-bold text-white transition-colors hover:bg-white/10">
            Get Connected
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
