const router = require("express").Router();
const { Post, User, Comment } = require("../models");

// get/findAll posts for homepage
router.get("/", (req, res) => {
  console.log("======================");
  Post.findAll({
    attributes: ["id", "contents", "title", "created_at"],
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbPostData) => {
      const posts = dbPostData.map((post) => post.get({ plain: true }));

      res.render("homepage", {
        posts,
        signedIn: req.session.signedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get/findOne post
router.get("/post/:id", (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "contents", "title", "created_at"],
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }

      const post = dbPostData.get({ plain: true });

      res.render("single-post", {
        post,
        signedIn: req.session.signedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get sign-up view
router.get("/sign-in-prompt", (req, res) => {
  res.render("sign-in-prompt");
});

// get sign in view
router.get("/sign-in", (req, res) => {
  if (req.session.signedIn) {
    res.redirect("/");
    return;
  }

  res.render("sign-in");
});

// get sign-up view
router.get("/sign-up", (req, res) => {
  res.render("sign-up");
});

module.exports = router;
