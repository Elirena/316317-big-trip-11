import {createElement} from "../utils.js";

const tripInfoTemplate = () => {
  const tripRoute = `Amsterdam — Chamonix — Geneva`;
  const tripDates = `Mar 18&nbsp;—&nbsp;20`;
  return `<div class="trip-info__main">
              <h1 class="trip-info__title">${tripRoute}</h1>

              <p class="trip-info__dates">${tripDates}</p>
           </div>`;
};


export default class TripPrice {
  constructor() {

    this._element = null;
  }

  getTemplate() {
    return tripInfoTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
