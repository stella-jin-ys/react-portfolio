import React from "react";
import Nav from "../Nav";
import image from "../images/stella.jpg";

function About() {
  return (
    <div>
      <Nav />
      <div className="bg-baige flex justify-center">
        <div className="grid grid-cols-1  md:grid-cols-2 place-content-stretch md:gap-10 h-fit py-20 md:w-3/4">
          <div className="justify-self-end">
            <img
              src={image}
              alt="image1"
              className="hidden md:flex shrink-0 rounded-full h-60"
            />
          </div>
          <div className="w-full text-center p-10 md:w-2/5 md:p-0">
            <p>
              <span className="text-8xl text-orange">“</span>Hello. My name is
              Yingshun Jin. I am a highly adaptable and disciplined professional
              with a strong drive for learning and achieving goals.
            </p>
            <span className="text-8xl float-right md:ml-40 text-orange">”</span>
          </div>

          <div className="flex flex-col px-10 md:text-end md:pr-0 text-center">
            <div>
              <h1 className="text-2xl font-bold text-darkGreen">
                CONTACT INFORMATION
              </h1>
              <ul>
                <li>Email: stella.jin123@gmail.com</li>
                <li>LinkedIn: www.linkedin.com/in/stella-jin-75694253</li>
                <li>Github: github.com/stella-jin-ys</li>
              </ul>
            </div>
            <div className="md:justify-self-end  ">
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
            <h1 className="text-2xl font-bold text-darkGreen">
              CAREER SUMMARY
            </h1>
            <div className="mb-5 ">
              2022-2023{" "}
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
                  generate dynamic reports, and integrate them into the
                  Enterprise Asset Management platform.
                </li>
              </ul>
            </div>
            <div className="mb-5">
              2021-2022
              <span className="font-bold">
                {" "}
                Global sales and marketing coordinator{" "}
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
                  Collaborate with the Finance department to manage invoicing
                  and commission payments.
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
      <div className=" py-10 bg-mint"></div>
    </div>
  );
}

export default About;
