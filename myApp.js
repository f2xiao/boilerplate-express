let express = require('express');
let app = express();

// app.get("/", (req, res) => {
//   res.send("Hello Express");
// });

app.get("/", (req, res) => {
  const absolutePath = __dirname + "/views/index.html";
  res.sendFile(absolutePath);
});

const absolutePath = __dirname + "/public";
app.use("/public",express.static(absolutePath));





































 module.exports = app;
