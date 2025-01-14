class EventView {
  renderEventList(events) {
    return `
            <ul>
                ${events.map((event) => `<li>${event.name}</li>`).join("")}
            </ul>
        `;
  }

  renderEventDetail(event) {
    return `
            <div>
                <h1>${event.name}</h1>
                <p>${event.description}</p>
                <p>${event.date}</p>
            </div>
        `;
  }
}

module.exports = new EventView();
