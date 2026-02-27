import { urlFor } from "../lib/imageBuilder";
import Button from "./Button";

const ProjectCard = ({ project }) => {
  return (
    <div className="border border-gray overflow-hidden self-start h-auto">
      {project.img && (
        <img
          src={urlFor(project.img).width(500).auto("format").url()}
          alt={project.title}
          className="w-full h-40 object-cover"
        />
      )}

      <div className="px-4 pb-4 flex flex-col gap-3">
        <p className="text-sm text-gray border-y-2 border-gray py-2 px-4 -mx-4">
          {project.techStack.join(" ")}
        </p>

        <h3 className="text-xl text-white font-semibold">{project.title}</h3>

        <p className="text-sm text-gray">{project.description}</p>

        <div className="flex gap-3 mt-2">
          {project.liveLink && (
            <Button onClick={() => window.open(project.liveLink, "_blank")}>
              Live ↗
            </Button>
          )}

          {project.githubLink && (
            <Button
              variant="secondary"
              onClick={() => window.open(project.githubLink, "_blank")}
            >
              Github →
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
