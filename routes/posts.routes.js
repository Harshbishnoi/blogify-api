const express = require("express");
const router = express.Router();

// Import controller
const { getAllPosts } = require("../controllers/posts.controller");

// Route using controller
router.get("/", getAllPosts);

module.exports = router;