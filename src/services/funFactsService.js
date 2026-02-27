import client from "../sanityClient"

export const getFunFacts = async () => {
  const query = `*[_type == "funFacts"] {
    "id": _id,
    fact
  }`;

  const data = await client.fetch(query);
  return data || [];
};
