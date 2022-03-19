// ===============================DEPENDENCIES======================================
const express = require('express');
const path = require("path");
const app = express()
const PORT = 5000;

// use the express-static middleware
app.use(express.static("public"))

// ===============================Basic Route======================================
app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "index.html"))
});

// =====================================Start Server==========================

app.listen(process.env.PORT || PORT, () => {
    console.log(`App listening on port ${PORT}`)
  })

