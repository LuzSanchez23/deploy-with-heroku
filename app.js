// ===============================DEPENDENCIES======================================
const express = require('express');
const path = require("path");
const app = express()
const PORT = Process.env.PORT || 5000;
// ===============================Basic Route======================================
app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "index.html"))
});

// =====================================Start Server==========================

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
  })
