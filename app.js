const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const eventController = require("./controllers/eventController");
const authMiddleware = require("./middleware/authMiddleware");
require("dotenv").config();

const app = express();
app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Event routes
app.get("/events", (req, res) => eventController.getAllEvents(req, res));
app.get("/events/:id", (req, res) => eventController.getEventById(req, res));
app.post("/events", authMiddleware, (req, res) =>
  eventController.addEvent(req, res)
);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
