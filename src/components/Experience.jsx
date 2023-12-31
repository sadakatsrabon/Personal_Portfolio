
import html from "../../public/assets/experience/html.png";
import css from "../../public/assets/experience/css.png";
import javascript from "../../public/assets/experience/javascript.png";
import reactImage from "../../public/assets/experience/react.png";
import nextjs from "../../public/assets/experience/daisyUI.png";
import graphql from "../../public/assets/experience/Bootstrap.png";
import github from "../../public/assets/experience/github.png";
import tailwind from "../../public/assets/experience/tailwind.png";
import node from "../../public/assets/experience/node.png";
import express from "../../public/assets/experience/express.png";
import mongodb from "../../public/assets/experience/mongodb.png";
import redux from "../../public/assets/experience/firebase.png";
const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: node,
      title: "NodeJs",
      style: "shadow-green-400",
    },
    {
      id: 6,
      src: nextjs,
      title: "Daisi UI",
      style: "shadow-white",
    },
    {
      id: 7,
      src: graphql,
      title: "Bootstrap",
      style: "shadow-pink-400",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 9,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 10,
      src: express,
      title: "Express",
      style: "shadow-white",
    },
    {
      id: 11,
      src: mongodb,
      title: "MongoDB",
      style: "shadow-green-500",
    },
    {
      id: 12,
      src: redux,
      title: "Firebase",
      style: "shadow-purple-500",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen experience"
    >
      <div className="max-w-screen-lg text-center mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Expart In-
          </p>
          <p className="py-6">
            These are the technologies I haved worked with and used them in my
            projects.
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
