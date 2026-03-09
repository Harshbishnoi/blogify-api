const express = require("express");
const app = express();

const postsRoutes = require("./routes/posts.routes");

app.use("/api/v1/posts", postsRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});