import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex items-center justify-between mt-10 mx-8 bg-">
        <img width={130} src={assets.logo} alt="logo" />
        <p className="text-gray-500">|</p>
        <p className="text-gray-400 text-sm">© {new Date().getFullYear()} All Rights Reserved.</p>
          <p className="flex p-1">Made with ❤️ by ~ Rav
          <a href="https://www.linkedin.com/in/ravindra-naga/" target="_blank"><i className="fa-brands fa-linkedin fa-x hover:scale-130  "></i></a>dra
          </p>
          <div className="flex gap-1">
        <img src={assets.facebook_icon} alt="fb" />
        <img src={assets.twitter_icon} alt="twitter" />
        <img src={assets.instagram_icon} alt="insta" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
