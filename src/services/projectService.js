import client from "../sanityClient";

export const getHomeProjects = async () => {
  const query = `*[_type == "project" && category == "complete-app"] | order(categoryPriority asc) [0...3] {
    "id": _id,
    title,
    description,
    img,
    techStack,
    liveLink,
    githubLink,
    category
  }`;
  return await client.fetch(query);
};

export const getAllProjects = async () => {
  const query = `*[_type == "project"] | order(categoryPriority asc) {
    "id": _id,
    title,
    description,
    img,
    techStack,
    liveLink,
    githubLink,
    category,
    categoryPriority
  }`;
  return await client.fetch(query);
};