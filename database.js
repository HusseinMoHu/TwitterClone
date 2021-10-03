const mongoose = require("mongoose");
mongoose.set("useNewUrlParser", true);
mongoose.set("useUnifiedTopology", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useUnifiedTopology", true);
const dotenv = require("dotenv");

dotenv.config();

const url = process.env.MONGO_URL;

class Database {
  constructor() {
    this.connect();
  }

  connect() {
    mongoose
      .connect(url)
      .then(() => {
        console.log("database connection successful");
      })
      .catch((err) => {
        console.log("database connection error " + err);
      });
  }
}

module.exports = new Database();
