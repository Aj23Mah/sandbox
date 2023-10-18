import React from "react";
import co3 from "../../../assets/images/co3.png"
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="lg:p-20 p-5 h-auto w-full"> 
      <div className="bg-primary rounded-xl flex flex-wrap justify-between items-center mx-auto mt-10 md:px-12 px-4 md:justify-center md:flex-row sm:justify-center">
        <div className="text-black mb-14 lg:w-1/2">
          <div className="max-w-xl text-center lg:text-5xl lg:text-left md:text-4xl sm:text-3xl font-semibold mb-8">Crafting project specific solutions with expertise. </div>
          <div className="max-w-xl text-center lg:text-left lg:max-w-md md:text-xl sm:text-sm mb-8 text-black-light">
            We're a company that focuses on establishing long-term relationships
            with customers.
          </div>
          <div className="flex justify-center lg:justify-start">
            <motion.button  whileHover={{ scale: 1.1 }} className="bg-primary-dark text-white font-medium lg:px-5 px-2 lg:py-3 py-2 lg:text-lg text-sm rounded-3xl mr-4">Explore Now</motion.button>
            <motion.button  whileHover={{ scale: 1.1 }} className="border border-primary-dark text-primary-dark font-medium lg:px-5 px-2 lg:py-3 py-2 lg:text-lg text-sm rounded-3xl hover:bg-primary-dark hover:text-white-light">Contact Us</motion.button>
          </div>
        </div>
        <div className="lg:w-1/2">
          <img className="ml-auto" src={co3} height='100%' width='100%' alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;