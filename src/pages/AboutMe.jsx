import { useEffect, useState } from "react";

import { getSkills } from "../services/skillService";

import Dots from "../components/Dots";
import FunFacts from "../components/FunFacts";
import aboutMeImg from "../assets/aboutme.png";

const AboutMe = () => {
  const [skillsData, setSkillsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchData = async () => {
      try {
        const data = await getSkills();
        setSkillsData(data);
      } catch (error) {
        console.error("Failed to fetch skills:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="py-8">
        <h2 className="text-2xl text-white font-bold whitespace-nowrap">
          <span className="text-primary">/</span>about-me
        </h2>
        <p className="text-white font-6 pt-2">Who am I?</p>
      </section>

      {/* About me Content Container */}
      <section id="about-me">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-stretch gap-12 font-mono">
          {/* Left Column: Text Content */}
          <div className="md:w-1/2 py-8 md:py-2 lg:py-16 flex flex-col gap-6 text-gray text-base leading-relaxed">
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
          </div>

          {/* Right Column: Image and Decorations */}
          <div className="hidden md:w-1/2 relative sm:flex  justify-center w-full mt-8 md:mt-0">
            {/* Decorative Dots - Top Left (z-index increased to 20) */}
            <Dots className="absolute top-12 left-35 md:left-10 lg:left-20 2xl:left-35 text-gray w-16 h-16 z-20 hidden sm:block" />

            {/* Decorative Dots - Bottom Right (z-index increased to 20) */}
            <Dots className="absolute bottom-16 right-30 lg:bottom-30 md:right-5 lg:right-20 2xl:right-40 text-gray w-16 h-16 z-20 hidden sm:block" />

            {/* Image Container */}
            <div className="relative z-10 flex flex-col items-center">
              <img
                src={aboutMeImg}
                alt="Jawad - Front-end Developer"
                className="w-full max-w-[300px] object-contain"
              />
              {/* Purple Line under Image */}
              <div className="w-3/4 h-px bg-primary mx-auto mt-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-5 sm:py-8">
        {/* Header (always renders) */}
        <div className="flex items-center gap-4 mb-4">
          <h2 className="text-2xl text-white font-bold whitespace-nowrap font-mono">
            <span className="text-primary">#</span>skills
          </h2>
        </div>

        {isLoading ? (
          <div className="py-16 text-gray font-mono">Loading skills...</div>
        ) : skillsData.length === 0 ? (
          <div className="text-gray font-mono italic">
            No skills data available at the moment.
          </div>
        ) : (
          <div className="grid grid-cols-[repeat(auto-fill,minmax(12rem,1fr))] items-start gap-4 font-mono">
            {skillsData.map((category) => (
              <div key={category.id} className="border border-gray text-sm">
                <h3 className="border-b border-gray p-2 font-bold text-white tracking-wide">
                  {category.title}
                </h3>

                <div className="p-2 text-gray flex flex-wrap gap-x-2 gap-y-1">
                  {category.skills?.map((skill, index) => (
                    <span key={index}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <FunFacts />
    </div>
  );
};

export default AboutMe;
