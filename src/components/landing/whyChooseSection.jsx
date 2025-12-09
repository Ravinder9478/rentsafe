import React from "react";
// import creditcard from "../../assets/icons/creditcard.svg";
// import euro from "../assets/icons/euro.svg";
// import wallet from "../assets/icons/wallet.svg";
// import security from "../assets/icons/security.svg";
import { SecureIcon } from "../../assets/icons/icons";
import Badge from "./Badge";
const Whychooseus = () => {
  const reasons = [
    {
      title: "No Credit Card",
    //   icon: creditcard,
      desc: "Create your renter profile for free. No credit card required.",
      value: "100%",
      stat: "Free Signup",
    },
    {
      title: "No Reservation Fees",
      desc: "Message owners without paying upfront.",
      value: "0%",
    //   icon: euro,

      stat: "Extra Costs",
    },
    {
      title: "Best Price Guarantee",
      desc: "Verified listings with transparent pricing.",
      value: "100%",
    //   icon: security,
      stat: "Transparent Pricing",
    },
    {
      title: "No Deposit Required",
      desc: "Secure a viewing without financial risk.",
      value: "0%",
    //   icon: wallet,
      stat: "Financial Risk",
    },
  ];
  return (
    <section className="w-full py-10 md:py-14 lg:py-16 bg-bg-primary-gradient">
      <div className="container mx-auto px-6 md:px-4 lg:px-0">
        <div className="flex flex-col items-center text-center gap-6 mb-8 md:mb-10">
          <Badge
            label="Safe for renters"
            icon={<SecureIcon />}
            style={"text-[#4A2FCC] text-xs"}
            bgGradient={
              "linear-gradient(207deg, rgba(232,226,255,1) 0%, rgba(107,78,255,1) 170%)"
            }
          />
          <div>
            <h2 className="text-2xl md:text-4xl  font-bold text-[#111827]">
              Why Choose Us
            </h2>
            <p className="text-base md:text-lg font-normal  text-[#6B7280] max-w-xl">
              A safer, simpler renting experience in the UK
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:gap-4 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((item) => (
            <div
              key={item.title}
              className="rounded-[40px]   text-center bg-white shadow-sm border border-[#E5E7F5]
                         px-2 md:px-5 py-3 md:py-6 flex flex-col items-center justify-between"
            >
              {/* Icon placeholder (top circle) */}
              <div className="mb-4">
                <div
                  className="w-11 h-11 rounded-2xl flex items-center justify-center text-white text-xl"
                  style={{
                    background:
                      "linear-gradient(198deg, rgba(107,78,255,1) 0%, rgba(155,126,255,1) 50%)",
                  }}
                >
                  {/* <img src={item.icon} alt="icon" className="w-5 h-5" /> */}
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-semibold text-[#111827]">
                  {item.title}
                </h3>
                <p className="text-base px-4 leading-tight text-[#6B7280]">
                  {item.desc}
                </p>
              </div>

              <p className="mt-4 flex gap-1  justify-center text-[#5A5E67] w-full pt-4 border-t border-t-[#E6E8EC] text-base font-semibold ">
                <span className="text-[#6B4EFF] font-bold">{item.value}</span>
                {item.stat}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Whychooseus;
 