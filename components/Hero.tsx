'use client';

import { useEffect, useRef } from 'react';

const Hero = () => {
  const backgroundVideoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = backgroundVideoRef.current;
    if (!video) {
      return undefined;
    }

    let retryTimeout: ReturnType<typeof setTimeout> | null = null;

    const playVideo = () => {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          retryTimeout = window.setTimeout(playVideo, 1000);
        });
      }
    };

    playVideo();

    return () => {
      if (retryTimeout) {
        clearTimeout(retryTimeout);
      }
    };
  }, []);

  return (
    <section className="relative flex w-full flex-col justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          ref={backgroundVideoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover scale-105 blur-[1px] brightness-95"
          aria-hidden="true"
        >
          <source
            src="https://www.pexels.com/download/video/1677252/"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div
          className="absolute inset-0 pointer-events-none opacity-30 mix-blend-soft-light"
          style={{
            backgroundImage:
              'radial-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(120deg, rgba(0,0,0,0.35), rgba(0,0,0,0.1))',
            backgroundSize: '3px 3px, 100% 100%',
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/45 to-black/35 mix-blend-multiply"></div>
      </div>
      <div className="relative z-10 mx-auto flex min-h-[600px] w-full max-w-7xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6 lg:px-8">
        <div className="mb-6 inline-flex items-center rounded-full bg-white/20 px-3 py-1 backdrop-blur-md border border-white/20">
          <span className="text-xs font-semibold uppercase tracking-wider text-white">
            Sunday Services Across The UK
          </span>
        </div>
        <h1 className="mb-4 max-w-4xl text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-sm">
          A Church Family Where Everyone Is Welcome
        </h1>
        <p className="mb-8 max-w-2xl text-lg font-medium leading-relaxed text-gray-100 sm:text-xl">
          Worship. Grow. Serve. Together.<br />
          <span className="mt-2 block text-sm opacity-90 font-light">
            Sutton • Wembley • Leicester • Liverpool • Manchester • Luton • East Ham
          </span>
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button className="h-12 min-w-[160px] rounded-full bg-white px-8 text-base font-bold text-primary transition-transform hover:scale-105 hover:bg-gray-50 shadow-lg">
            Plan Your Visit
          </button>
          <button className="h-12 min-w-[160px] rounded-full border-2 border-white bg-transparent px-8 text-base font-bold text-white transition-colors hover:bg-white/10">
            Watch Online
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
