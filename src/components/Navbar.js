import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="h-16 bg-gradient-to-r from-blue-600 to-teal-600 flex justify-between items-center text-white px-6 md:px-16 shadow-md">
      <div className="flex justify-center items-center font-bold text-2xl gap-2">
        <Image alt="applogo" src="/link.png" width={40} height={40} />
        <span>ShortLinks</span>
      </div>

      <div className="mr-4">
        <ul className="flex justify-center gap-8 items-center text-lg">
          {/* <Link href="/">
            <li className="hover:text-teal-300 transition-colors duration-300">
              Home
            </li>
          </Link>
          <Link href="/about">
            <li className="hover:text-teal-300 transition-colors duration-300">
              About
            </li>
          </Link>
          <Link href="/generate">
            <li className="hover:text-teal-300 transition-colors duration-300">
              Shorten
            </li>
          </Link>
          <Link href="/contact">
            <li className="hover:text-teal-300 transition-colors duration-300">
              Contact Us
            </li>
          </Link>
          <Link href="/generate">
            <button className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out shadow-lg">
              Try Now
            </button>
          </Link> */}
          <Link
            target="_blank"
            href="https://github.com/surajgharpankar28/ShortLinks.git"
          >
            <button className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out shadow-lg">
              Github
            </button>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
