const express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const Post = require("../model/posts");
const postController = require("../controllers/postController");

router.get("/", postController.getPosts);
router.post("/", postController.postPosts);
router.delete("/", postController.deleteAllposts);
router.delete("/:id", postController.deletePosts);
router.patch("/:id", postController.updatePosts);

module.exports = router;
