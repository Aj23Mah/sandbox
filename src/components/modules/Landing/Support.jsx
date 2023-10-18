import React from "react";
import about12 from "../../../assets/images/about12.jpg";

import { Slider } from "@material-tailwind/react";

const Support = () => {
  return (
    <div className="lg:p-20 p-5">
      <div className="grid lg:grid-cols-2 grid-cols-1 place-items-center mb-6">
        <div className="lg:shadow-[38px_38px_12px_2px_#c9f5f8] mb-6">
          {/* <video src={about12}></video> */}
          <img src={about12} alt="" />
        </div>
        <div className="m-auto w-[60%] text-black">
          <div className="lg:text-5xl font-bold mb-4">
            Sandbox Brings Awesomeness
          </div>
          <div className="lg:text-2xl font-semibold mb-4">
            We have considered our solutions to support every stage of your
            growth.
          </div>
          <div>
            <div className="flex justify-between p-1 text-lg">
              <div>Marketing</div>
              <div>100 %</div>
            </div>

            <div className="flex w-full flex-col gap-8 mb-4">
              <Slider className="text-blue" defaultValue={100} />
            </div>
          </div>
          <div>
            <div className="flex justify-between p-1 text-lg">
              <div>Strategy</div>
              <div>80 %</div>
            </div>

            <div className="flex w-full flex-col gap-8 mb-4">
              <Slider className="text-blue" defaultValue={80} />
            </div>
          </div>
          <div>
            <div className="flex justify-between p-1 text-lg">
              <div>Development</div>
              <div>85 %</div>
            </div>

            <div className="flex w-full flex-col gap-8 mb-4">
              <Slider className="text-blue" defaultValue={85} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
