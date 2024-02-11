const express = require('express');
const { exec } = require('child_process');

const app = express();
const PORT = 3001;

// Endpoint to capture an image
app.get('/capture', (req, res) => {
  exec('raspistill -o image.jpg', (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
    res.sendFile(__dirname + '/image.jpg');
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
