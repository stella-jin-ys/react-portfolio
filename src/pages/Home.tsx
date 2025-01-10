import React from "react";
import Nav from "../Nav";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";
import icon from "../images/go.png";

function Home() {
  return (
    <div className="bg-baige">
      <Nav />
      <div className="h-screen flex gap-10 justify-evenly p-5">
        <div className="flex flex-col pt-40  ">
          <div className="mb-10">
            <h1 className="text-5xl font-bold text-darkBlue">Yingshun Jin</h1>
          </div>
          <div>
            <p className="text-darkGreen text-4xl mt-2 ">DEVELOPER</p>
            <span className="text-darkGreen text-4xl mt-4 block">
              <Typewriter
                words={[
                  "Typescript",
                  "Javascript",
                  "React.JS",
                  "Node.JS",
                  "C#",
                  "Python",
                ]}
                cursor
                cursorStyle="_"
                typeSpeed={250}
                deleteSpeed={150}
                loop
              />
            </span>
            <div className="flex pt-20 sm:hidden text-xl text-darkGreen">
              <Link to="/projects" className="border-b border-darkGreen">
                Go to Projects
              </Link>
              <img src={icon} alt="" className="w-6 h-6 " />
            </div>
          </div>
          <div className="flex flex-col gap-3 mt-40">
            <Link to="/about">
              <button className=" text-xl text-mint border-mint border rounded-full px-20 py-5">
                About Me
              </button>
            </Link>
            <Link to="/contact">
              <button className="text-xl text-baige bg-mint rounded-full px-20 py-5">
                Contact Me
              </button>
            </Link>
          </div>
        </div>
        <div className="w-1/3 h-fit hidden md:flex">
          <img
            src="https://images.unsplash.com/photo-1492760864391-753aaae87234?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
