import {destinations, AllOffers, activity, transfer} from '../data/events';
import moment from 'moment';

export const eventEdit = (eventEdition) => {
  const {destination, type, date, price, isFavorite} = eventEdition[0];

  const dateFrom = moment(date.from).format(`DD/MM/YY h:mm`);
  const dateTo = moment(date.to).format(`DD/MM/YY h:mm`);

  const getEventType = (name) => {
    return `<div class="event__type-item">
      <input id="event-type-${name}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value=${name}>
      <label class="event__type-label  event__type-label--${name}" for="event-type-${name}-1">${name}</label>
    </div>`;
  };

  const getOfferItem = (item) => {
    return `<div class="event__offer-selector">
                <input class="event__offer-checkbox  visually-hidden" id="event-offer-${item.name}" type="checkbox" name="event-offer-${item.name}">
                   <label class="event__offer-label" for="event-offer-${item.name}">
                  <span class="event__offer-title">${item.name}</span>
                 +
               €&nbsp;<span class="event__offer-price">${item.price}</span>
            </label>
         </div>`;
  };

  return `<form class="event  event--edit" action="#" method="post">
                    <header class="event__header">
                      <div class="event__type-wrapper">
                        <label class="event__type  event__type-btn" for="event-type-toggle-1">
                          <span class="visually-hidden">Choose event type</span>
                          <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="Event type icon">
                        </label>
                        <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">
                        <div class="event__type-list">
                          <fieldset class="event__type-group">
                            <legend class="visually-hidden">Transfer</legend>
                            
                           ${ transfer.map((item) => getEventType(item))}
                           
                          </fieldset>
                          <fieldset class="event__type-group">
                            <legend class="visually-hidden">Activity</legend>

                         ${ activity.map((item) => getEventType(item))}
                            
                          </fieldset>
                        </div>
                      </div>

                      <div class="event__field-group  event__field-group--destination">
                        <label class="event__label  event__type-output" for="event-destination-1">
                          ${type || transfer[0]}
                        </label>
                        <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value=${destination || 0} list="destination-list-1">
                        
                        <datalist id="destination-list-1">
                         ${ destinations.map((item) => `<option value=${item} key=${item}>${item}</option>`)}
                        </datalist>

                      </div>

                      <div class="event__field-group  event__field-group--time">
                        <label class="visually-hidden" for="event-start-time-1">
                          From
                        </label>
                        <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value=${dateFrom || `0`}>
                        —
                        <label class="visually-hidden" for="event-end-time-1">
                          To
                        </label>
                        <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value=${dateTo || `0`}>
                      </div>

                      <div class="event__field-group  event__field-group--price">
                        <label class="event__label" for="event-price-1">
                          <span class="visually-hidden">Price</span>
                          €
                        </label>
                        <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value=${price || 160}>
                      </div>

                      <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
                      <button class="event__reset-btn" type="reset">Delete</button>

                      <input id="event-favorite-1" class="event__favorite-checkbox  visually-hidden" type="checkbox" name="event-favorite" }
                      <label class="event__favorite-btn" for="event-favorite-1">
                        <span class="visually-hidden">Add to favorite</span>
                      </label>
                      <button class="event__rollup-btn" type="button">
                        <span class="visually-hidden">Open event</span>
                      </button>
                    </header>

                    <section class="event__details">
                      <section class="event__section  event__section--offers">
                        <h3 class="event__section-title  event__section-title--offers">Offers</h3>

                        <div class="event__available-offers">
                        
                        ${ AllOffers.map((item) => getOfferItem(item))}
                        
                        </div>
                      </section>
                    </section>
                  </form>`;
};
