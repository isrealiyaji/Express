// const express = require("express");
// const app = express();

// app.get("/", (req, res) => {
//   res.send("Welcome to Jaji profile");
// });

// app.listen(4000, () => {
//   console.log("listening to port 4000");
// });
//app.js

// const express = require("express");

/////////////////////////////////////////////////////////////////////////////////
// const app = express();
// const PORT = 4000;

// app.get("/", (req, res) => {
//   res.status(200);
//   res.send("Welcome to root URL of Server");
// });

// app.listen(PORT, (error) => {
//   if (!error)
//     console.log(
//       "Server is Successfully Running, and App is listening on port " + PORT
//     );
//   else console.log("Error occurred, server can't start", error);
// });

//app.js

////////////////////////////////////////////////////////////////
///////////////////////////////////////
// app.js

// app.js

// const express = require("express");
// const app = express();
// const PORT = 4000;

// app.use(express.json());
// app.post("/postRequest", (req, res) => {
//   const { name } = req.body;

//   res.send(`Welcome ${name}`);
// });

// app.listen(PORT, (error) => {
//   if (!error)
//     console.log(
//       "Server is Successfully Running, and App is listening on port " + PORT
//     );
//   else console.log("Error occurred, server can't start", error);
// });

const express = require("express");

const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.use(express.urlencoded());

app.use(express.static("public"));

app.get("/form", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/formPost", (req, res) => {
  console.log(req.body);
});

app.listen(port, () => {
  console.log(`Server Started at http://localhost:${port}`);
});
