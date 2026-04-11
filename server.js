const express = require("express");
const app = express();

// 🔥 THIS IS THE MAIN THING
app.use(express.static("public"));

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});