import React from "react";

const AddDomain = () => {
  return (
    <div>
      <div className="flex flex-col items-center pb-[184px] mt-28">
        <h1 className="text-[32px] font-semibold mb-12 text-center">
          New Email Generator domain name
        </h1>
        <div className="bg-white rounded-[40px] w-[940px] pt-[26px] pl-[31px] pr-[25px] pb-[44px] mb-6 max-[1024px]:w-[95%]">
          <h3 className="font-semibold text-[24px] mb-4">Method 1</h3>
          <p>
            - Find on the web "domain registration" site. (
            <a
              className="text-[#148EFF]"
              href="https://www.icann.org/en/accredited-registrars"
              target="_blank"
              rel="noopener noreferrer"
            >
              ICANN-Accredited Registrars list
            </a>
            ).
          </p>
          <p>- Register a domain that you like.</p>
          <p>
            - Add to domain MX record (do not forget to put dot at the end. But
            some registrars may not require dot)
          </p>
          <div className="border-[1px] rounded-2xl border-dashed border-[#B1B1B1] pb-4 mb-4">
            <ul className="list-disc list-inside pl-4 border-dashed rounded-2xl mt-4">
              <li>
                Name/Host/Alias: (
                <span className="text-[#34A853]">
                  leave blank or @ or the name of your domain
                </span>
                )
              </li>
              <li>
                Record Type: <span className="text-[#EB4235]">MX</span> (
                <span className="text-[#34A853]">Type of DNS record</span>)
              </li>
              <li>
                TTL: <span className="text-[#EB4235]">86400</span> (
                <span className="text-[#34A853]">
                  Time to Live - tells servers across the Internet to check
                  every 86400 seconds (24 hours) for updates
                </span>
                )
              </li>
              <li>
                Priority: <span className="text-[#EB4235]">1</span>
              </li>
              <li>
                Value / Answer / Destination / Target / Mail server:{" "}
                <span className="text-[#EB4235]">generator.email</span>.
              </li>
            </ul>
          </div>
          <p>
            - Wait until the changes take effect (usually between 1 minute to 1
            day).
          </p>
          <p>
            - That's all. You can now use email with your own domain name in the
            site:{" "}
            <span className="text-[#34A853]">
              https://generator.email/your-domain.com
            </span>
          </p>
        </div>
        <div className="bg-white rounded-[40px] w-[940px] pt-[26px] pl-[31px] pr-[25px] pb-[44px] max-[1024px]:w-[95%]">
          <h3 className="font-semibold text-[24px] mb-4">Method 2</h3>
          <p>
            - Register a domain that you like. (
            <span className="text-[#148EFF]">
              ICANN-Accredited Registrars list
            </span>
            ).
          </p>
          <p>
            - Email us with the subject "New Domain" to the{" "}
            <span className="text-[#148EFF]">Feedback</span>
          </p>
          <p>- Add in the email:</p>
          <p>1) The site registrar. span(example: http://sitereg.site.com)</p>
          <p>2) User name. (example: username or user@site.com)</p>
          <p>3) Password. (example: Nfg6L43p)</p>
          <p>4) Domain name. (example: my-registred-domain.com)</p>
          <p>And we set up MX record for You.</p>
        </div>
      </div>
    </div>
  );
};

export default AddDomain;
