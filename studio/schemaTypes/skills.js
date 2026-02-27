export default {
  name: "skills",
  title: "Skills",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Category Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "priority",
      title: "Priority",
      type: "number",
      description: "Lower number appears first",
      validation: (Rule) => Rule.required().min(1),
    },
    {
      name: "skills",
      title: "Skills",
      type: "array",
      of: [{ type: "string" }],
      validation: (Rule) => Rule.required().min(1),
    },
  ],
  orderings: [
    {
      title: "Priority (Low to High)",
      name: "priorityAsc",
      by: [{ field: "priority", direction: "asc" }],
    },
  ],
};