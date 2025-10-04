const express = require('express')
const app = express()
const port = 3000;

app.use(express.static(__dirname));


app.get('/', (req, res) => {
    res.send(`Pseudo-Linkedin connections retriver`);
});

// simulating getting connections with the user param
app.get("/connections/:user", (req, res) => {
  const { user } = req.params;

  // using the random function since this is just a simulation
  const connections = Math.floor(Math.random() * 10000);
  res.json({ user, connections });
});

// without the user param
app.get("/connections", (req, res) => {
    res.send("Please provide a username");
    res.send("Example: connections/jake")
});

// starting the server
app.listen(port, () => {
    console.log(`server running on port ${port}`);
});
