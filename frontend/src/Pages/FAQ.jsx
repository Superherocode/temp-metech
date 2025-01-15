import { ChevronDown, ChevronRight } from "lucide-react";
import React from "react";

const FAQ = () => {
  return (
    <div>
      <div className="flex flex-col items-center pb-[184px] mt-28">
        <h1 className="text-[32px] font-semibold mb-12 text-center">
          Frequently Asked Question
        </h1>
        <div className="bg-white rounded-2xl p-4 w-[876px] mb-6 max-[1024px]:w-[90%]">
          <div className="flex justify-between mb-3">
            <h3 className="font-semibold">1. Why do you need a Temp Mail</h3>
            <ChevronDown/>
          </div>
          <p className="text-justify px-6">
            When you're registering on a resource that requires an email from a
            specific country, temporary email will help you out. Online shops
            usually require you to enter an email address. This is a perfect
            place to use a temporary email.
          </p>
        </div>
        <div className="bg-white rounded-2xl px-4 py-[14px] w-[876px] mb-6 max-[1024px]:w-[90%]">
          <div className="flex justify-between">
            <h3 className="font-semibold">2. Why do you need a Temp Mail</h3>
            <ChevronRight/>
          </div>
        </div>
        <div className="bg-white rounded-2xl px-4 py-[14px] w-[876px] mb-6 max-[1024px]:w-[90%]">
          <div className="flex justify-between">
            <h3 className="font-semibold">3. Why do you need a Temp Mail</h3>
            <ChevronRight/>
          </div>
        </div>
        <div className="bg-white rounded-2xl px-4 py-[14px] w-[876px] mb-6 max-[1024px]:w-[90%]">
          <div className="flex justify-between">
            <h3 className="font-semibold">4. Why do you need a Temp Mail</h3>
            <ChevronRight/>
          </div>
        </div>
        <div className="bg-white rounded-2xl px-4 py-[14px] w-[876px] mb-6 max-[1024px]:w-[90%]">
          <div className="flex justify-between">
            <h3 className="font-semibold">5. Why do you need a Temp Mail</h3>
            <ChevronRight/>
          </div>
        </div>
        <div className="bg-white rounded-2xl px-4 py-[14px] w-[876px] max-[1024px]:w-[90%]">
          <div className="flex justify-between">
            <h3 className="font-semibold">6. Why do you need a Temp Mail</h3>
            <ChevronRight/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
