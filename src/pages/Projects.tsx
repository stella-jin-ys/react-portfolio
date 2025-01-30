import React from "react";
import Nav from "../Nav";
import Card from "../Card";
import projects from "../data.json";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <div className="bg-beige h-full">
      <div className="flex w-full justify-between font-bold text-red text-4xl px-10 pt-5 border-red border-b">
        <div>
          <Link to="/">HOME</Link>
        </div>
        <div>
          <Link to="/contact">CONTACT</Link>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center p-5 gap-5 ">
        {projects.map((data) => (
          <Card
            key={data.id}
            name={data.name}
            image={data.image}
            link={data.link}
            stacks={data.stacks}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
