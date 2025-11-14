const Footer = () => {
  return (
    <footer className="bg-olive-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-olive-500 to-olive-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <span className="text-2xl font-bold">MediBook</span>
            </div>
            <p className="text-olive-300 text-sm">
              Your trusted partner for seamless healthcare appointments across
              multiple hospitals.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-olive-300">
              <li>
                <a href="#home" className="hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#hospitals" className="hover:text-white transition">
                  Find Hospitals
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* For Hospitals */}
          <div>
            <h3 className="font-semibold text-lg mb-4">For Hospitals</h3>
            <ul className="space-y-2 text-olive-300">
              <li>
                <a
                  href="http://localhost:4002"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  Hospital Portal
                </a>
              </li>
              <li>
                <a href="#register" className="hover:text-white transition">
                  Register Hospital
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-white transition">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-2 text-olive-300 text-sm">
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 mr-2 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                support@medibook.com
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 mr-2 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                +1 (555) 123-4567
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 mr-2 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                123 Healthcare Ave, Medical City
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-olive-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-olive-400 text-sm">
            © 2024 MediBook. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#privacy"
              className="text-olive-400 hover:text-white text-sm"
            >
              Privacy Policy
            </a>
            <a
              href="#terms"
              className="text-olive-400 hover:text-white text-sm"
            >
              Terms of Service
            </a>
            <a
              href="#cookies"
              className="text-olive-400 hover:text-white text-sm"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
