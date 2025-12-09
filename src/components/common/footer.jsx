import React from "react";
import Logofooter from "../../assets/img/logofooter.svg";
import { FiPhone, FiMapPin } from "react-icons/fi";
import {
  Facebookicon,
  InstaIcon,
  LindienIcon,
  PintrestIcon,
} from "../../assets/icons/icons";
import { linkColumns } from "../../constants/data/commonConst";

const socialIcons = [Facebookicon, LindienIcon, InstaIcon, PintrestIcon];

const Footer = () => {
  return (
    <footer className="bg-[#2B2F38] text-[#E6E8EC]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 md:pt-20 py-6">
        {/* Top grid */}
        <div className="grid gap-6 md:grid-cols-4 lg:grid-cols-6">
          {/* Brand / About */}
          <div className="md:col-span-4 col-span-2 lg:col-span-2 space-y-4">
            <img
              src={Logofooter}
              alt="Rent Safe"
              className="h-8 w-auto object-contain"
            />
            <p className="text-sm leading-5 w-full lg:max-w-[320px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since when an unknown printer took a galley of type
              scrambled.
            </p>
          </div>

          {/* Links / Support / Legal columns */}
          {linkColumns.map((col) => (
            <FooterColumn key={col.title} title={col.title}>
              {col.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </FooterColumn>
          ))}

          {/* Contact column */}
          <FooterColumn title="Contact">
            <li className="flex items-center gap-2">
              <FiPhone />
              <span>(205) 555-0100</span>
            </li>
            <li className="flex items-start gap-2">
              <FiMapPin className="mt-0.5" />
              <span>
                3517 W. Gray St. Utica,
                

                Pennsylvania 57867
              </span>
            </li>
          </FooterColumn>
        </div>

        {/* Join Us By – bottom row */}
        <div className="w-full flex justify-center lg:justify-end">
          <div className="space-y-2">
            <p className="font-semibold text-[#9FA3AA] text-xl text-center lg:text-left">
              Join Us By
            </p>
            <div className="flex items-center gap-1 md:gap-2 justify-center lg:justify-start">
              {socialIcons.map((Icon, i) => (
                <SocialIcon key={i}>
                  <Icon />
                </SocialIcon>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Divider + copyright */}
      <div className="border-t border-[#5A5E67] py-4 text-center text-sm">
        All rights are reserved. | Copyrights 2024
      </div>
    </footer>
  );
};

/* Reusable column component */
const FooterColumn = ({ title, children }) => {
  const hoverUnderlineClass =
    "relative cursor-pointer pb-1 w-fit after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-[#4A2FCC] after:to-[#6B4EFF] after:transition-all after:duration-300 hover:after:w-full";

  return (
    <div className="lg:space-y-5 space-y-3 lg:mt-2 text-base">
      <h4 className="font-semibold leading-6 text-[#9FA3AA] text-lg lg:text-xl">
        {title}
      </h4>

      <ul className="lg:space-y-4 space-y-1 text-sm lg:text-base leading-5">
        {React.Children.map(children, (child, index) => {
          if (!React.isValidElement(child)) {
            return (
              <li key={index} className={hoverUnderlineClass}>
                {child}
              </li>
            );
          }

          if (child.type === "li") {
            const existingClass = child.props.className || "";
            return React.cloneElement(child, {
              key: child.key ?? index,
              className: `${existingClass} ${hoverUnderlineClass}`,
            });
          }

          return (
            <li key={index} className={hoverUnderlineClass}>
              {child}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

/* Reusable social icon circle */
const SocialIcon = ({ children }) => (
  <div className="flex items-center justify-center w-10 h-10 cursor-pointer hover:scale-110 transition-all duration-500 rounded-full bg-[#3C3F48]">
    {children}
  </div>
);

export default Footer;

 