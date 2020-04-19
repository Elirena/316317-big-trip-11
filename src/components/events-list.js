import {createEventPoint} from "./event-point";

const eventPoint = (events) => {
  const eventData = events.map((item) => createEventPoint(item)).join(`\n`);
  return ` ${eventData} `;
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
          ${eventPoint(day)}
      </ul>
    </li>`;
};

export {eventPoint, generateDay, generateAllDays};
