const express = require("express");
const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://luck22y:userlucky@cluster0.2h0vmxh.mongodb.net/blog?retryWrites=true&w=majority')
// mongoose.connect("mongodb://127.0.0.1:27017/blog");

const db = mongoose.connection;

db.on("error", console.log.bind(console, `Error connecting to Database`));

db.once("open", () => {
  console.log(`Connected to Database:: MongoDB`);
});

module.exports = db;
