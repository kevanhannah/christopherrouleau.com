export default {
  name: 'excerpt',
  type: 'text',
  rows: 3,
  title: 'Excerpt',
  description:
    'This ends up on summary pages, on Google, when people share your post in social media.',
  validation: (Rule) =>
    Rule.max(200).warning('Shorter excerpts are usually better.'),
};
