import React from "react";
import Nav from "../Nav";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="flex flex-col bg-beige justify-center items-center">
      <div className="flex w-full justify-between font-bold text-red text-4xl px-10 pt-5 border-red border-b">
        <div>
          <Link to="/">HOME</Link>
        </div>
        <div>
          <Link to="/projects">PROJECTS</Link>
        </div>
      </div>
      <div className="grid grid-cols-1  md:grid-cols-2 place-content-stretch md:gap-10 h-fit py-10 md:w-3/4">
        <div className="justify-self-end">
          <img
            src={`${process.env.PUBLIC_URL}/assets/stella.jpg`}
            alt="image1"
            className="hidden md:flex shrink-0 rounded-full h-60"
          />
        </div>
        <div className="w-4/5 justify-self-center text-center p-10 md:w-3/5 md:p-0">
          <p>
            <span className="text-8xl text-red">“</span>Hello. My name is Stella
            Jin. I am a highly adaptable and disciplined professional with a
            strong drive for learning and achieving goals.
          </p>
          <span className="text-8xl float-right md:ml-40 text-red">”</span>
        </div>

        <div className="flex flex-col md:text-end  text-center items-center md:items-end">
          <h1 className="text-2xl font-bold text-darkGreen ">
            CONTACT INFORMATION
          </h1>
          <div className="flex gap-5 justify-center items-center text-left md:text-right">
            <div className="hidden lg:block">
              <img
                src={`${process.env.PUBLIC_URL}/assets/email.png`}
                alt="Email Address"
                className="w-5 h-5 object-cover"
              />
              <img
                src={`${process.env.PUBLIC_URL}/assets/linkedin.png`}
                alt="LinkedIn"
                className="w-5 h-5 object-cover"
              />
              <img
                src={`${process.env.PUBLIC_URL}/assets/github.png`}
                alt="Github"
                className="w-5 h-5 object-cover"
              />
            </div>
            <div>
              <p>stella.jin123@gmail.com</p>
              <p> www.linkedin.com/in/stella-jin-75694253</p>
              <p>www.github.com/stella-jin-ys</p>
            </div>
          </div>
          <div className="md:justify-self-end w-3/5 md:w-full">
            <h1 className="text-2xl font-bold mt-10 text-darkGreen">
              SOFTWARE SKILLS
            </h1>

            <p>
              C#, .Net, React.js, Html, Css, Javascript, Node.js, Express,
              Typescript, Material UI, Tailwindcss, Git, Github, Gitlab,
              Postman, MongoDB, Microsoft SQL
            </p>
          </div>
          <div>
            <h1 className="text-2xl font-bold mt-10 text-darkGreen">
              ACADEMIC BACKGROUND
            </h1>
            <div className="mb-5">
              2008.09-2012.07
              <p> Bachelor in International Finance</p>
              <p>Dalian University of Foreign Languages</p>
            </div>
            <div className="mb-5">
              2021.08- 2022.03
              <p>FooCoding Javascript Full-stack Web Development course</p>
            </div>
            <div className="mb-5">
              2024.11 - 2025.05
              <p>Lexicon C# programming training</p>
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold mt-10 text-darkGreen">
              LANGUAGES
            </h1>
            <ul>
              <li>Chinese(Native speaker)</li>
              <li>English(Advanced level)</li>
              <li>Korean(Native speaker)</li>
              <li>Swedish(Intermediate level)</li>
            </ul>
          </div>
        </div>
        <div className="mt-20 px-10 text-center md:mt-0 md:w-full md:text-start ">
          <h1 className="text-2xl font-bold text-darkGreen">CAREER SUMMARY</h1>
          <div className="mb-5 ">
            2022-2023
            <span className="font-bold">Frontend developer consultant </span>
            @European Spallation Source
            <ul className="pl-5 list-disc">
              <li>
                Analyze user needs and design modern UI solutions to ensure
                software effectively meets user requirements.
              </li>
              <li>
                Develop clean, reusable components with a focus on creating
                responsive, user-friendly applications.
              </li>
              <li>
                Integrate APIs with backend systems, implement data processing
                techniques, and adhere to Agile methodology for efficient
                software development.
              </li>
              <li>
                Utilize IBM Cognos Reporting tools and MySQL to process data,
                generate dynamic reports, and integrate them into the Enterprise
                Asset Management platform.
              </li>
            </ul>
          </div>
          <div className="mb-5">
            2021-2022
            <span className="font-bold">
              Global sales and marketing coordinator
            </span>
            @PolyPeptide Group
            <ul className="pl-5 list-disc">
              <li>
                Process and register sales orders in the ERP system, ensuring
                alignment with the CRM system.
              </li>
              <li>
                Coordinate purchase orders with Quality Assurance (QA) and
                logistics teams to manage shipments efficiently.
              </li>
              <li>
                Collaborate with the Finance department to manage invoicing and
                commission payments.
              </li>
              <li>
                Oversee the invoice management system (OPTO) for accurate and
                timely processing.
              </li>
              <li>
                Assist the marketing team with various activities, including
                event planning and exhibitions.
              </li>
              <li>
                Facilitate and coordinate customer technical requests by
                liaising with internal teams and resources.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
