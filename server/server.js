const express = require('express');

const app = express()

app.get('/',function(req,res) {
    res.sendFile(path.join(__dirname, '../helloWorld.html'));
  });

const port = process.env.PORT || 4000

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})