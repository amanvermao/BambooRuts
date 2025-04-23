import React from 'react'
import { Instagram, Twitter, Facebook } from '@mui/icons-material';
import logo from '../assets/logo.png';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
   <>
    {/* new footer */}
    <footer className="bg-black text-white py-12 px-6 md:px-20">
    <div className="grid md:grid-cols-5 gap-10">
  {/* Logo and Description - 1st Column */}
  <div className="md:col-span-1">
    <div className="flex items-center mb-4">
      <img src={logo} alt="Logo" className="h-50 object-contain" />       
    </div>
    <p className="text-gray-400 max-w-xs">
      Sem eget quam maecenas lacinia at id cursus scelerisque duis justo.
    </p>
    <div className="flex gap-4 mt-6">
      <div className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center">
        <InstagramIcon />
      </div>
      <div className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center">
        <EmailIcon />
      </div>
      <div className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center">
        <TwitterIcon />
      </div>
    </div>
  </div>

  {/* Empty Column - 2nd Column */}
  <div></div>

  {/* Services - 3rd Column */}
  <div>
    <h3 className="text-lg font-semibold mb-4">Services</h3>
    <ul className="space-y-2 text-gray-400">
      <li>Website Development</li>
      <li>Digital Strategy</li>
      <li>App Development</li>
      <li>Software Development</li>
      <li>Technology Consulting</li>
    </ul>
  </div>

  {/* Support - 4th Column */}
  <div>
    <h3 className="text-lg font-semibold mb-4">Support</h3>
    <ul className="space-y-2 text-gray-400">
      <li>Contact us</li>
      <li>Faqs</li>
      <li className="text-white">Carrier</li>
    </ul>
  </div>

  {/* Legal - 5th Column */}
  <div>
    <h3 className="text-lg font-semibold mb-4">Legal</h3>
    <ul className="space-y-2 text-gray-400">
      <li>Terms & Conditions</li>
      <li>Privacy Policy</li>
    </ul>
  </div>
</div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
        ©2025 Bamboo ruts. All Rights Reserved.
      </div>
    </footer>
    
   </>
  )
}

export default Footer
