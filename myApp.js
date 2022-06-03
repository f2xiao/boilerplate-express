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


const mySecret = process.env["MESSAGE_STYLE"];
console.log(mySecret)
app.get('/json', (req, res) => {
 let message = mySecret == "uppercase" ? "Hello json".toUpperCase() : "Hello json";
  res.json({
    message
  })
});


































 module.exports = app;
