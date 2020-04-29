const mongoose = require('mongoose');

const connectionString = process.env.MONGODB_URI || "mongodb://localhost/discussion-board";

mongoose.connect(connectionString, { useNewUrlParser: true})
  .then(() => {
    console.log("connected to mongo at: " + connectionString);
  }) .catch (error => {
    console.log(`Failed to connect to database due to: ${error}`)
  })

module.exports = mongoose