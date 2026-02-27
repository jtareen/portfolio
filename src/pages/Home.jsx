import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getHomeProjects } from "../services/projectService";
import { getSkills } from "../services/skillService";

import ContactsSection from "../components/ContactsSection";
import ProjectCard from "../components/ProjectCard";
import AboutMe from "../components/AboutMeSection";
import Button from "../components/Button";

import OutlinedLogo from "../assets/LogoOutline.png";
import profile from "../assets/profile.png";
import Dots from "../assets/icons/Dots.svg";

const Home = () => {
  const [projects, setProjects] = useState([]);
  const [skillColumns, setSkillColumns] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAllData = async () => {
      setIsLoading(true);

      try {
        const [projectsData, skillsData] = await Promise.all([
          getHomeProjects(),
          getSkills(),
        ]);

        setProjects(projectsData || []);
        setSkillColumns(skillsData || []);
      } catch (error) {
        console.error("Error fetching data from Sanity:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAllData();
  }, []);

  // 1. Distribute your raw skills array into 3 columns
  const distributeToColumns = (cards, numCols) => {
    const cols = Array.from({ length: numCols }, () => []);
    cards.forEach((card, index) => {
      cols[index % numCols].push(card);
    });
    return cols;
  };

  const columns = distributeToColumns(skillColumns, 3);

  return (
    <>
      {/* Hero */}
      <section className="flex flex-col sm:flex-row my-5 sm:my-15">
        <div className="sm:flex-1 flex flex-col justify-center">
          <h1 className="text-[32px] font-semibold text-white">
            Jawad Tareen is a{" "}
            <span className="text-primary">full-Stack developer</span> and{" "}
            <span className="text-primary">ML engineer</span>
          </h1>
          <p className="text-[16px] font-regular text-gray py-5">
            He engineers scalable full stack and AI-powered solutions
          </p>
          <a href="#contacts">
            <Button>Contact Me !!</Button>
          </a>
        </div>
        <div className="relative flex flex-col py-4 items-center sm:flex-1 justify-center">
          <img src={profile} alt="profile" className="w-92 z-10" />
          <p className="bg-background text-gray z-30 font-6 border border-white w-78 sm:w-84 py-1 px-1">
            <span className="inline-block align-middle h-[16px] w-[16px] mr-1 bg-primary"></span>
            Currently working on{" "}
            <span className="text-white font-semibold">AI-Powered Brain Tumor Diagnosis & Assistance System Using LLMs</span>
          </p>
          <img
            src={Dots}
            alt="Dots"
            className="absolute z-20 bottom-18 right-8 md:bottom-25 md:right-18 xl:right-24 w-16 h-16 md:w-18 md:h-18"
          />
          <img
            src={OutlinedLogo}
            alt="Dots"
            className="absolute z-0 top-14 left-6 w-32 h-32 lg:w-44 lg:h-44 2xl:left-22"
          />
        </div>
      </section>
      {/* Projects */}
      <section id="projects" className="py-12">
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-2xl text-white font-bold whitespace-nowrap">
            <span className="text-primary">#</span>projects
          </h2>

          <div className="h-px bg-primary w-42 md:w-80 lg:w-120"></div>

          <div className="flex-1 h-px"></div>

          <Link
            to="/projects"
            className="text-sm text-gray hover:text-white whitespace-nowrap"
          >
            View all →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading ? (
            <p className="text-gray">Loading projects...</p>
          ) : projects.length === 0 ? (
            <p className="text-gray">No projects to show</p>
          ) : (
            projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))
          )}
        </div>
      </section>
      {/* Skills */}
      <section id="skills" className="py-12">
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-2xl text-white font-bold whitespace-nowrap">
            <span className="text-primary">#</span>skills
          </h2>
          <div className="h-px bg-primary w-32 md:w-42 lg:w-56"></div>
          <div className="flex-1 h-px"></div>
        </div>
        <div className="flex flex-col md:flex-row gap-10 lg:gap-20">
          {/* Left Side - Abstract Geometric Shapes */}
          <div className="hidden md:block w-1/3 relative min-h-[300px]">
            {/* Top Left Dots */}
            <svg
              className="absolute top-4 left-4"
              width="63"
              height="63"
              viewBox="0 0 63 63"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 2H4V4H2V2ZM16 2H18V4H16V2ZM30 2H32V4H30V2ZM44 2H46V4H44V2ZM58 2H60V4H58V2ZM2 16H4V18H2V16ZM16 16H18V18H16V16ZM30 16H32V18H30V16ZM44 16H46V18H44V16ZM58 16H60V18H58V16ZM2 30H4V32H2V30ZM16 30H18V32H16V30ZM30 30H32V32H30V30ZM44 30H46V32H44V30ZM58 30H60V32H58V30ZM2 44H4V46H2V44ZM16 44H18V46H16V44ZM30 44H32V46H30V44ZM44 44H46V46H44V44ZM58 44H60V46H58V44ZM2 58H4V60H2V58ZM16 58H18V60H16V58ZM30 58H32V60H30V58ZM44 58H46V60H44V58ZM58 58H60V60H58V58Z"
                fill="#ABB2BF"
              />
            </svg>

            {/* Top Right Square */}
            <div className="absolute top-0 right-8 w-[86px] h-[86px] border border-gray"></div>

            {/* Interlocking Primary Squares (Bottom Left) */}
            <div className="absolute bottom-4 left-8 w-[52px] h-[52px] border border-primary z-10"></div>
            <div className="absolute bottom-10 left-14 w-[52px] h-[52px] border border-primary"></div>

            {/* Bottom Right Dots */}
            <svg
              className="absolute bottom-26 right-24"
              width="63"
              height="63"
              viewBox="0 0 63 63"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 2H4V4H2V2ZM16 2H18V4H16V2ZM30 2H32V4H30V2ZM44 2H46V4H44V2ZM58 2H60V4H58V2ZM2 16H4V18H2V16ZM16 16H18V18H16V16ZM30 16H32V18H30V16ZM44 16H46V18H44V16ZM58 16H60V18H58V16ZM2 30H4V32H2V30ZM16 30H18V32H16V30ZM30 30H32V32H30V30ZM44 30H46V32H44V30ZM58 30H60V32H58V30ZM2 44H4V46H2V44ZM16 44H18V46H16V44ZM30 44H32V46H30V44ZM44 44H46V46H44V44ZM58 44H60V46H58V44ZM2 58H4V60H2V58ZM16 58H18V60H16V58ZM30 58H32V60H30V58ZM44 58H46V60H44V58ZM58 58H60V60H58V58Z"
                fill="#ABB2BF"
              />
            </svg>

            {/* Bottom Far Right Small Square */}
            <div className="absolute bottom-6 right-4 w-[52px] h-[52px] border border-gray"></div>
          </div>

          {/* Right Side - Skills Grid */}
          <div className="w-full md:w-2/3 flex flex-col sm:flex-row gap-4">
            {skillColumns.length === 0 ? (
              <p className="text-gray">No skills to show</p>
            ) : (
              // Outer loop: Create the 3 columns
              columns.map((column, colIndex) => (
                <div key={colIndex} className="flex-1 flex flex-col gap-4">
                  {/* Inner loop: Place the category cards inside each column */}
                  {column.map((category) => (
                    <div key={category.id} className="border border-gray h-fit">
                      <h3 className="p-2 border-b border-gray text-white font-semibold">
                        {category.title}
                      </h3>

                      <div className="p-2 text-gray leading-relaxed flex flex-wrap gap-2">
                        {category.skills?.join(" ")}
                      </div>
                    </div>
                  ))}
                </div>
              ))
            )}
          </div>
        </div>
      </section>
      <AboutMe />
      <ContactsSection />
    </>
  );
};

export default Home;
