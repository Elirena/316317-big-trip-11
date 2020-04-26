import {getDescription} from './place-description';

const types = [`taxi`, `bus`, `train`, `ship`, `transport`, `drive`, `flight`, `check-in`, `sightseeing`, `restaurant`];
export const destinations = [`Amsterdam`, `Geneva`, `Chamonix`, `Saint Petersburg`];

export const AllOffers = [
  {type: `transfer`, name: `Add luggage`, price: 30},
  {type: `transfer`, name: `Switch to comfort class`, price: 100},
  {type: `activity`, name: `Add meal`, price: 15},
  {type: `transfer`, name: `Choose seats`, price: 5},
  {type: `transfer`, name: `Travel by train`, price: 40},
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

  const offers = [];
  for (let i = 0; i < getRandomIntegerNumber(1, 3); i++) {
    offers.push(getRandomArrayItem(AllOffers));
  }

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
    offers,
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

// const groupByDay = (allEvents) => {
//   return allEvents.reduce((acc, event) => {
//     const date = event.date.from.getDate();
//     const month = event.date.from.getMonth();
//     const year = event.date.from.getFullYear();
//     const key = `${date}-${month}-${year}`;
//
//     acc[key] = acc[key] || [];
//     acc[key] = [...acc[key], event];
//
//     return acc;
//   }, {});
// };

export {generateEvent, generateEvents};

