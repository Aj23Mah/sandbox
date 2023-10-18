import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { Switch } from "@material-tailwind/react";

const Offer = () => {
  return (
    <div className="lg:p-20 p-5">
      <div class="flex flex-wrap">
        <div class="w-full md:w-[40%] flex flex-col justify-center text-gray">
          <div className="lg:text-5xl font-semibold lg:mb-6">
            We offer great and premium prices.
          </div>
          <div className="lg:text-xl font-semibold lg:mb-6">
            Enjoy a free 30-day trial and experience the full service. No credit
            card required!
          </div>
          <div>
            <button className="bg-primary-dark text-white font-medium lg:px-5 px-2 lg:py-3 py-2 lg:text-lg text-sm rounded-3xl mr-4">
              See All Prices
            </button>
          </div>
        </div>

        <div class="w-full md:w-[60%]">
          <div className="flex items-center justify-end text-xl mb-4 text-gray">
            <div className="mr-2">Monthly</div>
            <div className="mr-2">
              <Switch
                id="custom-switch-component"
                ripple={false}
                className="h-full w-full checked:bg-[#2ec946]"
                containerProps={{
                  className: "w-11 h-6",
                }}
                circleProps={{
                  className: "before:hidden left-0.5-none",
                }}
              />
            </div>
            <div className="flex items-center">
              <div className="mr-2">Yearly</div>
              <div className="mr-2">(Save 30%)</div>
            </div>
          </div>

          <div className="flex flex-wrap">
            <div className="m-auto lg:p-26 md:p-20 p-10 text-gray shadow-2xl mb-4">
              <div className="flex font-semibold mb-2">
                <div className="lg:text-xl">$</div>
                <div className="lg:text-4xl">19</div>
                <div className="lg:text-xl self-end">/mo</div>
              </div>
              <div className="lg:text-2xl font-semibold mb-8">Premium Plan</div>
              <div className="text-xl flex items-center mb-2">
                <div className="mr-2 text-primary-dark">
                  <AiFillCheckCircle />
                </div>
                <div className="font-semibold mr-1">5</div> <div>Projects</div>
              </div>
              <div className="text-xl flex items-center mb-2">
                <div className="mr-2 text-primary-dark">
                  <AiFillCheckCircle />
                </div>
                <div className="font-semibold mr-1">100k</div>{" "}
                <div>API Access</div>
              </div>
              <div className="text-xl flex items-center mb-2">
                <div className="mr-2 text-primary-dark">
                  <AiFillCheckCircle />
                </div>
                <div className="font-semibold mr-1">200MB</div>{" "}
                <div>Storage</div>
              </div>
              <div className="text-xl flex items-center mb-2">
                <div className="mr-2 text-primary-dark">
                  <AiFillCheckCircle />
                </div>
                <div className="font-semibold mr-1">Weekly</div>{" "}
                <div>Reports</div>
              </div>
              <div className="text-xl flex items-center mb-2">
                <div className="mr-2 text-primary-dark">
                  <AiFillCheckCircle />
                </div>
                <div className="font-semibold mr-1">7/24</div>{" "}
                <div>Support</div>
              </div>
              <div className="my-8">
                <button className="bg-primary-dark text-white font-medium lg:px-5 px-2 lg:py-3 py-2 lg:text-lg text-sm rounded-3xl mr-4">
                  Choose Plan
                </button>
              </div>
            </div>

            <div className="m-auto lg:p-26 md:p-20 p-10 text-gray shadow-2xl mb-4">
              <div className="flex font-semibold mb-2">
                <div className="lg:text-xl">$</div>
                <div className="lg:text-4xl">49</div>
                <div className="lg:text-xl self-end">/mo</div>
              </div>
              <div className="lg:text-2xl font-semibold mb-8">
                Coporate Plan
              </div>
              <div className="text-xl flex items-center mb-2">
                <div className="mr-2 text-primary-dark">
                  <AiFillCheckCircle />
                </div>
                <div className="font-semibold mr-1">20</div> <div>Projects</div>
              </div>
              <div className="text-xl flex items-center mb-2">
                <div className="mr-2 text-primary-dark">
                  <AiFillCheckCircle />
                </div>
                <div className="font-semibold mr-1">300k</div>{" "}
                <div>API Access</div>
              </div>
              <div className="text-xl flex items-center mb-2">
                <div className="mr-2 text-primary-dark">
                  <AiFillCheckCircle />
                </div>
                <div className="font-semibold mr-1">500MB</div>{" "}
                <div>Storage</div>
              </div>
              <div className="text-xl flex items-center mb-2">
                <div className="mr-2 text-primary-dark">
                  <AiFillCheckCircle />
                </div>
                <div className="font-semibold mr-1">Weekly</div>{" "}
                <div>Reports</div>
              </div>
              <div className="text-xl flex items-center mb-2">
                <div className="mr-2 text-primary-dark">
                  <AiFillCheckCircle />
                </div>
                <div className="font-semibold mr-1">7/24</div>{" "}
                <div>Support</div>
              </div>
              <div className="my-8">
                <button className="bg-primary-dark text-white font-medium lg:px-5 px-2 lg:py-3 py-2 lg:text-lg text-sm rounded-3xl mr-4">
                  Choose Plan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
