import AbstractComponent from "./abstract-component.js";

const getEventOffer = (offer) => {
  return (
    `<li class="event__offer">
          <span class="event__offer-title">${offer.name}</span>
                    +
         €&nbsp;<span class="event__offer-price">${offer.price}</span>
      </li>`);
};

const createEventPointTemplate = (event) => {
  const {description, destination, type, date, offers, price, duration} = event;
  const dateFrom = `${date.from.getHours()} : ${date.from.getMinutes()}`;
  const dateTo = `${date.to.getHours()}:${date.to.getMinutes()}`;

  // console.log(description);

  return `<li class="trip-events__item">
                  <div class="event">
                    <div class="event__type">
                      <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type icon">
                    </div>
                    <h3 class="event__title">${type} in ${destination}</h3>

                    <div class="event__schedule">
                      <p class="event__time">
                        <time class="event__start-time" datetime="${date.from}">${dateFrom}</time>
                        —
                        <time class="event__end-time" datetime="${date.to}">${dateTo}</time>
                      </p>
                      <p class="event__duration">${duration} часов</p>
                    </div>

                    <p class="event__price">
                      €&nbsp;<span class="event__price-value">${price}</span>
                    </p>

                    <h4 class="visually-hidden">Offers:</h4>
                    <ul class="event__selected-offers">
                     ${offers.map((offer) => getEventOffer(offer))}
                    </ul>

                    <button class="event__rollup-btn" type="button">
                      <span class="visually-hidden">Open event</span>
                    </button>
                  </div>
                </li>`;
};


export default class EventPoint extends AbstractComponent {
  constructor(event) {
    super();

    this._event = event;
  }

  getTemplate() {
    return createEventPointTemplate(this._event);
  }

  setOpenButtonClickHandler(handler) {
    this.getElement().querySelector(`.event__rollup-btn`)
      .addEventListener(`click`, handler);
  }
}

