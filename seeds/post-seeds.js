const { Post } = require('../models');

const postdata = [
  {
    title: 'sample 1',
    post_content: 'Testing post content 1',
    user_id: 1
  },
  {
    title: 'sample 2',
    post_content: 'Testing post content 2',
    user_id: 2
  },
  {
    title: 'sample 3',
    post_content: 'Testing post content 3',
    user_id: 3
  },
  {
    title: 'sample 4',
    post_content: 'Testing post content 4',
    user_id: 4
  },
  {
    title: 'sample 5',
    post_content: 'Testing post content 5',
    user_id: 5
  },
  {
    title: 'sample 6',
    post_content: 'Testing post content 6',
    user_id: 6
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
