import React from "react";
import {
  FaWhatsappSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
  FaFacebook,
} from "react-icons/fa";

function Header() {
  return (
    <div className="bg-orange-400 hidden sm:block">
      <div className="flex py-3 justify-between items-center mx-32 md:mx-16">
        <div className="flex flex-row sm:space-x-4 md:space-x-8 lg:space-x-14">
          <FaWhatsappSquare className="w-5 h-8" />
          <FaInstagramSquare className="w-5 h-8" />
          <FaFacebook className="w-5 h-8" />
          <FaYoutubeSquare className="w-5 h-8" />
        </div>
        <div>
          <p className="font-semibold text-base md:text-lg">
            Welcome to tasty Food Delicious
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
