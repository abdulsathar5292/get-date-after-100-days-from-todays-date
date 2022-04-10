const addDays = require("date-fns/addDays");
const getDays = (days) => {
  let newDate = addDays(new Date(), days);

  return `${newDate.date() / newDate.getMonth() + 1 / newDate.getFullYear()}`;
};

const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.send(getDays(100));
});

module.exports = app;
