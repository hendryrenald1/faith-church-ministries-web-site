import React from 'react';

const WelcomeVideo: React.FC = () => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative w-full overflow-hidden rounded-3xl shadow-2xl shadow-primary/20 aspect-video max-w-3xl bg-black mb-10 group cursor-pointer ring-4 ring-white dark:ring-gray-800">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="https://lh3.googleusercontent.com/aida-public/AB6AXuB1qQoToI83IXD6-nFaiKLVmXgv8SpwUXgiYPlzFQz8N3UAxRjkTRmUWuCMFtGmvsB8FeN5ObmgXIYK13tFrh1DENqk1I5SdyvlUupJub_KiD_U62Q-5QRJkPwbxSM0Q-lJq7buRGZ07Lkc16r7v3YDU0rA-_cdE3XXq3UsiY3Eoh7Y5a_0ApQdqT5oJBBppVKkpi2KKePGljqx0lGEYerOk6_PFC8a5rRLE-alM7RyKRN8VoDpGulQpKuTpkdQhyepgRc_XQFv_qO3"
          className="h-full w-full object-cover opacity-95 transition-opacity group-hover:opacity-100"
        >
          <source src="https://videos.pexels.com/video-files/3255275/3255275-hd_1920_1080_25fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="rounded-full bg-black/40 p-4 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-90 group-hover:scale-100">
            <span className="material-symbols-outlined text-4xl text-white">volume_up</span>
          </div>
        </div>
        <div className="absolute bottom-6 left-6 right-6 text-left">
          <span className="inline-block rounded-lg bg-primary/90 px-4 py-2 text-xs font-bold uppercase text-white backdrop-blur-md shadow-lg mb-2">
            Welcome Home
          </span>
          <p className="text-white text-lg font-medium drop-shadow-md">
            A message from our Pastor
          </p>
        </div>
      </div>
      <h2 className="text-3xl font-bold tracking-tight text-text-main dark:text-white sm:text-4xl lg:text-5xl mb-4">
        Join Us This Sunday — From London to Manchester & Beyond
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
        <button className="h-12 min-w-[160px] rounded-full bg-primary px-8 text-sm font-bold text-white hover:bg-primary-light transition-transform hover:scale-105 shadow-md shadow-primary/20">
          Plan Your Visit
        </button>
        <button className="h-12 min-w-[160px] rounded-full border-2 border-primary text-primary dark:border-white dark:text-white bg-transparent px-8 text-sm font-bold hover:bg-primary/5 dark:hover:bg-white/10 transition-colors">
          Watch Online
        </button>
        <a
          href="#locations-list"
          className="h-12 min-w-[160px] flex items-center justify-center rounded-full bg-gray-900 dark:bg-gray-700 px-8 text-sm font-bold text-white hover:bg-gray-800 hover:scale-105 transition-all shadow-md"
        >
          Directions
        </a>
      </div>
    </div>
  );
};

export default WelcomeVideo;