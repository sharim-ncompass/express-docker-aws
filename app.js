import express from "express";
const app = express();
app.use(express.json());

const PORT = 3000;


app.get("/", (req, res) => {
  res.send("Homepage");
});

app.listen(PORT, () => {
  console.log(`Server Running on Port ${PORT}`);
});