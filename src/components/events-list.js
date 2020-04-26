import {createElement} from "../utils.js";

const generateAllDays = (days, renderPoint) => {
  return Object.values(days)
    .map((events, key) => generateDay(events, renderPoint, key))
    .join(``);
};

const generateDay = (events, index) => {
  return `<li class="trip-days__item  day">
       <div class="day__info">
           <span class="day__counter">${index + 1}</span>
           <time class="day__date" datetime="2019-03-18">MAR 18</time>
       </div>
       <ul class="trip-events__list">
          ${events}
      </ul>
    </li>`;
};

export default class EventsList {
  constructor(days) {
    this._days = days;
  }

  getTemplate() {
    return generateAllDays(this._days);
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
