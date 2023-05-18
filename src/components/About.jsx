import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div
        className="max-w-screen-lg p-4 mx-auto flex flex-col
      justify-center w-full h-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>

          <p className="text-xl mt-20">
            Experienced and talented front-end web developer with over 20 months of hands-on
            expertise in designing and implementing visually appealing,
            user-friendly websites. Proficient in JavaScript, HTML, and CSS,
            with a strong understanding of modern web development principles and
            best practices. Skilled in utilizing frameworks like React.js and
            tailwind to create dynamic and responsive web applications.
          </p>

          <br />

          <p className="text-xl">
            I have a deep understanding of HTML, CSS, and JavaScript. I am
            experienced in creating responsive layouts that adapt to different
            screen sizes and devices, ensuring optimal user experiences across
            desktop, tablet, and mobile platforms. I am also proficient in using
            front-end frameworks such as React JS,Tailwind and Bootstrap and Foundation
            to streamline development and enhance the visual appeal of websites and web applications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
