const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  name: String,
  description: String,
  date: Date,
  bannerImage: String,
});

const Event = mongoose.model("Event", eventSchema);

class EventModel {
  async getAllEvents() {
    return await Event.find({});
  }

  async getEventById(id) {
    return await Event.findById(id);
  }

  async addEvent(event) {
    const newEvent = new Event(event);
    return await newEvent.save();
  }
}

module.exports = new EventModel();
