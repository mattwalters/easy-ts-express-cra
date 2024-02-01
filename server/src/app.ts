import express from "express";

const app = express();
const port = 4000;

app.use(express.json()); // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies

app.get("/", (_req, res) => {
  res.send("Hello, World!");
});

app.get("/time", (_req, res) => {
  res.json({ time: new Date() });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
