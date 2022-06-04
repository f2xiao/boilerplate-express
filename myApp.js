let express = require('express');
let app = express();

// app.get("/", (req, res) => {
//   res.send("Hello Express");
// });

// logger
app.use((req, res, next) =>{
	const log = `${req.method} ${req.path} - ${req.ip}`;
	console.log(log);
	next()
})

app.get("/", (req, res) => {
  const absolutePath = __dirname + "/views/index.html";
  res.sendFile(absolutePath);
});

// serve static assets
const absolutePath = __dirname + "/public";
app.use("/public",express.static(absolutePath));

// use environment variables
const mySecret = process.env.MESSAGE_STYLE;
console.log(mySecret)
app.get('/json', (req, res) => {
  let message = "Hello json";
  if(mySecret == "uppercase") message = message.toUpperCase();
  res.json({
    message
  })
});

// chaining middleware with route handler
app.get('/now', (req, res, next)=>{
	req.time = new Date().toString();
  next();
},(req,res)=>{
	res.json({
	time: req.time
})
})


































 module.exports = app;
