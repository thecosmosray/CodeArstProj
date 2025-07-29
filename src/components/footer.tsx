import React from 'react'

const Footer:React.FC= () => {
  return (
 <footer className="bg-gray-900">
        <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
          <div className="flex flex-col-reverse justify-between items-center space-y-12 space-y-reverse md:flex-col md:space-y-0 md:items-start">
            <div className="mx-auto my-6 text-center text-white md:hidden">
              Copyright © 2022, All Rights Reserved
            </div>
            <div>
              <img src="img/logo.svg" className="h-8" alt="" />
            </div>
            <div className="flex justify-center space-x-4">
              <a href="#" >
                <img src="img/icon-instagram.svg" className="h-8" alt="" />
              </a>
              <a href="#">
                <img src="img/icon-facebook.svg" className="h-8" alt="" />
              </a>
              <a href="#">
                <img src="img/icon-pinterest.svg" className="h-8" alt="" />
              </a>
              <a href="#">
                <img src="img/icon-twitter.svg" className="h-8" alt="" />
              </a>
              <a href="#">
                <img src="img/icon-youtube.svg" className="h-8" alt="" />
              </a>
            </div>
          </div>

          <div className="flex justify-around space-x-32">
            <div className="flex flex-col space-y-3 text-white">
              <a href="#" className="hover:text-red-500 transition-colors">Home</a>
              <a href="#" className="hover:text-red-500 transition-colors">Pricing</a>
              <a href="#" className="hover:text-red-500 transition-colors">Products</a>
              <a href="#" className="hover:text-red-500 transition-colors">About Us</a>
            </div>
            <div className="flex flex-col space-y-3 text-white">
              <a href="#" className="hover:text-red-500 transition-colors">Careers</a>
              <a href="#" className="hover:text-red-500 transition-colors">Community</a>
              <a href="#" className="hover:text-red-500 transition-colors">Privacy Policy</a>
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
              <input
                type="email"
                className="flex-1 px-4 py-2 rounded-full outline-none ring-2 ring-red-500 placeholder:text-gray-100 text-white"
                placeholder="Updates in your inbox"
              />
              <button
                type="button"
                className="px-6 py-2 text-white rounded-full bg-red-500 hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors"
              >
                Go
              </button>
            </div>
            <div className="hidden text-white md:block mt-8">
              Copyright © 2022, All Rights Reserved
            </div>
          </div>
        </div>
      </footer>
    
  )
}
export default Footer

