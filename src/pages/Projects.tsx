import React from "react";
import Nav from "../Nav";
import Card from "../Card";
import projects from "../data.json";

function Projects() {
  return (
    <div className="bg-baige h-full  ">
      <Nav />
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
