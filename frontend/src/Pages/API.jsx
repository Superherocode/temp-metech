import React from "react";

const API = () => {
  return (
    <div>
      <div className="flex flex-col items-center pb-[184px] mt-28">
        <h1 className="text-[32px] font-semibold mb-12 text-center">
          Temporary Disposable Email API
        </h1>
        <div className="bg-white rounded-2xl w-[940px] pt-[28px] pr-[25px] pl-[31px] pb-8 max-[1024px]:w-[95%]">
          <p className="mb-6 text-[#5D6165]">
            This API allows Developers as well as QA Testers to run automated
            processes to test how their email workflows, such as sign-ups and
            password resets, work with a large number of disposable email
            accounts.
          </p>
          <p className="mb-6 text-[#5D6165]">
            Temp Mail API can be used in a number of ways, whether it is a
            manual testing process, an API call, or using an automation
            framework such as Selenium, Cypress, Playwright, or Puppeteer to
            automate email testing.
          </p>
          <p className="text-[#5D6165]">
            Temp Mail API is also a good choice for building apps or websites
            that create Temporary Disposable Emails on a regular basis.
          </p>
        </div>
        <div className="bg-white rounded-2xl w-[940px] pt-[26px] pr-[25px] pl-[31px] pb-8 mt-6 max-[1024px]:w-[95%]">
          <h3 className="text-[20px] leading-[25px] font-bold mb-4">
            Getting started
          </h3>
          <p className="text-[#5D6165] mb-6">
            Click API management platforms to use the API
          </p>
          <ul className="list-disc list-inside text-[#5D6165]">
            <li>
              Rapid API →{" "}
              <span className="text-[#148EFF]">
                Click here for API docs and instructions
              </span>
            </li>
          </ul>
        </div>
        <div className="bg-white rounded-2xl w-[940px] pt-[28px] pr-[25px] pl-[31px] pb-8 mt-6 max-[1024px]:w-[95%]">
          <h3 className="text-[20px] leading-[25px] font-bold mb-4">
            Getting started
          </h3>
          <ul className="list-disc list-inside text-[#5D6165]">
            <li>Get any email address using our domain names.</li>
            <li>Verify your email address on sites that require it.</li>
            <li>Site sends email to specified addresses.</li>
            <li>
              We receive the message through our SMTP server, process it, and
              store it.
            </li>
            <li>
              You request a list of emails using the API with your login and
              domain information.
            </li>
            <li>
              You can request our API with the message ID to get the JSON
              formatted message with body, subject, date, attachments, etc in a
              JSON format.
            </li>
            <li>
              Alternatively, you can get the raw message in the base64 encoding
              as it arrived.
            </li>
          </ul>
        </div>
        <div className="bg-white rounded-2xl w-[940px] pt-[28px] pr-[25px] pl-[31px] pb-8 mt-6 max-[1024px]:w-[95%]">
          <h3 className="text-[20px] leading-[25px] font-bold mb-4">
            Getting started
          </h3>
          <p className="text-[#5D6165] mb-6">
            You can generate any email address using our domain names without
            API notification - just think of it as username@our_domains. All
            incoming messages are received by our servers; just call them
            correctly. Our services automatically delete all incoming email
            messages within 1-2 hours (self-destroyed). Government services and
            major financial institutions cannot send messages to you, nor can
            you read messages from abuse@, webmaster@, contact@, postmaster@,
            hostmaster@, admin@. You can use any other address.
          </p>
          <p className="text-[#5D6165]">
            Feel free to contact us via{" "}
            <span className="text-[#148EFF]">feedback form</span> or{" "}
            <span className="text-[#148EFF]">support@temp-mail.org</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default API;
