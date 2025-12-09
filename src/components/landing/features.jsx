import React from "react";
import {
  FeatureIcon,
  SecureIcon,
  CheckedIcon,
  ChatIcon,
  WalletIcon,
} from "../../assets/icons/icons";
import streetwithhouse from "../../assets/img/streetwithhouse.png";
import Badge from "./Badge";

const Features = () => {
  const columsdata = [
    {
      icon: <SecureIcon color="white" />,
      heading: "Verified Users Only",
      desc: "Both renters and landlords verify identities before connecting.",
    },
    {
      icon: <CheckedIcon />,
      heading: "Genuine Property Listings",
      desc: "No fake ads — all listings are reviewed for authenticity.",
    },
    {
      icon: <ChatIcon />,
      heading: "Secure In-App Communication",
      desc: "Message safely without sharing personal contact information.",
    },
    {
      icon: <WalletIcon />,
      heading: "Zero Upfront Costs",
      desc: "No credit card, no reservation fees, no deposit required to start.",
    },
  ];
  return (
    <section
      className="w-full py-8 text-white md:py-14 lg:py-16"
      style={{
        background:
          "linear-gradient(136deg, rgba(107, 78, 255, 1) 0%, rgba(74, 47, 204, 1) 50%)",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse gap-10 lg:flex-row items-center ">
          <div className="left lg:w-1/2  w-full ">
            {/* BADGE */}

            <div className="w-full text-center lg:text-left">
              <Badge
                label={"Features"}
                style={"text-white text-xs"}
                icon={<FeatureIcon />}
                bgGradient={
                  "linear-gradient(135deg,#6B4EFF00 0%,#6B4EFF00 100%)"
                }
              />
            </div>

            <div className="heading mt-6 ">
              <h1 className="md:text-4xl  md:px-6 lg:px-0 text-2xl text-center lg:text-start font-bold text-[#FFFFFF]">
                Designed to Make Renting Safer & Simpler
              </h1>
            </div>

            <div className="columns flex flex-col gap-4 md:gap-10 py-4 md:mt-6 lg:mt-0">
              {columsdata.map((item, i) => {
                return (
                  <div key={i} className="flex flex-col  lg:flex-row items-center   gap-3  lg:gap-3">
                    <div className="w-11 h-11 flex justify-center items-center bg-white/20 rounded-2xl">
                      {item.icon}
                    </div>

                    <div>
                      <h3 className="md:text-xl text-lg font-semibold text-center lg:text-left">
                        {item.heading}
                      </h3>
                      <p className="md:text-base text-sm  text-center md:text-left text-[#F9F9FC]">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}

              <div className=" w-full  flex justify-center">
                <button className="py-3 px-4 w-full md:w-1/2 mt-2 bg-white text-[#4A2FCC] font-bold text-sm lg:hidden  rounded-xl ">
                  Explore Services
                </button>
              </div>
            </div>
          </div>
          <div className="right relative lg:w-1/2 ml-4 w-full px-2 flex justify-center">
            <div className="w-full bg-white   md:rounded-[20px] rounded-xl ">
              <div className="w-full lg:-ml-5 rounded-xl overflow-hidden  lg:-mb-5 lg:mt-5 mt-3 -ml-3 -mb-3">
                <img
                  src={streetwithhouse}
                  alt="streetwithhouse"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
 