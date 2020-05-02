import {createElement} from "../utils.js";

const createPriceTemplate = (price) => {
  return `<p class="trip-info__cost">
              Total: €&nbsp;<span class="trip-info__cost-value">${price}</span>
           </p>`;
};

export default class TripPrice {
  constructor(price) {
    this._price = price;
    this._element = null;
  }

  getTemplate() {
    return createPriceTemplate(this._price);
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
