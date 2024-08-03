import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <div className="bg-orange-400 py-5 mt-10">
      <div className="container flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <Link href={"/"}>
            <h3 className="text-lg font-bold hover:text-white">DishDiscovery</h3>
          </Link>

          <p className="text-sm">
            &copy; 2024 DishDiscovery. All rights reserved.
          </p>
        </div>
        <div className="text-center space-x-14">
          <Link href="/" className="mx-2 text-sm hover:text-white">
            Home
          </Link>
          <Link href="/about" className="mx-2 text-sm hover:text-white">
            About
          </Link>
          <Link href="/contact" className="mx-2 text-sm hover:text-white">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
