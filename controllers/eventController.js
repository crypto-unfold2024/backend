const eventModel = require("../models/eventModel");

class EventController {
  async getAllEvents(req, res) {
    const events = await eventModel.getAllEvents();
    res.json(events);
  }

  async getEventById(req, res) {
    const event = await eventModel.getEventById(req.params.id);
    if (event) {
      res.json(event);
    } else {
      res.status(404).send("Event not found");
    }
  }

  async addEvent(req, res) {
    const newEvent = req.body;
    const savedEvent = await eventModel.addEvent(newEvent);
    res.status(201).json(savedEvent);
  }
}

module.exports = new EventController();
