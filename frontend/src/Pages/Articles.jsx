import React from "react";
import { assets } from "../assets/asset";
import { ArrowRightCircle } from "lucide-react";

const Articles = () => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="w-[990px] mt-32 max-[1024px]:w-[95%]">
          <div className="flex justify-end items-center mb-9">
            <p className="mr-2 font-semibold">GET TEMP MAIL NOW</p>
            <ArrowRightCircle />
          </div>
          <div className="flex flex-col items-center mb-[184px]">
            <div className="flex flex-col w-[800px] text-center rounded-[40px] bg-white max-[1024px]:w-[100%]">
              <img
                className="object-cover rounded-t-[40px]"
                src={assets.image3}
                alt="TEMP MAIL"
              />
              <div className="mt-5 mb-[35px]">
                <h2 className="text-[24px] font-semibold">
                  TEMP MAIL- BEST SPAM PROTECTION
                </h2>
                <p className="font-normal">Admin July 28th, 2023</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 w-full mt-6 justify-center">
              <div className="flex flex-col w-[314px] rounded-[24px] bg-white">
                <img
                  className="object-cover rounded-t-[24px]"
                  src={assets.image4}
                  alt="TEMP MAIL"
                />
                <div className="mt-5 mb-[23px] pl-5 pr-4">
                  <h2 className="text-[24px] font-semibold leading-[30px]">
                    TEMP MAIL- BEST SPAM PROTECTION
                  </h2>
                  <p className="font-normal">Admin July 28th, 2023</p>
                </div>
              </div>
              <div className="flex flex-col w-[314px] rounded-[24px] bg-white">
                <img
                  className="object-cover rounded-t-[24px]"
                  src={assets.image4}
                  alt="TEMP MAIL"
                />
                <div className="mt-5 mb-[23px] pl-5 pr-4">
                  <h2 className="text-[24px] font-semibold leading-[30px]">
                    TEMP MAIL- BEST SPAM PROTECTION
                  </h2>
                  <p className="font-normal">Admin July 28th, 2023</p>
                </div>
              </div>
              <div className="flex flex-col w-[314px] rounded-[24px] bg-white">
                <img
                  className="object-cover rounded-t-[24px]"
                  src={assets.image4}
                  alt="TEMP MAIL"
                />
                <div className="mt-5 mb-[23px] pl-5 pr-4">
                  <h2 className="text-[24px] font-semibold leading-[30px]">
                    TEMP MAIL- BEST SPAM PROTECTION
                  </h2>
                  <p className="font-normal">Admin July 28th, 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
