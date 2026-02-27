export default {
  name: 'funFacts',
  type: 'document',
  title: 'Fun Facts',
  fields: [
    {
      name: 'fact',
      type: 'array',
      title: 'Fun Fact Text',
      of: [
        {
          type: 'block',
          styles: [],
          marks: {
            decorators: [{ title: 'Strong', value: 'strong' }],
            annotations: [],
          },
          lists: [],
        },
      ],
      description: 'The text of the fun fact. Use bold for highlighted words.',
    },
  ],
};