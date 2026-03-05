const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Company Info */}
          <div>
            <h3 className="text-white text-xl font-bold">
              QuickHire
            </h3>
            <p className="mt-4 text-sm text-gray-400">
              Connecting talented professionals with top companies worldwide.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              Company
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">About</li>
              <li className="hover:text-white cursor-pointer">Careers</li>
              <li className="hover:text-white cursor-pointer">Blog</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              Support
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">Help Center</li>
              <li className="hover:text-white cursor-pointer">Privacy Policy</li>
              <li className="hover:text-white cursor-pointer">Terms of Service</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              Subscribe
            </h4>
            <p className="text-sm text-gray-400 mb-4">
              Get job updates delivered to your inbox.
            </p>

            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 rounded-l-lg bg-gray-800 text-white border border-gray-700 focus:outline-none"
              />
              <button className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 hover:scale-105 transition-all duration-300">
                →
              </button>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-16 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
          © 2026 QuickHire. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;