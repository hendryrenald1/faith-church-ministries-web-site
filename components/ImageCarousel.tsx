import React, { useState, useEffect } from 'react';

const images = [
  {
    url: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&q=80&w=1200',
    title: 'Worship Together',
    subtitle: 'Experience powerful worship every Sunday',
  },
  {
    url: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=1200',
    title: 'Community Life',
    subtitle: 'Building lasting friendships over coffee',
  },
  {
    url: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&q=80&w=1200',
    title: 'Youth Ministry',
    subtitle: 'Empowering the next generation',
  },
  {
    url: 'https://images.unsplash.com/photo-1478147427282-58a87a120781?auto=format&fit=crop&q=80&w=1200',
    title: 'Outreach',
    subtitle: 'Serving our city with love',
  },
];

const ImageCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-advance slides
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, isPaused]);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <section className="py-16 bg-white dark:bg-[#251e30]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-text-main dark:text-white">Life at Faith Church</h2>
          <p className="mt-2 text-text-muted dark:text-gray-400">Capturing moments from our community</p>
        </div>

        <div 
          className="relative group w-full h-[400px] sm:h-[500px] m-auto rounded-3xl overflow-hidden shadow-2xl shadow-primary/20"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Main Image */}
          <div
            style={{ backgroundImage: `url(${images[currentIndex].url})` }}
            className="w-full h-full bg-center bg-cover duration-700 ease-in-out transition-all"
          >
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
              <div className="absolute bottom-0 left-0 p-8 sm:p-12 text-left w-full">
                <h3 className="text-3xl sm:text-4xl font-bold text-white mb-2 drop-shadow-lg translate-y-0 transition-transform duration-500">
                  {images[currentIndex].title}
                </h3>
                <p className="text-lg text-gray-200 font-medium drop-shadow-md">
                  {images[currentIndex].subtitle}
                </p>
              </div>
            </div>
          </div>

          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="hidden group-hover:block absolute top-[50%] -translate-y-1/2 left-5 text-2xl rounded-full p-2 bg-black/30 text-white cursor-pointer hover:bg-white/20 hover:backdrop-blur-sm transition-all"
            aria-label="Previous slide"
          >
            <span className="material-symbols-outlined block">chevron_left</span>
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="hidden group-hover:block absolute top-[50%] -translate-y-1/2 right-5 text-2xl rounded-full p-2 bg-black/30 text-white cursor-pointer hover:bg-white/20 hover:backdrop-blur-sm transition-all"
            aria-label="Next slide"
          >
            <span className="material-symbols-outlined block">chevron_right</span>
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {images.map((_, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className={`transition-all duration-300 cursor-pointer rounded-full shadow-sm ${
                  currentIndex === slideIndex 
                    ? 'bg-white w-8 h-2' 
                    : 'bg-white/50 hover:bg-white/80 w-2 h-2'
                }`}
                aria-label={`Go to slide ${slideIndex + 1}`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel;