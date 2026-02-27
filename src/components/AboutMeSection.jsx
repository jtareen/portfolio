import { Link } from "react-router-dom";

import Dots from "./Dots";
import Button from "./Button";
import aboutMeImg from "../assets/aboutme.png";

const AboutMe = () => {
  return (
    <section id="about-me" className="py-12">
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-10">
        <h2 className="text-3xl text-white font-medium whitespace-nowrap font-mono">
          <span className="text-primary">#</span>about-me
        </h2>
        <div className="h-px bg-primary w-42 md:w-56 lg:w-72"></div>
        <div className="flex-1 h-px"></div>
      </div>

      {/* Content Container */}
      <div className="flex flex-col md:flex-row justify-between items-center md:items-stretch gap-12 font-mono">
        {/* Left Column: Text Content */}
        <div className="md:w-1/2 flex flex-col gap-6 text-gray text-base leading-relaxed">
          <p>Hello, i'm Jawad!</p>
          <p>
            I'm a full stack developer based in Quetta, Pakistan. I build
            end-to-end web and mobile applications with a strong focus on
            performance, maintainability, and real-world usability.
          </p>
          <p>
            My work spans frontend, backend, and applied machine learning,
            allowing me to develop complete systems rather than isolated
            features. I actively refine my skills by working on practical
            projects and keeping up with modern tools and frameworks.
          </p>
          <Link to="/aboutme" className="inline-block w-max">
            <Button>Read More →</Button>
          </Link>
        </div>

        {/* Right Column: Image and Decorations */}
        <div className="md:w-1/2 relative flex justify-center w-full mt-8 md:mt-0">
          {/* Decorative Dots - Top Left */}
          <Dots className="absolute top-12 left-0 md:left-10 text-gray w-16 h-16 z-20 hidden sm:block" />

          {/* Decorative Dots - Bottom Right */}
          <Dots className="absolute bottom-16 right-0 md:right-10 text-gray w-16 h-16 z-20 hidden sm:block" />

          {/* Image Container */}
          <div className="relative z-10 flex flex-col items-center">
            <img
              src={aboutMeImg}
              alt="Jawad - Full-Stack Developer"
              className="w-full max-w-[300px] object-contain"
            />
            {/* Purple Line under Image */}
            <div className="w-3/4 h-px bg-primary mx-auto mt-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
