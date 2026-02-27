import { useEffect, useState } from "react";

import { getAllProjects } from "../services/projectService";

import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const [groupedProjects, setGroupedProjects] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchAndGroup = async () => {
      try {
        const data = await getAllProjects();

        // Group projects by category: { "complete-app": [...], "small-projects": [...] }
        const groups = data.reduce((acc, project) => {
          const cat = project.category || "Other";
          if (!acc[cat]) acc[cat] = [];
          acc[cat].push(project);
          return acc;
        }, {});

        setGroupedProjects(groups);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchAndGroup();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="py-5 sm:py-8">
        <h2 className="text-2xl text-white font-bold whitespace-nowrap">
          <span className="text-primary">/</span>projects
        </h2>
        <p className="text-white font-6 pt-2">List of my projects</p>
      </section>

      {isLoading ? (
        <p className="text-gray py-10">Loading projects...</p>
      ) : Object.keys(groupedProjects).length === 0 ? (
        <p className="text-gray py-10">No projects to show</p>
      ) : (
        // Loop through each category group
        Object.entries(groupedProjects).map(([category, projects]) => (
          <section key={category} id={category} className="py-8">
            <div className="flex items-center gap-4 mb-10">
              <h2 className="text-2xl text-white font-bold whitespace-nowrap capitalize">
                <span className="text-primary">#</span>
                {category.toLocaleLowerCase()}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>
        ))
      )}
    </div>
  );
};

export default Projects;
