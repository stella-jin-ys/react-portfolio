import React from "react";
import { Link } from "react-router-dom";

type Props = {
  name: string;
  image: string;
  link: string;
  stacks: string;
};

export default function Card({ name, image, link }: Props) {
  return (
    <div className="relative w-1/2 h-96">
      <Link to={link} target="_blank" rel="noopener noreferrer">
        <img
          src={image}
          alt=""
          className="w-full h-full object-cover rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-150"
        />
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-red text-5xl font-bold ">
          <p className="hover:border-double hover:border-4 px-10 py-3 ">
            {name}
          </p>
        </div>
      </Link>
    </div>
  );
}
