const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/desktopNoteDb")
  .then(() => {
    console.log("DataBase Connected");
  })
  .catch((err) => {
    console.log(`Db Connection err:- ${err.message}`);
  });

module.exports = mongoose;
