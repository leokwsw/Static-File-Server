const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors())
app.use(express.static("./files"))

app.get("/", (req, res) => {
  res.send("Hello World!")
})

app.listen(8080, () => {
  console.log(`Running on http://localhost:8080`)
});
