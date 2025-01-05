import React from 'react';

export default function Footer() {
  return (
    <>
      <footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white py-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">About Us</h2>
            <p className="text-gray-400 leading-relaxed">
              ShopEase is your ultimate destination for quality products at
              unbeatable prices. We strive to provide an exceptional shopping
              experience with excellent customer service.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">Quick Links</h2>
            <ul className="text-gray-400 space-y-2">
              <li>
                <a href="/shop" className="hover:text-yellow-500 transition">
                  Shop
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-yellow-500 transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-yellow-500 transition">
                  Contact
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:text-yellow-500 transition">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">Subscribe</h2>
            <p className="text-gray-400 mb-4">
              Join our mailing list to stay updated on new arrivals and exclusive offers.
            </p>
            <form className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg border border-gray-700 bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-400 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500">
          <p>© 2025 ShopEase. All Rights Reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="hover:text-yellow-500 transition">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="#" className="hover:text-yellow-500 transition">
              <i className="fab fa-twitter" />
            </a>
            <a href="#" className="hover:text-yellow-500 transition">
              <i className="fab fa-instagram" />
            </a>
            <a href="#" className="hover:text-yellow-500 transition">
              <i className="fab fa-linkedin-in" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

