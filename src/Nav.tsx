import React from "react";

function Nav() {
  return (
    <div className="flex px-20 py-5 bg-mint justify-around sm:justify-between ">
      <div className=" hidden  sm:flex">
        <div className="flex flex-wrap">
          <img src="/assets/logo.png" alt="logo" className="w-6 h-6" />
          <span className="text-md italic text-darkOrange hidden md:inline">
            YING Portfolio
          </span>
        </div>
      </div>
      <div className="flex flex-col sm:inline ">
        <ul className="flex space-x-10">
          <li>
            <a
              href="/"
              className="text-darkBlue hover:border-b border-darkBlue p-1"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="text-darkBlue hover:border-b border-darkBlue p-1"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/projects"
              className="text-darkBlue hover:border-b border-darkBlue p-1"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="text-darkBlue hover:border-b border-darkBlue p-1"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
