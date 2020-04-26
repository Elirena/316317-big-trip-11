import {render, RenderPosition} from "./utils.js";

import MenuComponent from './components/menu';
import SortComponent from './components/sort';
import TripPriceComponent from "./components/trip-price";
import TripInfoComponent from './components/trip-info';
import FilterComponent from './components/filter';
import EventEditComponent from './components/event-edit';
import EventPointComponent from './components/event-point';
import DayList from './components/day-list';
import Day from './components/day';

import {generateSorts} from './data/sort-values';
const sorts = generateSorts();

import {generateFilters} from './data/filter-values';
const filters = generateFilters();

import {generateEvents} from './data/events';

const EVENT_COUNT = 15;
const events = generateEvents(EVENT_COUNT);
const eventEdition = generateEvents(1);

const renderEventPoint = (eventListElement, event) => {
  const onEditButtonClick = () => {
    eventListElement.replaceChild(eventEditComponent.getElement(), eventPointComponent.getElement());
  };

  const onEditFormSubmit = (evt) => {
    evt.preventDefault();
    eventListElement.replaceChild(eventPointComponent.getElement(), eventEditComponent.getElement());
  };

  const eventPointComponent = new EventPointComponent(event);
  const editButton = eventPointComponent.getElement().querySelector(`.event__rollup-btn`);
  editButton.addEventListener(`click`, onEditButtonClick);

  const eventEditComponent = new EventEditComponent(event);
  const editForm = eventEditComponent.getElement();
  editForm.addEventListener(`submit`, onEditFormSubmit);

  render(eventListElement, eventPointComponent.getElement(), RenderPosition.BEFOREEND);
};

const renderDay = (dayElement, day) => {
  const eventListElement = day.getElement().querySelector(`.trip-events__list`);

  render(dayElement, day.getElement(), RenderPosition.BEFOREEND);

  day.getDay().forEach((event) => {
    renderEventPoint(eventListElement, event);
  });
};


const renderDayList = (dayListElement, dayList) => {
  const groupByDay = events.reduce((acc, event) => {
    const date = event.date.from.getDate();
    const month = event.date.from.getMonth();
    const year = event.date.from.getFullYear();
    const key = `${date}-${month}-${year}`;

    acc[key] = acc[key] || [];
    acc[key] = [...acc[key], event];

    return acc;
  }, {});
  const dayElement = dayList.querySelector(`ul`);

  render(dayListElement, dayList, RenderPosition.BEFOREEND);

  Object.values(groupByDay)
    .forEach((day, index) => {
      renderDay(dayElement, new Day(day, index));
    });
};


onload = function () {
  const tripMain = document.getElementsByClassName(`trip-main`)[0];
  render(tripMain, new TripPriceComponent().getElement(), RenderPosition.AFTERBEGIN);
  render(tripMain, new TripInfoComponent().getElement(), RenderPosition.AFTERBEGIN);

  const tripControls = document.getElementsByClassName(`trip-controls`)[0];
  render(tripControls, new MenuComponent().getElement(), RenderPosition.BEFOREEND);
  render(tripControls, new FilterComponent(filters).getElement(), RenderPosition.BEFOREEND);

  const tripEvents = document.getElementsByClassName(`trip-events`)[0];
  render(tripEvents, new SortComponent(sorts).getElement(), RenderPosition.BEFOREEND);

  const dayListComponent = new DayList();
  renderDayList(tripEvents, dayListComponent.getElement());
};
