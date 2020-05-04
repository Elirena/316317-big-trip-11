import AbstractComponent from "./abstract-component.js";

const createPriceTemplate = (price) => {
  return `<p class="trip-info__cost">
              Total: €&nbsp;<span class="trip-info__cost-value">${price}</span>
           </p>`;
};

export default class TripPrice extends AbstractComponent {
  constructor(price) {
    super();

    this._price = price;
  }

  getTemplate() {
    return createPriceTemplate(this._price);
  }
}

