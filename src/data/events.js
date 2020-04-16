import {getDescription} from './place-description';
import {eventForm} from '../components/event-form';

const types = [`Taxi`, `Bus`, `Train`, `Ship`, `Transport`, `Drive`, `Flight`, `Check`, `Sightseeing`, `Restaurant`];
export const destinations = [`Amsterdam`, `Geneva`, `Chamonix`];

export const offers = [
  {name: `Add luggage`, price: 30, isChecked: false},
  {name: `Switch to comfort class`, price: 100, isChecked: false},
  {name: `Add meal`, price: 15, isChecked: false},
  {name: `Choose seats`, price: 5, isChecked: false},
  {name: `Travel by train`, price: 40, isChecked: false},
];


export const transfer = [`taxi`, `bus`, `train`, `ship`, `transport`, `drive`, `flight`];
export const activity = [`check-in`, `sightseeing`, `restaurant`];

const getRandomArrayItem = (array) => {
  const randomIndex = getRandomIntegerNumber(0, array.length);
  return array[randomIndex];
};

const getRandomIntegerNumber = (min, max) => {
  return min + Math.floor(Math.random() * (max - min));
};

const getRandomDate = (start, end) => {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};

const generateEvent = () => {
  const picture = `http://picsum.photos/248/152?r=${Math.random()}`;
  const description = getDescription();
  const destination = getRandomArrayItem(destinations);
  const offer = getRandomArrayItem(offers);
  const type = getRandomArrayItem(types);
  const price = getRandomIntegerNumber(20, 200);

  const today = new Date();
  const randomDay = getRandomDate(new Date(today.getFullYear(), today.getMonth(), 1), today);
  const futureDay = new Date();
  futureDay.setTime(randomDay.getTime() + (getRandomIntegerNumber(2, 20) * 60 * 60 * 1000));
  const isFavorite = false;
  const date = {
    from: randomDay,
    to: futureDay
  };

  const duration = Math.abs(date.to.getHours() - date.from.getHours());

  return {
    picture,
    description,
    destination,
    offer,
    type,
    date,
    price,
    duration,
    isFavorite,
  };
};

const generateEvents = (count) => {
  return new Array(count)
    .fill(``)
    .map(generateEvent);
};

const groupByDay = (allEvents) => {
  return allEvents.reduce((acc, event) => {
    const date = event.date.from.getDate();
    const month = event.date.from.getMonth();
    const year = event.date.from.getFullYear();
    const key = `${date}-${month}-${year}`;

    acc[key] = acc[key] || [];
    acc[key] = [...acc[key], event];

    return acc;
  }, {});
};
const generateAllDays = (days) => {
  return Object.values(days)
    .map((day, key) => generateDay(day, key))
    .join(``);
};

const generateDay = (day, index) => {
  return `<li class="trip-days__item  day">
       <div class="day__info">
           <span class="day__counter">${index + 1}</span>
           <time class="day__date" datetime="2019-03-18">MAR 18</time>
       </div>
       <ul class="trip-events__list">
          ${eventForm(day)}
      </ul>
    </li>`;
};

export {generateEvent, generateEvents, groupByDay, generateAllDays};

