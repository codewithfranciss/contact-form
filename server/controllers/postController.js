const Post = require('../models/Post');

// @route    GET api/posts
// @desc     Get all posts
// @access   Public
exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// @route    POST api/posts
// @desc     Create a post
// @access   Public
exports.createPost = async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const newPost = new Post({
      name,
      email,
      message,
    });

    const post = await newPost.save();
    res.json(post);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
