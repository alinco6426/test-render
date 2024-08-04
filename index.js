const express = require("express");

const app = express()

const cors = require("cors");

const port =  8000;

app.use(cors());

app.use(express.json())

app.get("/" ,  (req , res) => {
     res.send("Hello from server")
});

app.get("/movies" , (req, res) => {
     const movies = [
          { id: 1, name: "Movie 1" },
          { id: 2, name: "Movie 2" },
     ];
     res.json(movies);
})
app.listen(port ,() => {
     console.log("server running" , port);
});

