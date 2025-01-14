import React from "react";
import Nav from "../Nav";

function Contact() {
  return (
    <div>
      <Nav />
      <div className="bg-baige h-screen lg:overflow-hidden flex flex-wrap  gap-10">
        <div className="lg:w-1/2 lg:h-full">
          <img
            src="https://images.unsplash.com/photo-1577398628395-4ebd1f36731b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="contact image"
            className="h-full w-full object-cover border-r border-orange hidden lg:flex"
          />
        </div>
        <div className="flex flex-col grow gap-10 justify-center items-center text-lg ">
          <div className="w-2/3 flex flex-col ">
            <h2>Name</h2>
            <input
              type="text"
              className=" mt-2 px-5 py-3 border border-orange rounded-lg"
            />
          </div>

          <div className="w-2/3 flex flex-col ">
            <h2>Email Address</h2>
            <input
              type="email"
              className="mt-2 px-5 py-3 border border-orange rounded-lg"
            />
          </div>

          <div className="w-2/3 flex flex-col ">
            <h2>Message</h2>
            <textarea className="mt-2 px-5 py-3 border border-orange rounded-lg h-60" />
          </div>
          <button className=" px-10 py-5 bg-orange text-baige">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
