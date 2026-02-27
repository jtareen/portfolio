import client from "../sanityClient";

export const getSkills = async () => {
  const query = `*[_type == "skills"] | order(priority asc) {
    "id": _id,
    title,
    priority,
    skills
  }`;
  
  const data = await client.fetch(query);
  return data || []; 
};