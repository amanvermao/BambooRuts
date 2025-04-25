import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import logo from '../assets/logo.png'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 w-full  text-white flex items-center justify-center gap-24 z-50">
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} className="h-[170px]" alt="Logo" />
      </div>

      {/* Desktop Menu */}
      <nav className="hidden text-white md:flex space-x-8 font-semibold">
        <a href="#" className="hover:text-green-800">Home</a>
        <a href="#" className="hover:text-green-800">About</a>
        <a href="#" className="hover:text-green-800">Services</a>
        <a href="#" className="hover:text-green-800">Blog</a>
        <a href="#" className="hover:text-green-800">Contact</a>
        <a href="#" className="hover:text-green-800">Work With Us</a>
        <a href="#" className="hover:text-green-800">Brochure</a>
      </nav>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
          {menuOpen ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {menuOpen && (
        <div className="absolute top-[90px] left-0 w-full bg-[#353535] flex flex-col items-center space-y-6 py-6 shadow-md md:hidden">
          <a href="#" className="hover:text-green-800" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#" className="hover:text-green-800" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#" className="hover:text-green-800" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#" className="hover:text-green-800" onClick={() => setMenuOpen(false)}>Blog</a>
          <a href="#" className="hover:text-green-800" onClick={() => setMenuOpen(false)}>Contact</a>
          <a href="#" className="hover:text-green-800" onClick={() => setMenuOpen(false)}>Work With Us</a>
          <a href="#" className="hover:text-green-800" onClick={() => setMenuOpen(false)}>Brochure</a>
        </div>
      )}
    </header>
  );
}
