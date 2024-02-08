const mongoose = require("mongoose");

const connectDb = (url) => {
  return mongoose.connect(url, console.log("CONNECTED TO THE DB..."), {
    useNewUrlParser: true,
  });
};

module.exports = connectDb;
