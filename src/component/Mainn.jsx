import React from "react";
import Button from "./Button";
import New from "../assets/new.png";

const Full = () => {
  return (
    <div className="bg-white h-screen text-black  items-center  w-200 flex  flex-row  p-4 pb-6 sm:pb-8 lg:p-6 xl:p-10  sm:p-6 md:py-10 md:px-8">
      <div className="w-30 m-10 mr-16">
        <div className="text-5xl w-30 font-bold">
          I am <br />a Designer
        </div>
        <p className="text-sm p-4 pb-6 mx-auto">
          100% HTML5 tailwind templateMode <br /> by{" "}
          <span className="text-blue-500">chippycode.com</span>
        </p>
        <div>
          <Button />
        </div>
      </div>
      {/* image  section*/}
      <div className='"w-100 h-screen object-cover  sm:block lg:h-screen items-end justify-items-end'>
        <img
          src={New}
          alt=""
          className="w-60 h-screen items-center"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Full;
