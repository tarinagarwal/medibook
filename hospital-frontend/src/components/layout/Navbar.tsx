import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-olive-600 to-olive-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">M</span>
            </div>
            <span className="text-2xl font-bold text-olive-800">
              MediBook <span className="text-sm text-olive-600">Hospital</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-700 hover:text-olive-600 transition"
            >
              Home
            </a>
            <a
              href="#features"
              className="text-gray-700 hover:text-olive-600 transition"
            >
              Features
            </a>
            <a
              href="#benefits"
              className="text-gray-700 hover:text-olive-600 transition"
            >
              Benefits
            </a>
            <a
              href="#pricing"
              className="text-gray-700 hover:text-olive-600 transition"
            >
              Pricing
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-olive-600 transition"
            >
              Contact
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="/login">
              <button className="px-4 py-2 text-olive-700 hover:text-olive-900 transition">
                Sign In
              </button>
            </a>
            <a href="/register/step1">
              <button className="px-6 py-2 bg-olive-600 text-white rounded-lg hover:bg-olive-700 transition shadow-md">
                Register Hospital
              </button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-olive-600">
                Home
              </a>
              <a
                href="#features"
                className="text-gray-700 hover:text-olive-600"
              >
                Features
              </a>
              <a
                href="#benefits"
                className="text-gray-700 hover:text-olive-600"
              >
                Benefits
              </a>
              <a href="#pricing" className="text-gray-700 hover:text-olive-600">
                Pricing
              </a>
              <a href="#contact" className="text-gray-700 hover:text-olive-600">
                Contact
              </a>
              <a href="/login">
                <button className="px-4 py-2 text-olive-700 text-left">
                  Sign In
                </button>
              </a>
              <a href="/register/step1">
                <button className="px-6 py-2 bg-olive-600 text-white rounded-lg hover:bg-olive-700">
                  Register Hospital
                </button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
