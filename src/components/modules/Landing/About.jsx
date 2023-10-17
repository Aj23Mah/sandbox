import React from "react";
import value from "../../../assets/images/value.png";
import analysis from "../../../assets/images/analysis.png";
import development from "../../../assets/images/development.png";
import promotion from "../../../assets/images/promotion.png";
import target from "../../../assets/images/target.png";
import about10 from "../../../assets/images/about10.jpg";
import about11 from "../../../assets/images/about11.jpg";

const About = () => {
  return (
    <div className="lg:p-20 p-5">
      <div className="flex flex-wrap justify-center items-center lg:mb-20 mb-5">
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <img className="rounded-lg" src={about10} alt="" />
        </div>
        <div className="w-full md:w-1/2 py-8">
          <div className="text-black">
            <div className="text-3xl md:text-4xl font-semibold mb-4">
              Who Are We?
            </div>
            <div className="text-lg md:text-2xl mb-4">
              We are a digital and branding company that believes in the power
              of creative strategy and great design.
            </div>
            <div className="text-sm md:text-lg mb-4">
              Cum sociis natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in,
              egestas eget quam. Praesent commodo cursus magna, vel scelerisque
              nisl consectetur et.
            </div>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="mr-4">
                <img src={target} alt="" width="60px" />
              </div>
              <div className="text-black">
                <div className="text-lg font-semibold mb-1">Our Mission</div>
                <div className="text-sm md:text-lg">
                  Dapibus eu leo quam ornare curabitur blandit tempus.
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="mr-4">
                <img src={value} alt="" width="60px" />
              </div>
              <div className="text-black">
                <div className="text-lg font-semibold mb-1">Our Values</div>
                <div className="text-sm md:text-lg">
                  Aenean lacinia bibendum nulla sed consectetur.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center items-center lg:mb-20 mb-5">
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <img className="rounded-lg" src={about11} alt="" />
        </div>
        <div className="w-full md:w-1/2 py-8">
          <div className="text-black">
            <div className="text-3xl md:text-4xl font-semibold mb-4">
              What We Do?
            </div>
            <div className="text-lg md:text-2xl mb-4">
              The full service we are offering is specifically designed to meet
              your business needs and projects.
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="flex mb-2 w-full md:w-[45%] md:mr-2">
              <div className="mr-4">
                <img src={promotion} alt="" width="60px" />
              </div>
              <div className="text-black">
                <div className="text-lg md:text-xl font-semibold mb-1">
                  Marketing
                </div>
                <div className="text-md md:text-lg">
                  Nulla vitae elit libero pharetra augue dapibus.
                </div>
              </div>
            </div>
            <div className="flex mb-2 w-full md:w-[45%] md:mr-2">
              <div className="mr-4">
                <img src={target} alt="" width="60px" />
              </div>
              <div className="text-black">
                <div className="text-lg md:text-xl font-semibold mb-1">
                  Strategy
                </div>
                <div className="text-md md:text-lg">
                  Vivamus sagittis lacus augue laoreet vel.
                </div>
              </div>
            </div>
            <div className="flex mb-2 w-full md:w-[45%] md:mr-2">
              <div className="mr-4">
                <img src={development} alt="" width="60px" />
              </div>
              <div className="text-black">
                <div className="text-lg md:text-xl font-semibold mb-1">
                  Development
                </div>
                <div className="text-md md:text-lg">
                  Cras mattis consectetur purus sit amet.
                </div>
              </div>
            </div>
            <div className="flex w-full md:w-[45%]">
              <div className="mr-4">
                <img src={analysis} alt="" width="60px" />
              </div>
              <div className="text-black">
                <div className="text-lg md:text-xl font-semibold mb-1">
                  Data Analysis
                </div>
                <div className="text-md md:text-lg">
                  Aenean lacinia bibendum nulla sed consectetur.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
