import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Button from './button';
import { NavLink } from 'react-router-dom';

const Nav: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const getStyle=({isActive}:{isActive:boolean})=>{
     return{
       color:isActive?"red":" "

     }
  }
  return (
    <nav className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="pt-2">
          <NavLink to="/"> <img src="img/logo.svg" alt="" /> </NavLink>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <NavLink to="/pricing" style={getStyle} className="hover:text-gray-500 transition-colors">Pricing</NavLink>
          <NavLink to="/product" style={getStyle} className="hover:text-gray-500 transition-colors">Product</NavLink>
          <NavLink to="/aboutus" style={getStyle} className="hover:text-gray-500 transition-colors">About us</NavLink>
          <NavLink to=" Carrers" style={getStyle} className="hover:text-gray-500 transition-colors">Careers</NavLink>
          <NavLink to=" Community" style={getStyle} className="hover:text-gray-500 transition-colors">Community</NavLink>
          <NavLink to="/login" style={getStyle} className="hover:text-gray-500 transition-colors">Login</NavLink>
        </div>
        


        <Button text='Get Started' style={"p-3 px-6 pt-2 text-white bg-red-500 hover:bg-red-400 "} />
        {/* Mobile menu button */}
        <button
          className="md:hidden p-2"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg rounded-lg mt-2 mx-6 p-6 z-50">
          <div className="flex flex-col space-y-4">
            <a href="#" className="hover:text-gray-500 transition-colors py-2">Pricing</a>
            <NavLink to="/product" className="hover:text-gray-500 transition-colors py-2">Product</NavLink>
            <a href="#" className="hover:text-gray-500 transition-colors py-2">About us</a>
            <a href="#" className="hover:text-gray-500 transition-colors py-2">Careers</a>
            <a href="#" className="hover:text-gray-500 transition-colors py-2">Community</a>
            <Button text='Get Started' style={"p-3 px-6 pt-2 text-white bg-red-500 hover:bg-red-400 "} />
          </div>
        </div>
      )}
    </nav>

  )
}

export default Nav