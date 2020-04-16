export const createEventForm = (event) => {
  const {description, destination, type, date, offer, price, duration, isFavorite} = event;

  console.log(description);
  return `
              <li class="trip-events__item">
                  <div class="event">
                    <div class="event__type">
                      <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type icon">
                    </div>
                    <h3 class="event__title">${type} in ${destination}</h3>

                    <div class="event__schedule">
                      <p class="event__time">
                        <time class="event__start-time" datetime="${date.from}">${date.from.getHours()}:${date.from.getMinutes()}</time>
                        —
                        <time class="event__end-time" datetime="${date.to}">${date.to.getHours()}:${date.to.getMinutes()}</time>
                      </p>
                      <p class="event__duration">${duration} часов</p>
                    </div>

                    <p class="event__price">
                      €&nbsp;<span class="event__price-value">${price}</span>
                    </p>

                    <h4 class="visually-hidden">Offers:</h4>
                    <ul class="event__selected-offers">
                      <li class="event__offer">
                        <span class="event__offer-title">${offer.name}</span>
                        +
                        €&nbsp;<span class="event__offer-price">${offer.price}</span>
                       </li>
                    </ul>

                    <button class="event__rollup-btn" type="button">
                      <span class="visually-hidden">Open event</span>
                    </button>
                  </div>
                </li>`;
};

const eventForm = (events) => {
  const eventData = events.map((item) => createEventForm(item)).join(`\n`);
  return ` ${eventData} `;
};
export {eventForm};
