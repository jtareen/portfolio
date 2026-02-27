export default {
  name: 'project',
  title: 'Projects',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'img',
      title: 'Project Image',
      type: 'image',
      options: {
        hotspot: true, // Allows you to crop the image in the CMS
      },
    },
    {
      name: 'techStack',
      title: 'Tech Stack',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'liveLink',
      title: 'Live Link',
      type: 'url',
    },
    {
      name: 'githubLink',
      title: 'GitHub Link',
      type: 'url',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Complete App', value: 'complete-app' },
          { title: 'Small Projects', value: 'small-projects' },
        ],
      },
    },
    {
      name: 'categoryPriority',
      title: 'Category Priority',
      type: 'number', // Changed to number for easier sorting
      description: 'Lower numbers display first (e.g., 1 for top section)',
    },
  ],
};