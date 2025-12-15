const Footer = () => {
  return (
    <footer className="bg-white dark:bg-[#1a1625] pt-16 pb-8 border-t border-gray-100 dark:border-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
                <span className="material-symbols-outlined text-lg">church</span>
              </div>
              <span className="text-lg font-bold text-text-main dark:text-white">
                Faith Church Ministries
              </span>
            </div>
            <p className="text-sm leading-relaxed text-text-muted dark:text-gray-400">
              A Christ-centered church family welcoming everyone to worship, grow, and serve
              together.
            </p>
            <div className="flex gap-4 mt-2">
              <a
                href="#"
                className="text-text-muted hover:text-primary dark:text-gray-400 dark:hover:text-primary-light"
              >
                <span className="material-symbols-outlined">thumb_up</span>
              </a>
              <a
                href="#"
                className="text-text-muted hover:text-primary dark:text-gray-400 dark:hover:text-primary-light"
              >
                <span className="material-symbols-outlined">photo_camera</span>
              </a>
              <a
                href="#"
                className="text-text-muted hover:text-primary dark:text-gray-400 dark:hover:text-primary-light"
              >
                <span className="material-symbols-outlined">smart_display</span>
              </a>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-text-main dark:text-white">
              Locations
            </h3>
            <ul className="space-y-3 text-sm text-text-muted dark:text-gray-400">
              <li>
                <strong className="block text-text-main dark:text-gray-200">Manchester</strong>
                43 Derby Road, Salford
              </li>
              <li>
                <strong className="block text-text-main dark:text-gray-200">London Area</strong>
                Wembley, East Ham, Sutton
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-text-main dark:text-white">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm text-text-muted dark:text-gray-400">
              <li>
                <a href="#" className="hover:text-primary hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary hover:underline">
                  Ministries
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary hover:underline">
                  Events Calendar
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary hover:underline">
                  Sermons
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary hover:underline">
                  Give
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-text-main dark:text-white">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-text-muted dark:text-gray-400">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-base">call</span>
                <span>+44 7404 179759</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-base">mail</span>
                <span>hello@faithchurch.org</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-100 dark:border-gray-800 pt-8 text-center text-sm text-text-muted dark:text-gray-500">
          <p>© 2023 Faith Church Ministries. All rights reserved.</p>
          <div className="mt-2 flex justify-center gap-4">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <span>•</span>
            <a href="#" className="hover:underline">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
