import React from 'react'

function Footer() {
  return (
    <div><footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {" "}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <img
              className="h-8"
              src="https://ai-public.creatie.ai/gen_page/logo_placeholder.png"
              alt="Logo"
            />{" "}
            <p className="text-gray-400 text-sm">
              Discover our exclusive collection of artificial jewelry that
              combines elegance with affordability.
            </p>{" "}
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-custom">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#" className="text-gray-400 hover:text-custom">
                <i className="fab fa-twitter" />
              </a>
              <a href="#" className="text-gray-400 hover:text-custom">
                <i className="fab fa-instagram" />
              </a>
              <a href="#" className="text-gray-400 hover:text-custom">
                <i className="fab fa-pinterest" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-white font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-custom">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-custom">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-custom">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-custom">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-medium mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-custom">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-custom">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-custom">
                  Order Status
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-custom">
                  Payment Options
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-medium mb-4">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>{" "}
            <form className="flex">
              <input
                type="email"
                className="flex-1 bg-gray-800 border-gray-700 text-white rounded-l-md focus:ring-custom focus:border-custom"
                placeholder="Enter your email"
              />{" "}
              <button
                type="submit"
                className="!rounded-button px-4 bg-custom text-white rounded-r-md hover:bg-custom/90"
              >
                {" "}
                Subscribe
              </button>
            </form>
          </div>
        </div>{" "}
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Luxury Artificial Jewelry. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-custom text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-custom text-sm">
              Terms of Service
            </a>
          </div>{" "}
        </div>
      </div>
    </footer></div>
  )
}

export default Footer