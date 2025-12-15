const LatestSermon = () => {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-3xl font-bold text-text-main dark:text-white">Latest Sermon</h2>
      <div className="group relative aspect-video w-full overflow-hidden rounded-xl bg-black cursor-pointer shadow-lg">
        <img
          alt="Preacher standing on stage with a microphone speaking to a congregation"
          className="h-full w-full object-cover opacity-80 transition-opacity group-hover:opacity-60"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjapFJS-xoJw91Sk85ADH3SIeBLh2GISMzMnAvUtOL4qqc0UZm_08bElZ8Mmj1dqHNlt1cctK62LMt1sDXxX04BbqPBEl72ctAFL4y2B041_37TS_BiXOkSIzJa00IqaDWvfjDfC3mAc4vhm4rfh4Ylkew_tvFkJy5FjRfAtLxhVn7VBTVDM8a-01OAvk8P4ZlV_feAdHlAuDZS3skSURWmmQ6CsBFzR-xWMlXePQbVYzzlRiLcntCMXF8O2pMdw1hUHdc2DMC6nuY"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white transition-transform group-hover:scale-110 shadow-lg shadow-primary/40">
            <span className="material-symbols-outlined text-4xl">play_arrow</span>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 p-6">
          <span className="mb-1 block text-sm font-bold text-primary-light">Last Sunday</span>
          <h3 className="text-xl font-bold text-white">Walking in Faith: Part 1</h3>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <a
          href="#"
          className="flex h-16 items-center justify-center gap-2 rounded-lg bg-background-light dark:bg-background-dark border border-gray-100 dark:border-gray-800 font-bold text-text-main dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
        >
          <span className="material-symbols-outlined text-primary">podcasts</span> FCM Radio
        </a>
        <a
          href="#"
          className="flex h-16 items-center justify-center gap-2 rounded-lg bg-background-light dark:bg-background-dark border border-gray-100 dark:border-gray-800 font-bold text-text-main dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
        >
          <span className="material-symbols-outlined text-red-500">live_tv</span> Watch Live
        </a>
      </div>
    </div>
  );
};

export default LatestSermon;
