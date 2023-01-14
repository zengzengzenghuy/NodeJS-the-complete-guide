exports.getPosts = (req, res, next) => {
  res.status(200).json({ post: [{ title: "Hello" }] });
};

exports.createPost = (req, res, next) => {
  const _title = req.body.title;
  const _content = req.body.content;

  res.status(201).json({
    message: "Post created successfully",
    post: { id: new Date().toISOString(), title: _title, content: _content },
  });
};
