import React from "react";
import review from "../../../assets/images/review.png"
import complete from "../../../assets/images/complete.png"
import expert from "../../../assets/images/expert.png"

import t1 from "../../../assets/images/t1.jpg"
import t2 from "../../../assets/images/t2.jpg"
import t3 from "../../../assets/images/t3.jpg"
import t4 from "../../../assets/images/t4.jpg"

const Team = () => {
  return (
    <div className="lg:p-20 p-5">
      <div className="grid lg:grid-cols-5 grid-cols-2 place-items-center lg:mb-14 mb-10">
        <div className="col-span-2 lg:mr-6 mr-4">
          <div className="lg:text-5xl text-3xl font-semibold text-black mb-4">
            We are proud of our creative team
          </div>
          <div className="lg:text-2xl text-lg font-medium text-black mb-4">
            Just sit back and relax while we take care of your business needs.
          </div>
        </div>
        <div className="grid place-items-center col-span-1 text-black lg:mr-4 lg:mb-5 mb-4 mr-2">
          <div className="lg:mb-4 mb-2">
            <img src={review} alt="" width="80px" />
          </div>
          <div className="lg:mb-4 mb-2 lg:text-5xl font-bold text-xl">3472</div>
          <div className="lg:text-xl text-lg">Happy Customers</div>
        </div>
        <div className="grid place-items-center col-span-1 text-black lg:mr-4 lg:mb-5 mb-4 mr-2">
          <div className="lg:mb-4 mb-2">
            <img src={complete} alt="" width="80px" />
          </div>
          <div className="lg:mb-4 mb-2 lg:text-5xl font-bold text-xl">7518</div>
          <div className="lg:text-xl text-lg">Completed Projects</div>
        </div>
        <div className="grid place-items-center col-span-1 text-black lg:mr-4 lg:mb-5 mb-4 mr-2">
          <div className="lg:mb-4 mb-2">
            <img src={expert} alt="" width="80px" />
          </div>
          <div className="lg:mb-4 mb-2 lg:text-5xl font-bold text-xl">2184</div>
          <div className="lg:text-xl text-lg">Expert Employees</div>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 place-items-center">
        <div className="rounded-2xl overflow-hidden shadow-[14px_14px_2px_1px_#EEEFF3] mr-7 mb-7">
          <div>
            <img src={t1} alt="" />
          </div>
          <div className="p-6">
          <div className="text-xl font-semibold mb-2">Coriss Ambady</div>
          <div className="text-lg">Financial Analyst</div>
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-[14px_14px_2px_1px_#EEEFF3] mr-7 mb-7">
          <div>
            <img src={t2} alt="" />
          </div>
          <div className="p-6">
          <div className="text-xl font-semibold mb-2">Cory Zamora</div>
          <div className="text-lg">Marketing Specialist</div>
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-[14px_14px_2px_1px_#EEEFF3] mr-7 mb-7">
          <div>
            <img src={t3} alt="" />
          </div>
          <div className="p-6">
          <div className="text-xl font-semibold mb-2">Nikolas Brooten</div>
          <div className="text-lg">Sales Manager</div>
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-[14px_14px_2px_1px_#EEEFF3] mr-7 mb-7">
          <div>
            <img src={t4} alt="" />
          </div>
          <div className="p-6">
          <div className="text-xl font-semibold mb-2">Jackie Sanders</div>
          <div className="text-lg">Investment Planner</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
