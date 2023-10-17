import React from "react";
import about12 from "../../../assets/images/about12.jpg";

const Support = () => {
  return (
    <div className="lg:p-20 p-5">
      <div className="border flex">
        <div className="shadow-[38px_38px_12px_2px_#c9f5f8] lg:mr-20">
          {/* <video src={about12}></video> */}
          <img src={about12} alt="" />
        </div>
        <div className="m-auto border w-[40%]">
          <div className="lg:text-5xl font-bold text-black mb-4">Sandbox Brings Awesomeness</div>
          <div className="lg:text-2xl font-semibold text-black mb-4">
            We have considered our solutions to support every stage of your
            growth.
          </div>
          <div>
            <div>Marketing 100 %</div>
            <div>
              <input type="range" />
            </div>
          </div>
          <div>
            <div>Strategy 80 %</div>
            <div>
              <input type="range" />
            </div>
          </div>
          <div>
            <div>Development 85 %</div>
            <div>
              <input type="range" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
