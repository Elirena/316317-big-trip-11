import {createElement} from "../utils.js";

const createPriceTemplate = () => {
  const tripPrice = 1200;
  return `<p class="trip-info__cost">
              Total: €&nbsp;<span class="trip-info__cost-value">${tripPrice}</span>
           </p>`;
};

export default class TripPrice {
  constructor() {

    this._element = null;
  }

  getTemplate() {
    return createPriceTemplate();
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
