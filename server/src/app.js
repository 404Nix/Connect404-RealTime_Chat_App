import express from "express";

const app = express();

// test route
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

export default app;