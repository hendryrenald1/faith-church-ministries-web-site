import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-[#251e30] scroll-mt-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center">
          <div className="flex flex-1 flex-col gap-6">
            <div className="inline-flex w-fit items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary dark:text-primary-light">
              Who We Are
            </div>
            <h2 className="text-3xl font-black leading-tight tracking-tight text-text-main dark:text-white sm:text-4xl lg:text-5xl">
              About the Church
            </h2>
            <p className="text-lg leading-relaxed text-text-muted dark:text-gray-300">
              Faith Church Ministries is a Christ-centered, Bible-teaching church family serving
              communities across the UK. We are dedicated to worship, growth, and service. We
              believe in creating a space where people can encounter God, connect with others, and
              discover their purpose.
            </p>
            <div className="mt-4 flex flex-wrap gap-4">
              <button className="h-12 rounded-full bg-primary px-6 text-sm font-bold text-white hover:bg-primary-light shadow-md shadow-primary/30">
                Learn More About Us
              </button>
            </div>
          </div>
          <div className="relative flex-1">
            <div className="relative overflow-hidden rounded-xl bg-gray-100 shadow-xl">
              <img
                alt="Group of diverse people smiling and talking in a bright community space holding coffee cups"
                className="h-full w-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuARTrRgDnmmRLjs74TavsMnKal2YAAx-VLDgzESi5xoUFwTzDT7pcCLjuRzyeZgfDofo3EVm1aJJK3YWXuiBZJ1WSAADGNQl7C5JrfS90EmZLyIjB8GwFDq5qIl07q-x7f3_Lr4L5urRM5cQQLljPXjJWcLc_fuLqCRV4UTdoFfTlE8JCTgUNYlX2xuTDvsmKiJarIkDMUhUSDg-bathAi8-ElAtEcOhckO2L2oh0IRSf0DNIwyEvFrLxDrnj1IJki3h55-GMh4qdBE"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 -z-10 h-full w-full rounded-xl bg-primary/10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
