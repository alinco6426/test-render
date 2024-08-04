const express = require("express");

const app = express()

const cors = require("cors");

const port =  8000;

app.use(cors())

app.get("/" ,  (req , res) => {
     res.send("Hello from server")
})
app.listen(port ,() => {
     console.log("server running" , port);
});

