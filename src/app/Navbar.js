import React from "react";
import Link from "next/link";
import { IoFastFood } from "react-icons/io5";

function Navbar() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col sm:flex-row items-center justify-between py-3 md:py-8">
        <Link href={"/"} className="flex items-center gap-2">
          <IoFastFood className="w-9 h-9 text-orange-400" />
          <h2 className="text-black text-xl md:text-3xl font-bold">
            DishDiscovery
          </h2>
        </Link>
        <nav className="space-x-2 md:space-x-11 py-3 md:py-0 items-center">
          <Link
            href={"/"}
            className="text-lg hover:bg-orange-400 hover:rounded-full p-2"
          >
            Home
          </Link>
          <Link
            href={"/about"}
            className="text-lg hover:bg-orange-400 hover:rounded-full p-2"
          >
            About
          </Link>
          <Link
            href="/recipe-list"
            className="text-lg hover:bg-orange-400 hover:rounded-full p-2"
          >
            Recipe
          </Link>
          <Link
            href={"/contact"}
            className="text-lg hover:bg-orange-400 hover:rounded-full p-2"
          >
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
