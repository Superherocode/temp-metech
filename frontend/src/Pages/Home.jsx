import React from "react";
import {
  Plus,
  Copy,
  RefreshCw,
  ChevronRight,
  Trash2,
  RotateCw,
  MoreVertical,
  ChevronLeft,
  Undo2,
} from "lucide-react"; // React icons
import { assets } from "../assets/asset";
import PopularArticles from "../Components/PopularArticles";

const Home = () => {
  return (
    <div className="flex flex-col items-center mt-10">
      {/* Section 1: Form */}
      <div className="bg-white w-[940px] mt-16 rounded-[40px] sm:px-24 max-[1024px]:w-[95%] max-[650px]:px-10">
        <div className="flex items-center mb-10 mt-16">
          <div className="mr-28 max-[800px]:hidden text-center">
            <img src={assets.image1} alt="Logo" />
          </div>
          <div className="max-[800px]:w-full max-[800px]:text-center">
            <h1 className="font-bold text-[32px]">Create your Temp Email</h1>
          </div>
        </div>
        <div className="flex mb-8 max-[748px]:flex-col max-[748px]:gap-3 max-[748px]:items-center">
          <input
            className="pl-4 font-semibold text-[#111111] border-[#B1B1B1] border-2 rounded-xl md:w-96 h-12 mr-4 w-full"
            type="text"
            placeholder="Enter email"
          />
          <select
            className="pl-4 font-semibold text-[#111111] border-[#B1B1B1] border-2 rounded-xl md:w-60 h-12 mr-4 w-full"
            defaultValue="@rover.com"
          >
            <option value="@rover.com">@rover.com</option>
          </select>
          <div className="font-semibold text-[#111111] border-dashed border-[#B1B1B1] border-2 rounded-xl md:w-24 h-12 content-center text-center mr-4 w-[40%]">
            09:58
          </div>
        </div>
        <div className="flex justify-between mb-20 max-[748px]:flex-col max-[748px]:items-center max-[748px]:gap-4">
          <div className="flex items-center gap-4 max-[748px]:flex-col max-[748px]:items-center max-[748px]:gap-4">
            <button className="bg-[#111111] hover:bg-slate-800 text-white font-bold py-2 px-4 rounded-full w-64 h-12 flex items-center justify-center gap-2">
              <Plus />
              <span>Generate new e-mail</span>
            </button>
            <button className="border-[#B1B1B1] border-2 bg-white hover:bg-gray-500 text-black font-bold py-2 px-4 rounded-full w-32 h-12 flex items-center justify-center gap-2">
              <Copy />
              <span>Copy</span>
            </button>
          </div>

          <div>
            <button className="bg-white hover:bg-gray-500 text-black font-bold py-2 px-4 rounded-full flex items-center gap-2">
              <RefreshCw />
              <span>Refresh</span>
            </button>
          </div>
        </div>
      </div>

      {/* Section 2: Table */}
      <div className="flex justify-center items-center bg-white w-[940px] mt-16 rounded-[40px] px-5 max-[1024px]:w-[95%]">
        <table className="w-full table-fixed mt-8 mb-12">
          {/* Table Head */}
          <thead className="mb-6">
            <tr className="font-bold text-[24px] mb-5 max-[500px]:text-center">
              <td className="pl-5">
                <div className="flex items-center justify-center">
                  <span>Sender</span>
                  <ChevronRight className="ml-2 hidden max-[500px]:inline" />
                </div>
              </td>

              <td className="min-[500px]:flex min-[500px]:items-center max-[500px]:hidden">
                <p className="mr-4">Subject</p>
                <ChevronRight className="ml-2 hidden max-[768px]:inline" />
              </td>
              <td className="text-center max-[768px]:hidden">
                <div className="flex items-center justify-center">
                  <p className="mr-3">Detail</p>
                  <ChevronRight />
                </div>
              </td>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="h-12 font-medium text-[#5D6165]">
            {/* Table Row 1 */}
            <tr className="bg-white hover:bg-[#D9F0FF] cursor-pointer rounded-full h-12">
              <td className="max-[500px]:text-center">
                thanhdungqb91@gmail.com
              </td>
              <td className="max-[500px]:hidden">Tạm ứng 25/07</td>
              <td className="max-[748px]:hidden"></td>
            </tr>

            {/* Table Row 2 */}
            <tr className="bg-white hover:bg-[#D9F0FF] cursor-pointer rounded-full h-12">
              <td className="max-[500px]:text-center">
                thanhdungqb91@gmail.com
              </td>
              <td className="max-[500px]:hidden">Tạm ứng 25/07</td>
              <td className="max-[748px]:hidden"></td>
            </tr>

            {/* Table Row 3 */}
            <tr className="bg-white hover:bg-[#D9F0FF] cursor-pointer rounded-full h-12">
              <td className="max-[500px]:text-center">
                thanhdungqb91@gmail.com
              </td>
              <td className="max-[500px]:hidden">Tạm ứng 25/07</td>
              <td className="max-[748px]:hidden"></td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Section 3: Inbox Email */}
      <div className="bg-white w-[940px] mt-16 rounded-[40px] max-[1024px]:w-[95%]">
        {/* Header */}
        <div className="flex justify-between mt-5 px-10 pb-8 border-b-2">
          <div className="flex items-center">
            <ChevronLeft className="text-gray-700" />
            <p className="text-[24px] font-bold ml-2 mr-14">Inbox</p>
            <RotateCw className="text-gray-700" />
          </div>
          <div className="flex items-center">
            <Trash2 className="text-gray-700" />
            <Undo2 className="text-gray-800 mx-4" />
            <MoreVertical className="text-gray-700" />
          </div>
        </div>

        {/* Body */}
        <div className="flex">
          {/* Email List */}
          <div className="flex flex-col mb-10 max-[500px]:w-full">
            {Array(3)
              .fill(null)
              .map((_, index) => (
                <div
                  key={index}
                  className="flex flex-col py-5 max-[500px]:pl-10 max-[500px]:pr-3 px-14 w-full border-b-2 hover:bg-[#D9F0FF] cursor-pointer min-[500px]:w-56"
                >
                  <p className="text-[#5D6165] text-[14px] leading-5">
                    minatran@gmail.com
                  </p>
                  <p className="font-semibold text-black my-1">Tạm ứng 25/07</p>
                  <div className="flex justify-between text-[#5D6165] text-[14px] leading-5">
                    <p>Dear anh Dũng</p>
                    <p>07:55</p>
                  </div>
                </div>
              ))}
          </div>

          {/* Email Detail */}
          <div className="border-l-2 w-full max-[500px]:hidden">
            <div className="py-4 px-2 sm:pl-6 border-b-2 md:pr-10">
              <div className="flex justify-between max-[748px]:flex-col max-[748px]:gap-4">
                <p>minatran@gmail.com</p>
                <p>Friday 25, July 2023 at 07:55 am</p>
              </div>
              <div>
                <p className="font-semibold text-black">Tạm ứng 25/07</p>
              </div>
            </div>
            <div className="pt-4 pl-6">
              <p>Dear anh Dũng</p>
              <p>
                Em viết mail này xin tạm ứng số tiền đi công tác Hà Nội
                25/07/2023 ạ
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3: Articles */}
      <div class="text-center w-[796px] mt-24 max-[1024px]:w-[85%]">
        <h1 class="font-bold text-[32px] mb-5">What is Temp Email?</h1>
        <p>
          There are numerous temporary email services on the web. Temp Mail is
          one of our favorites, but it’s also worth considering 10 Minute Mail.
          This platform provides temporary dedicated email addresses which are
          deleted after a preset time period, making it a great option for those
          who are concerned about spam.
        </p>
      </div>
      <div className="w-[932px] max-[1024px]:w-[95%] mt-16">
        <h1 className="font-bold text-[32px] mb-8 text-center">
          Popular Articles
        </h1>
        <PopularArticles />
      </div>
      {/* Section 3: Why? */}
      <div className="mt-24 mb-[184px]">
        <div className="mx-auto mb-6 bg-white rounded-[40px] md:w-[826px] max-[500px]:px-3 text-center w-[95%]">
          <h1 className="font-semibold text-[32px] max-[500px]:px-3 pt-6 mb-2">
            Why you need an anonymous 10 Minutes Mail?
          </h1>
          <p className="pb-6 text-center px-12">
            The issue of anonymity worries a lot of people today. Regardless to
            the country, that you live in, for sure, you are using some
            VPN-services or proxies to surf the Internet.
          </p>
        </div>

        <div className="flex flex-wrap justify-between text-center px-[17px] max-[900px]:w-[95%] mx-auto">
          <div className="bg-white rounded-[40px] w-[384px] max-[900px]:mb-6 max-[900px]:w-full">
            <h1 className="font-semibold text-[32px] pl-[41px] pr-[46px] pt-11 mb-8">
              How it works?
            </h1>
            <p className="px-[41px] pb-[38px]">
              For downloading different programs, fully use certain sites, make
              new friends and just feel yourself confident in the Network you
              need an email.
            </p>
          </div>
          <div className="bg-white rounded-[40px] w-[384px] max-[900px]:w-full">
            <h1 className="font-semibold text-[32px] pl-[41px] pr-[46px] pt-11 mb-8">
              How to use the 10 Minutes Mail?
            </h1>
            <p className="px-[41px] pb-[38px]">
              The issue of anonymity worries a lot of people today. Regardless
              to the country, that you live in, for sure, you are using some
              VPN-services or proxies to surf the Internet.
            </p>
          </div>
        </div>

        <div className="mx-auto self-center bg-white rounded-[40px] w-[826px] text-center mt-12 max-[900px]:w-[95%]">
          <h1 className="font-semibold text-[32px] px-14 pt-6 mb-2">
            Conclusion
          </h1>
          <p className="pb-6 text-center px-12">
            Privacy - it is your absolute right, in the implementation of which
            10 Minutes Mail will definitely help you. We wish you success!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
