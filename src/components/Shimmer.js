import React from "react";

const Shimmer = () => {
  return (
    <div className="flex flex-wrap">
      {Array(12)
        .fill([])
        .map((e, index) => (
          <div key={index} className=" m-2 px-3 w-[19rem] h-[22rem]">
            <div className="w-full h-1/2 border rounded-xl bg-gray-300 custom-linear-gradient animate-pulse"></div>
            <div
              className="w-[90%] h-[10%] mt-3 border rounded-full
             bg-gray-300 custom-linear-gradient animate-pulse "
            ></div>
            <div className="w-[70%] h-[7%]  mt-3 border rounded-full bg-gray-300 custom-linear-gradient animate-pulse"></div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
