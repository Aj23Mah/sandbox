import React from "react";
import { FaRegCopyright } from "react-icons/fa";
import {BsYoutube, BsTwitter, BsInstagram} from "react-icons/bs"
import {FaFacebookF} from "react-icons/fa"
import {BiBasketball} from "react-icons/bi"
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="lg:px-20 px-5 bg-white text-black-dark">
      <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2 border-b border-black-light">
        <div className="mb-5 col-span-2">
          <div className="text-3xl font-bold mb-5">Join the Community</div>
          <div className="text-xl mb-5 text-black-light">
            Lets make something great together. We are trusted by over 5000+
            clients. Join them by using our services and grow your business.
          </div>
          <div>
            <motion.button whileHover={{ scale: 1.1 }} className="bg-primary-dark text-white px-7 py-3 rounded-3xl text-xl font-semibold">
              Join Us
            </motion.button>
          </div>
        </div>

        <div className="mb-5 col-span-1">
          <div className="text-xl font-bold mb-3">Need Help?</div>
          <div className="text-lg text-black-light">Support</div>
          <div className="text-lg text-black-light">Get Started</div>
          <div className="text-lg text-black-light">Terms of Use</div>
          <div className="text-lg text-black-light">Privacy Policy</div>
        </div>

        <div className="mb-5 col-span-1">
          <div className="text-xl font-bold mb-3">Learn More</div>
          <div className="text-lg text-black-light">About Us</div>
          <div className="text-lg text-black-light">Our Story</div>
          <div className="text-lg text-black-light">Projects</div>
          <div className="text-lg text-black-light">Features</div>
        </div>

        <div className="mb-5 col-span-1">
          <div className="text-xl font-bold mb-3">Features</div>
          <div className="text-lg text-black-light">
            Moonshine St. 14/05 Light City, London, United Kingdom
          </div>
          <div className="text-lg text-black-light">
            info@email.com <br />
            00 (123) 456 78 90
          </div>
        </div>
      </div>
      <div className="w-full h-auto py-6 text-black-light font-semibold flex items-center justify-between flex-col sm:flex-row">
        <div className="flex items-center">
          <div className="mr-1">
            <FaRegCopyright />
          </div>
          <div>2022 Sandbox. All rights reserved.</div>
        </div>
        <div className="flex text-xl py-4">
          <div className='ml-4 text-[#1DA1F2]'><BsTwitter /></div>
          <div className='ml-4 text-[#0863F7]'><FaFacebookF /></div>
          <div className='ml-4 text-[#CD2E84]'><BiBasketball /></div>
          <div className='ml-4 text-[#CD2E84]'><BsInstagram /></div>
          <div className='ml-4 text-[#FF0000]'><BsYoutube /></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
