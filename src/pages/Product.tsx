import Nav from "../components/nav";
import Footer from "../components/footer";
import Button from "../components/button";
import { Bolt, Globe, Laptop, Server } from "lucide-react";

import React from 'react'

const Product: React.FC = () => {
  return (
<>
  <Nav />
  <div className="w-[94%] mx-auto flex flex-col md:flex-row">
    {/* Left Section */}
    <div className="w-full md:w-1/2 h-full">
      {/* Text Content */}
      <div>
        <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left mx-auto md:mx-6">
          Why you should choose Manage?
        </h1>
        <h3 className="max-w-md md:mt-4 text-3xl italic text-center md:text-4xl md:text-left mx-auto md:mx-6">
          Our Products
        </h3>
        <p className="max-w-sm md:mt-2 text-center text-gray-600 md:text-left mx-auto md:mx-6">
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </p>
      </div>

      {/* Button */}
      <div className="mt-4 mx-auto md:mx-6 w-fit">
        <Button text="Go" style="p-3 px-6 pt-2 text-white bg-red-500 hover:bg-red-400 rounded-full" />
      </div>

      {/* Info Card */}
      <div className="w-full bg-[#EBF3EC] p-4 mt-6 rounded-[12px]">
        <div className="w-fit rounded-[8px] p-2 border border-lime-400">
          <Globe />
        </div>
        <h2 className="mt-2 font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, itaque?
        </h2>
        <p className="mt-1 text-gray-700 text-sm">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas nesciunt alias cum mollitia
          facilis debitis placeat tempore nisi animi dicta aliquid ipsam itaque quod, aspernatur
          reprehenderit magnam explicabo eligendi sequi.
        </p>

        <div className="flex justify-between mt-6">
          <div className="text-center  flex gap-2">
            <Laptop />
            <p className="font-bold text-indigo-700">Web Services</p>
          </div>
          <div className="text-center flex gap-2">
            <Bolt />
            <p className="font-bold text-indigo-700">Maintenance</p>
          </div>
          <div className="text-center flex gap-2">
            <Server />
            <p className="font-bold text-indigo-700">Cloud Service</p>
          </div>
        </div>
      </div>
    </div>

    {/* Right Section (Image) */}
    <div className="w-full md:w-1/2 h-full px-8 flex items-center justify-center mt-6 md:mt-0">
      <img src="img/product.png" alt="Product preview" className="max-w-full h-auto" />
    </div>
  </div>
 <div className="w-[94%] mx-auto flex flex-col md:flex-row p-6 gap-6 bg-amber-50">
  {/* Product 1 */}
  <div className="w-full md:w-1/3 bg-white rounded-2xl shadow-md p-4 flex flex-col items-center text-center">
    <img 
      src="img/pexels-mikhail-nilov-7988079.jpg" 
      alt="Eco-friendly Tote Bag" 
      className="w-40 h-40 object-cover rounded-full mb-4 border-4 border-amber-200" 
    />
    <h2 className="text-xl font-semibold text-gray-800">Eco-friendly Tote Bag</h2>
    <p className="text-gray-600 mt-2">
      Stylish and sustainable, this tote bag is crafted from 100% organic cotton. Ideal for your daily needs with both comfort and durability.
    </p>
  </div>

  {/* Product 2 */}
  <div className="w-full md:w-1/3 bg-white rounded-2xl shadow-md p-4 flex flex-col items-center text-center">
    <img 
      src="img/website-6721950_640.png" 
      alt="Responsive Website Template" 
      className="w-40 h-40 object-cover rounded-full mb-4 border-4 border-blue-200" 
    />
    <h2 className="text-xl font-semibold text-gray-800">Responsive Web Template</h2>
    <p className="text-gray-600 mt-2">
      A clean and modern website design, optimized for mobile, tablet, and desktop screens. Perfect for startups and portfolios.
    </p>
  </div>

  {/* Product 3 */}
  <div className="w-full md:w-1/3 bg-white rounded-2xl shadow-md p-4 flex flex-col items-center text-center">
    <img 
      src="img/cloud-3406627_640.jpg" 
      alt="Cloud Storage Service" 
      className="w-40 h-40 object-cover rounded-full mb-4 border-4 border-purple-200" 
    />
    <h2 className="text-xl font-semibold text-gray-800">Cloud Storage Plan</h2>
    <p className="text-gray-600 mt-2">
      Secure cloud-based storage with fast upload speeds and real-time syncing. Access your files from anywhere at any time.
    </p>
  </div>
</div>

  
   <Footer />
  
</>

   

  )
}

export default Product