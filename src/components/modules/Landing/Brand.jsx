import React from "react";
import c1 from "../../../assets/images/c1.png";
import c2 from "../../../assets/images/c2.png";
import c3 from "../../../assets/images/c3.png";
import c4 from "../../../assets/images/c4.png";
import c5 from "../../../assets/images/c5.png";
import c6 from "../../../assets/images/c6.png";
import c7 from "../../../assets/images/c7.png";
import c8 from "../../../assets/images/c8.png";

const Brand = () => {
  return (
    <div className="lg:p-20 p-5 lg:flex md:block">
      <div className="lg:w-[40%] lg:mr-20 mr-10 mb-10">
        <div className="lg:text-5xl text-2xl font-semibold mb-4 text-black">
          Trust by over 25000+ clients
        </div>
        <div className="lg:text-2xl text-lg text-black-light mb-4">
          We bring solutions to make life easier for our customers.
        </div>
      </div>
      <div className="lg:w-[60%] flex flex-wrap gap-20">
        <div>
          <img src={c1} alt="" width="120px" />
        </div>
        <div>
          <img src={c2} alt="" width="120px" />
        </div>
        <div>
          <img src={c3} alt="" width="120px" />
        </div>
        <div>
          <img src={c4} alt="" width="120px" />
        </div>
        <div>
          <img src={c5} alt="" width="120px" />
        </div>
        <div>
          <img src={c6} alt="" width="120px" />
        </div>
        <div>
          <img src={c7} alt="" width="120px" />
        </div>
        <div>
          <img src={c8} alt="" width="120px" />
        </div>
      </div>
    </div>
  );
};

export default Brand;
