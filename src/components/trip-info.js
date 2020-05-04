import AbstractComponent from "./abstract-component.js";

const tripInfoTemplate = () => {
  const tripRoute = `Amsterdam — Chamonix — Geneva`;
  const tripDates = `Mar 18&nbsp;—&nbsp;20`;
  return `<div class="trip-info__main">
              <h1 class="trip-info__title">${tripRoute}</h1>

              <p class="trip-info__dates">${tripDates}</p>
           </div>`;
};

export default class TripInfo extends AbstractComponent {
  getTemplate() {
    return tripInfoTemplate();
  }
}

