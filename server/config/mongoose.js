const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const db_url = process.env.DB_URL;

mongoose.connect(db_url);

const db = mongoose.connection;

db.on("error", console.log.bind(console, `Error connecting to Database`));

db.once("open", () => {
  console.log(`Connected to Database:: MongoDB`);
});

module.exports = db;
