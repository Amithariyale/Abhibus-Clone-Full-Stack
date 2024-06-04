const mongoose = require("mongoose");
const { buses } = require("../../dummyData");
const Bus = require("../models/busSchema");

const connectDataBaseServer = async () => {
  try {
    await mongoose.connect(process.env.DB_HOST);
    console.log("connected to mongoDB", process.env.DB_HOST);
    // Bus.insertMany(buses);
  } catch (error) {
    console.error("Connection to mongoDB failed", error.message);
  }
};

module.exports = connectDataBaseServer;
