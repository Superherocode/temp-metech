import React from "react";

const ContactUs = () => {
  return (
    <div>
      <div className="flex flex-col items-center pb-[184px] mt-28">
        <h1 className="text-[32px] font-semibold mb-12">Contact Us</h1>
        <div className="flex flex-col items-center bg-white rounded-[40px] w-[876px] py-16 px-6 max-[1024px]:w-[95%] sm:px-16">
          <div className="flex flex-wrap justify-between w-full mb-6">
            <input
              className="border-2 border-[#B1B1B1] max-[910px]:w-full max-[910px]:mb-6 w-[360px] h-[52px] rounded-2xl px-4"
              type="text"
              placeholder="Your name*"
            />
            <input
              className="border-2 border-[#B1B1B1] max-[910px]:w-full w-[360px] h-[52px] rounded-2xl px-4"
              type="text"
              placeholder="Your email*"
            />
          </div>
          <select
            className="border-2 border-[#B1B1B1] w-full h-[52px] rounded-2xl mb-6 px-4"
            name=""
            id=""
            defaultValue=""
          >
            <option value="" disabled>
              Subject*
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <textarea
            className="border-2 border-dashed border-[#B1B1B1] rounded-2xl w-full mb-8 px-4 py-4"
            name="text"
            id="textarea"
            cols="8"
            rows="8"
            placeholder="Message"
          ></textarea>
          <button className="bg-[#111111] hover:bg-slate-800 text-white font-bold py-2 px-4 rounded-full w-[132px] h-[52px]">
            <span>Send </span>
            <i className="fa-regular fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
