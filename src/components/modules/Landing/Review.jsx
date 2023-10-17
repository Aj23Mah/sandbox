import React from "react";
import co2 from "../../../assets/images/co2.png"
import {LiaStarSolid} from "react-icons/lia"

const Review = () => {
  return (
    <div className="lg:p-20 p-5">
      <div className="relative">
        <div className="absolute bottom-0 left-32 hidden lg:block"><img src={co2} alt="" /></div>

        <div className="flex lg:h-[520px] bg-primary rounded-2xl">
          <div className="w-[30%] lg:block hidden"></div>

          <div className="w-full lg:w-[70%] flex flex-col items-center justify-center lg:p-40 md:p-20 p-5">
           <div className="flex mb-4 text-[#ffcf4c]">
            <div><LiaStarSolid size={18} /></div>
            <div><LiaStarSolid size={18} /></div>
            <div><LiaStarSolid size={18} /></div>
            <div><LiaStarSolid size={18} /></div>
            <div><LiaStarSolid size={18} /></div>
           </div>
            <div className="text-black-light mb-4 lg:text-2xl text-center font-semibold">
              “Fusce dapibus tellus ac cursus commodo, tortor mauris condimentum
              nibh ut fermentum massa, justo sit amet vivamus sagittis lacus vel
              augue laoreet rutrum faucibus dolor auctor. Cras mattis
              consectetur purus sit amet fermentum. Aenean lacinia bibendum
              nulla sed”
            </div>
            <div className="text-black-dark mb-4 lg:text-2xl text-center font-semibold">Coriss Ambady</div>
            <div className="text-black-light mb-4 lg:text-lg text-center font-medium">FINANCIAL ANALYST</div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Review;
