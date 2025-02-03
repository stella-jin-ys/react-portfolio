import React from "react";
import Nav from "../Nav";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="bg-beige">
      <div className="flex w-full justify-between font-bold text-red text-4xl px-10 pt-5 border-red border-b">
        <div>
          <Link to="/">HOME</Link>
        </div>
        <div>
          <Link to="/projects">PROJECTS</Link>
        </div>
      </div>
      <div className="bg-baige h-screen lg:overflow-hidden flex flex-wrap  gap-10">
        <div className="lg:w-1/2 lg:h-full">
          <img
            src="https://images.unsplash.com/photo-1577398628395-4ebd1f36731b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="contact image"
            className="h-full w-full object-cover border-r border-red hidden lg:flex"
          />
        </div>
        <div className="flex flex-col grow gap-8 justify-center items-center text-lg ">
          <h2 className="text-3xl mb-20">Contact Me</h2>
          <div className="w-2/3 flex gap-2">
            <div className="w-8 h-8">
              <img
                src={`${process.env.PUBLIC_URL}/assets/email.png`}
                alt="email"
              />
            </div>
            <div>stella.jin123@gmail.com</div>
          </div>

          <div className="w-2/3 flex gap-2 ">
            <div className="w-8 h-8">
              <img
                src={`${process.env.PUBLIC_URL}/assets/linkedin.png`}
                alt="linkedIn"
                className="text-orange"
              />
            </div>
            <div>https//:www.linkedin.com/in/stella-jin-75694253</div>
          </div>

          <div className="w-2/3 flex gap-2 ">
            <div className="w-8 h-8">
              <img
                src={`${process.env.PUBLIC_URL}/assets/github.png`}
                alt="linkedIn"
              />
            </div>
            <div>https://github.com/stella-jin-ys</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
