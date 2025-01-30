import React from "react";
import Nav from "../Nav";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="h-screen w-full bg-beige relative">
      <img
        src={`${process.env.PUBLIC_URL}/assets/hero.gif`}
        alt="homepage image"
        className="w-full h-full object-contain"
      />

      <div className="absolute top-60 right-0 text-beige font-bold sm:font-extrabold w-full flex justify-center md:top-28 h-1/2  md:h-full lg:justify-items-center ">
        <div className="grid grid-cols-2 grid-rows-2 sm:grid-cols-3 sm:grid-rows-2 md:grid-cols-3 md:grid-rows-2 md:pb-5 md:max-w-4xl w-full ">
          <div className="text-4xl md:text-5xl col-span-1 justify-self-start w-1/2 pl-3 ">
            <Link to="/about" className="cursor-pointer">
              ABOUT ME
            </Link>
          </div>

          <div className="text-7xl md:text-8xl text-right col-span-1 justify-self-end sm:w-1/2 sm:col-span-1 sm:justify-self-start md:col-span-1">
            <Link to="/projects">STELLA JIN</Link>
          </div>

          <div
            className="text-2xl md:text-3xl writing-vertical transform -rotate-90 text-nowrap col-span-1 justify-self-start
             sm:ml-16 sm:mb-40 md:col-span-1 md:col-start-3 md:row-start-1 md:ml-36 md:justify"
          >
            <Link to="https://github.com/stella-jin-ys">
              GITHUB@STELLA-JIN-YS
            </Link>
          </div>

          <div
            className="text-2xl md:text-3xl writing-vertical transform -rotate-90 text-nowrap col-span-1 col-start-1 justify-self-center pl-36 sm:p-0
             sm:mt-16 md:col-span-1 md:row-start-2 md:h-1/3 "
          >
            <Link to="/contact">GET IN TOUCH!</Link>
          </div>

          <div
            className="flex flex-col col-span-1 place-self-end
            sm:col-span-1 col-start-2 sm:col-start-3
            md:col-start-3 md:row-start-2  sm:justify-self-start md:h-2/3 
                "
          >
            {" "}
            <Link to="/projects">
              <div className="text-4xl lg:text-5xl">DEVELOPER</div>
              <div>
                <span className="text-4xl lg:text-5xl">
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
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
