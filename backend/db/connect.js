const mongoose = require("mongoose");
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI);

const userSchema = new mongoose.Schema({
    name: String,
    description: String,
    linkedin: String,
    github: String
})

module.exports = mongoose.model("User", userSchema);